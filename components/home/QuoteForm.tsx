"use client";

import { useActionState, type ReactNode } from "react";
import { submitQuote, type QuoteState } from "@/app/actions/quote";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { capabilities, site } from "@/lib/site";

const initial: QuoteState = { status: "idle" };

const inputClass =
  "mt-2 block w-full border border-white/15 bg-ink/80 px-4 py-3.5 text-white placeholder:text-white/30 transition-colors focus:border-gold focus:outline-none aria-[invalid=true]:border-red-400";
const labelClass = "text-xs font-semibold tracking-[0.2em] text-white/80 uppercase";

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && (
          <span className="text-gold" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteForm() {
  const [state, action, pending] = useActionState(submitQuote, initial);
  const err = state.errors ?? {};
  const v = state.values ?? {};
  const aria = (key: keyof typeof err) =>
    err[key] ? { "aria-invalid": true, "aria-describedby": `${key}-error` } : {};

  if (state.status === "success") {
    return (
      <div role="status" className="flex h-full flex-col items-center justify-center py-12 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-8 font-display text-4xl font-semibold text-white">Request received.</h3>
        <p className="mt-4 max-w-sm leading-relaxed text-mist">
          Thank you. A member of our team will contact you shortly. For immediate needs, call{" "}
          <a href={site.phoneHref} className="text-gold hover:text-gold-light">
            {site.phone}
          </a>
          .
        </p>
        {state.message && <p className="mt-4 text-xs text-white/40">{state.message}</p>}
      </div>
    );
  }

  return (
    <form key={JSON.stringify(v)} action={action} noValidate className="grid gap-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Field id="name" label="Full name" required error={err.name}>
          <input id="name" name="name" defaultValue={v.name} autoComplete="name" required className={inputClass} {...aria("name")} />
        </Field>
      </div>
      <Field id="company" label="Company / Organization">
        <input id="company" name="company" defaultValue={v.company} autoComplete="organization" className={inputClass} />
      </Field>
      <Field id="location" label="Property / Event location">
        <input id="location" name="location" defaultValue={v.location} placeholder="City, State" className={inputClass} />
      </Field>
      <Field id="email" label="Email" error={err.email}>
        <input id="email" name="email" defaultValue={v.email} type="email" autoComplete="email" className={inputClass} {...aria("email")} />
      </Field>
      <Field id="phone" label="Phone" error={err.phone}>
        <input id="phone" name="phone" defaultValue={v.phone} type="tel" autoComplete="tel" className={inputClass} {...aria("phone")} />
      </Field>
      <div className="sm:col-span-2">
        <Field id="service" label="Service needed" required error={err.service}>
          <select id="service" name="service" required defaultValue={v.service ?? ""} className={inputClass} {...aria("service")}>
            <option value="" disabled>
              Select a service
            </option>
            {capabilities.map((c) => (
              <option key={c.slug}>{c.title}</option>
            ))}
            <option>Multiple services / Not sure</option>
          </select>
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field id="message" label="Coverage details">
          <textarea
            id="message"
            name="message"
            defaultValue={v.message}
            rows={4}
            placeholder="Dates, hours, number of officers, or anything we should know."
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      {/* Honeypot for bots — hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p role="status" aria-live="polite" className={`text-sm ${state.status === "error" ? "text-red-300" : "text-mist"}`}>
          {state.status === "error" ? state.message : "Email or phone required. We respond promptly."}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex shrink-0 items-center justify-center gap-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light px-8 py-4 text-sm font-semibold tracking-[0.18em] text-ink uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgb(222_173_47/0.7)] disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending…" : "Submit Request"}
          {!pending && <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
        </button>
      </div>
    </form>
  );
}
