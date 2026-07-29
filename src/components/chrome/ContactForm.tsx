"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

type State = "idle" | "sending" | "sent" | "error";

/**
 * A real form, not a `mailto:`. The previous site's only route to an enquiry
 * opened an email client the visitor may not have configured, which loses
 * everyone on a work machine or webmail and reports nothing back.
 *
 * Progressive: the mailto stays as a visible fallback under the form, so a
 * failed request is never a dead end.
 */
export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="border border-rule bg-sheet p-8" role="status">
        <p className="heading">Got it.</p>
        <p className="mt-4 text-dim">
          I will reply within two working days. If it is urgent, email me directly at{" "}
          <a href={`mailto:${SITE.email}`} className="link text-ink">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <Field name="name" label="Your name" required />
      <Field name="email" label="Email" type="email" required />
      <Field name="brief" label="What are you trying to do?" textarea required />

      {error && (
        <p className="text-[0.95rem] text-ink" role="alert">
          {error} You can also email{" "}
          <a href={`mailto:${SITE.email}`} className="link">
            {SITE.email}
          </a>
          .
        </p>
      )}

      <button type="submit" className="btn" disabled={state === "sending"}>
        {state === "sending" ? "Sending" : "Send it"}
      </button>

      <p className="text-[0.85rem] text-dim">
        No newsletter, no CRM sequence, no data passed anywhere else.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const shared =
    "mt-2 w-full border border-rule bg-paper px-4 py-3 text-[1rem] outline-none transition-colors focus:border-ink";

  return (
    <div>
      <label htmlFor={name} className="tag">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={5} required={required} className={shared} />
      ) : (
        <input id={name} name={name} type={type} required={required} className={shared} />
      )}
    </div>
  );
}
