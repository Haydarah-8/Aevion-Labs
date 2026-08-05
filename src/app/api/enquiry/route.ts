import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

/**
 * Enquiry endpoint.
 *
 * Deliberately has no mail provider wired in yet: shipping a form that silently
 * drops submissions is worse than shipping no form. Set RESEND_API_KEY and the
 * send below starts working; until then the route validates, logs and returns
 * an honest error so the client can surface the mailto fallback.
 */
type Body = { name?: unknown; email?: unknown; brief?: unknown };

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Body | null;
  if (!body) {
    return NextResponse.json({ error: "Could not read that." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const brief = typeof body.brief === "string" ? body.brief.trim() : "";

  if (!name) return NextResponse.json({ error: "Please add your name." }, { status: 400 });
  if (!isEmail(email))
    return NextResponse.json({ error: "That email does not look right." }, { status: 400 });
  if (brief.length < 10)
    return NextResponse.json(
      { error: "Tell me a little more about the project." },
      { status: 400 }
    );

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[enquiry] no RESEND_API_KEY set, enquiry not delivered:", { name, email });
    return NextResponse.json(
      { error: "The form is not connected yet." },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: SITE.name + " <" + SITE.email + ">",
      to: [SITE.email],
      reply_to: email,
      subject: `Enquiry from ${name}`,
      text: `${name} <${email}>\n\n${brief}`,
    }),
  });

  if (!res.ok) {
    console.error("[enquiry] provider rejected:", await res.text());
    return NextResponse.json({ error: "Could not send that just now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
