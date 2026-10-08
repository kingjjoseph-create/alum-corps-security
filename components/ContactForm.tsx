"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { submitContact } from "@/app/actions/contact";
import {
  Field,
  FormSuccess,
  Honeypot,
  inputClass,
  invalidProps,
  useFocusFirstError,
} from "@/components/FormField";
import { ArrowRightIcon } from "@/components/Icons";
import { contactTopics, type ContactState } from "@/lib/contact-form";
import { site } from "@/lib/site";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const formRef = useFocusFirstError(state.status, state.errors);
  const err = state.errors ?? {};
  const v = state.values ?? {};
  const [topic, setTopic] = useState(v.topic ?? "");

  if (state.status === "success") {
    return (
      <FormSuccess title="Message received." note={state.message}>
        Thank you for contacting {site.name}. Our team will respond shortly. For urgent matters, call{" "}
        <a href={site.phoneHref} className="text-gold hover:text-gold-light">
          {site.phone}
        </a>
        .
      </FormSuccess>
    );
  }

  return (
    <form ref={formRef} key={JSON.stringify(v)} action={action} noValidate className="grid gap-6 sm:grid-cols-2">
      <p className="text-sm text-mist sm:col-span-2">
        Fields marked <span className="text-gold">*</span> are required.
      </p>
      <Field id="contact-name" label="Name" required error={err.name}>
        <input id="contact-name" name="name" autoComplete="name" required defaultValue={v.name} className={inputClass} {...invalidProps("contact-name", err.name)} />
      </Field>
      <Field id="contact-email" label="Email" required error={err.email}>
        <input id="contact-email" name="email" type="email" autoComplete="email" required defaultValue={v.email} className={inputClass} {...invalidProps("contact-email", err.email)} />
      </Field>
      <Field id="contact-phone" label="Phone" error={err.phone}>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" defaultValue={v.phone} className={inputClass} {...invalidProps("contact-phone", err.phone)} />
      </Field>
      <Field id="contact-topic" label="Topic" required error={err.topic}>
        <select
          id="contact-topic"
          name="topic"
          required
          defaultValue={v.topic ?? ""}
          onChange={(e) => setTopic(e.target.value)}
          className={inputClass}
          {...invalidProps("contact-topic", err.topic)}
        >
          <option value="" disabled>
            Select a topic
          </option>
          {contactTopics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      {topic === "Employment inquiry" && (
        <p className="border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-white/85 sm:col-span-2">
          Please don&rsquo;t include license numbers or resumes here. Our team will follow up with next steps — see{" "}
          <Link href="/careers" className="text-gold underline underline-offset-4">
            Careers
          </Link>
          .
        </p>
      )}
      <div className="sm:col-span-2">
        <Field id="contact-message" label="Message" required error={err.message}>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            defaultValue={v.message}
            className={`${inputClass} resize-y`}
            {...invalidProps("contact-message", err.message)}
          />
        </Field>
      </div>

      <Honeypot id="contact_company_website" />

      <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p role="status" aria-live="polite" className={`text-sm ${state.status === "error" ? "text-red-300" : "text-mist"}`}>
          {state.status === "error" ? (
            state.message
          ) : (
            <>
              By submitting, you agree to our{" "}
              <Link href="/privacy" className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light">
                Privacy Policy
              </Link>
              .
            </>
          )}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex shrink-0 items-center justify-center gap-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light px-8 py-4 text-sm font-semibold tracking-[0.18em] text-ink uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send Message"}
          {!pending && <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
        </button>
      </div>
    </form>
  );
}
