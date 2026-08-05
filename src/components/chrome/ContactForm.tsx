"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

type State = "idle" | "sending" | "sent" | "error";

/**
 * A real form, not a `mailto:`. A mailto opens an email client the visitor may
 * not have configured, which loses everyone on a work machine or on webmail and
 * reports nothing back either way.
 *
 * Progressive: the address stays visible under the form, so a failed request is
 * never a dead end.
 *
 * Three fields, never more. Every additional field costs completions, and
 * nothing here needs a phone number to write a reply.
 */
export function ContactForm({
  briefLabel = "What are you trying to do?",
  briefPlaceholder,
  submitLabel = "Send it",
  source = "contact",
  confirmation = "You will get a reply within two working days.",
}: {
  briefLabel?: string;
  briefPlaceholder?: string;
  submitLabel?: string;
  source?: string;
  confirmation?: string;
}) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);

    const data = { ...Object.fromEntries(new FormData(e.currentTarget)), source };

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
      <div className="tile" role="status">
        <p className="heading">Got it.</p>
        <p className="body-dim mt-4">
          {confirmation} If it is urgent, email direct at{" "}
          <a href={"mailto:" + SITE.email} className="link-under text-ink">
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
      <Field
        name="brief"
        label={briefLabel}
        placeholder={briefPlaceholder}
        textarea
        required
      />

      {error && (
        <p className="text-[0.95rem]" role="alert">
          {error} You can also email{" "}
          <a href={"mailto:" + SITE.email} className="link-under">
            {SITE.email}
          </a>
          .
        </p>
      )}

      <button type="submit" className="btn btn-lg" disabled={state === "sending"}>
        {state === "sending" ? "Sending" : submitLabel}
      </button>

      <p className="text-[0.85rem] text-dim">
        No newsletter, no CRM sequence, nothing passed anywhere else.
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
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
}) {
  const shared =
    "mt-2 w-full rounded-2xl border border-rule bg-paper px-5 py-3.5 text-[1rem] outline-none transition-colors placeholder:text-dim focus:border-ink";

  return (
    <div>
      <label htmlFor={name} className="eyebrow">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          required={required}
          placeholder={placeholder}
          className={shared}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={shared}
        />
      )}
    </div>
  );
}
