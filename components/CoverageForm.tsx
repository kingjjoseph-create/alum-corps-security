"use client";

import Link from "next/link";
import { useActionState, useState, type FormEvent } from "react";
import { submitCoverageRequest } from "@/app/actions/coverage";
import {
  ChoiceGroup,
  Field,
  FieldError,
  FormSection as Section,
  RequiredMark,
  inputClass,
  invalidProps,
  labelClass,
  useFocusFirstError,
} from "@/components/FormField";
import { ArrowRightIcon, CheckIcon, ShieldIcon } from "@/components/Icons";
import {
  armedOptions,
  frequencyOptions,
  securityTypes,
  vehiclePatrolOptions,
  type CoverageState,
} from "@/lib/coverage-form";
import { site } from "@/lib/site";

const initial: CoverageState = { status: "idle" };

export function CoverageForm() {
  const [state, action, pending] = useActionState(submitCoverageRequest, initial);
  const formRef = useFocusFirstError(state.status, state.errors);
  const v = state.values ?? {};

  // Hide a field's error as soon as the visitor edits it; reset on each new submission result.
  const [edited, setEdited] = useState<ReadonlySet<string>>(new Set());
  const [lastState, setLastState] = useState(state);
  if (state !== lastState) {
    setLastState(state);
    setEdited(new Set());
  }
  const err = Object.fromEntries(
    Object.entries(state.errors ?? {}).filter(([field]) => !edited.has(field)),
  ) as NonNullable<CoverageState["errors"]>;
  const markEdited = (e: FormEvent<HTMLFormElement>) => {
    const name = (e.target as HTMLInputElement).name;
    if (name && state.errors?.[name as keyof typeof state.errors] && !edited.has(name)) {
      setEdited((prev) => new Set(prev).add(name));
    }
  };
  const [securityType, setSecurityType] = useState(v.securityType ?? "");
  const isEvent = securityType === "Event Security";

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-center py-16 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold text-gold">
          <CheckIcon className="h-10 w-10" />
        </span>
        <h2 className="mt-8 font-display text-4xl font-semibold text-white sm:text-5xl">Request received.</h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">
          Thank you. A member of the {site.name} team will review your request and contact you shortly. For
          immediate needs, call{" "}
          <a href={site.phoneHref} className="text-gold hover:text-gold-light">
            {site.phone}
          </a>
          .
        </p>
        {state.message && <p className="mt-4 text-xs text-white/50">{state.message}</p>}
      </div>
    );
  }

  return (
    <form ref={formRef} key={JSON.stringify(v)} action={action} onInput={markEdited} onChange={markEdited} noValidate className="space-y-10">
      <p className="text-sm text-mist">
        Fields marked <span className="text-gold">*</span> are required.
      </p>

      <Section number="01" title="Contact Information">
        <Field id="name" label="Name" required error={err.name}>
          <input id="name" name="name" autoComplete="name" required defaultValue={v.name} className={inputClass} {...invalidProps("name", err.name)} />
        </Field>
        <Field id="company" label="Company / Organization">
          <input id="company" name="company" autoComplete="organization" defaultValue={v.company} className={inputClass} />
        </Field>
        <Field id="email" label="Email" required error={err.email}>
          <input id="email" name="email" type="email" autoComplete="email" required defaultValue={v.email} className={inputClass} {...invalidProps("email", err.email)} />
        </Field>
        <Field id="phone" label="Phone" required error={err.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required defaultValue={v.phone} className={inputClass} {...invalidProps("phone", err.phone)} />
        </Field>
      </Section>

      <Section number="02" title="Coverage Details">
        <div className="sm:col-span-2">
          <Field id="location" label="Service location" required error={err.location}>
            <input
              id="location"
              name="location"
              required
              autoComplete="street-address"
              placeholder="Address or city, state"
              defaultValue={v.location}
              className={inputClass}
              {...invalidProps("location", err.location)}
            />
          </Field>
        </div>
        <Field id="securityType" label="Security type" required error={err.securityType}>
          <select
            id="securityType"
            name="securityType"
            required
            defaultValue={v.securityType ?? ""}
            onChange={(e) => setSecurityType(e.target.value)}
            className={inputClass}
            {...invalidProps("securityType", err.securityType)}
          >
            <option value="" disabled>
              Select security type
            </option>
            {securityTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field id="guards" label="Number of guards" hint="(estimate)" error={err.guards}>
          <input
            id="guards"
            name="guards"
            type="number"
            min={1}
            step={1}
            inputMode="numeric"
            placeholder="e.g. 2"
            defaultValue={v.guards}
            className={inputClass}
            {...invalidProps("guards", err.guards)}
          />
        </Field>
        <ChoiceGroup name="armed" label="Armed / Unarmed" options={armedOptions} defaultValue={v.armed} />
        <ChoiceGroup name="vehiclePatrol" label="Vehicle patrol required?" options={vehiclePatrolOptions} defaultValue={v.vehiclePatrol} />
        <div className="sm:col-span-2">
          <Field
            id="attendance"
            label="Event attendance"
            hint={isEvent ? "(recommended for events)" : "(if applicable)"}
            error={err.attendance}
          >
            <input
              id="attendance"
              name="attendance"
              type="number"
              min={1}
              step={1}
              inputMode="numeric"
              placeholder="Expected number of guests"
              defaultValue={v.attendance}
              className={`${inputClass} ${isEvent ? "border-gold/60" : ""}`}
              {...invalidProps("attendance", err.attendance)}
            />
          </Field>
        </div>
      </Section>

      <Section number="03" title="Schedule">
        <Field id="startDate" label="Start date" error={err.startDate}>
          <input
            id="startDate"
            name="startDate"
            type="date"
            defaultValue={v.startDate}
            className={`${inputClass} [color-scheme:dark]`}
            {...invalidProps("startDate", err.startDate)}
          />
        </Field>
        <ChoiceGroup name="frequency" label="Recurring or one-time" options={frequencyOptions} defaultValue={v.frequency} />
        <div className="sm:col-span-2">
          <Field id="hours" label="Hours required">
            <input
              id="hours"
              name="hours"
              placeholder="e.g. Mon–Fri, 6 PM – 6 AM"
              defaultValue={v.hours}
              className={inputClass}
            />
          </Field>
        </div>
      </Section>

      <Section number="04" title="Your Security Needs">
        <div className="sm:col-span-2">
          <label htmlFor="description" className={labelClass}>
            Description of security needs
            <RequiredMark />
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            required
            placeholder="Tell us about the property or event, any concerns or past incidents, special areas (VIP, gates, docks), and anything else we should know."
            defaultValue={v.description}
            className={`${inputClass} resize-y`}
            {...invalidProps("description", err.description)}
          />
          <FieldError id="description" error={err.description} />
        </div>
      </Section>

      {/* Honeypot for bots — hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="border-t border-white/10 pt-10">
        {state.status === "error" && (
          <p role="alert" className="mb-6 border border-red-400/40 bg-red-400/10 px-5 py-4 text-sm text-red-200">
            {state.message}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="group relative flex w-full items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-gold-dark via-gold to-gold-light px-4 py-6 text-[0.95rem] font-bold tracking-[0.1em] text-ink uppercase sm:gap-4 sm:px-8 sm:tracking-[0.22em] shadow-[0_20px_60px_-20px_rgb(222_173_47/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-20px_rgb(222_173_47/0.9)] disabled:cursor-wait disabled:opacity-70 sm:text-lg"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 blur-md transition-transform duration-1000 group-hover:translate-x-[400%]"
          />
          <ShieldIcon className="hidden h-6 w-6 shrink-0 sm:block" />
          <span className="text-balance">{pending ? "Sending Request…" : "Request Security Coverage"}</span>
          {!pending && <ArrowRightIcon className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />}
        </button>
        <p className="mt-5 text-center text-sm text-mist">
          No obligation. By submitting, you agree to our{" "}
          <Link href="/privacy" className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light">
            Privacy Policy
          </Link>
          . Prefer to talk? Call{" "}
          <a href={site.phoneHref} className="text-gold hover:text-gold-light">
            {site.phone}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
