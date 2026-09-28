"use client";

import { useState, type FormEvent } from "react";
import { ChoiceGroup, Field, FormSection, inputClass } from "@/components/FormField";
import { ArrowRightIcon, ClipboardIcon, ShieldIcon } from "@/components/Icons";
import {
  applicationsEnabled,
  assignmentOptions,
  availabilityOptions,
  credentialOptions,
  experienceOptions,
  licenseStatuses,
} from "@/lib/careers";
import { site } from "@/lib/site";

/**
 * Careers application form.
 *
 * SAFETY: this form never transmits data. There is no `action`, submission is
 * always prevented, and no server endpoint exists for it. Applicant data
 * (license numbers, resumes) must only be collected once a secure backend is
 * configured — see README → "Enabling online applications".
 *
 * - Production (applicationsEnabled = false): the form is shown locked.
 * - Development: fields are interactive so the design can be reviewed.
 */
const previewMode = !applicationsEnabled && process.env.NODE_ENV !== "production";
const locked = !applicationsEnabled && !previewMode;

export function CareersForm() {
  const [resumeName, setResumeName] = useState<string>("");
  const [notice, setNotice] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Never submit natively — that would put field values in the URL.
    // Secure submission is intentionally not implemented yet.
    setNotice(
      previewMode
        ? "Preview only — nothing was sent or stored. Online applications will be enabled once a secure backend is configured."
        : `Online applications are not open yet. Please call ${site.phone} to express interest.`,
    );
  };

  return (
    <div>
      {locked ? (
        <div role="note" className="mb-10 flex gap-4 border border-gold/40 bg-gold/10 p-5 sm:p-6">
          <ShieldIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
          <div>
            <p className="font-semibold text-white">Online applications are opening soon.</p>
            <p className="mt-1 text-sm leading-relaxed text-white/75">
              We&rsquo;re finalizing a secure application system to protect your personal and licensing information.
              In the meantime, call{" "}
              <a href={site.phoneHref} className="text-gold hover:text-gold-light">
                {site.phone}
              </a>{" "}
              to express interest.
            </p>
          </div>
        </div>
      ) : (
        previewMode && (
          <div role="note" className="mb-10 border border-dashed border-gold/50 bg-gold/5 p-5 text-sm text-white/80">
            <span className="font-semibold text-gold">Preview mode.</span> This form is interactive for design review
            only. Nothing you enter is sent or stored. On the live site it stays locked until a secure backend is
            configured.
          </div>
        )
      )}

      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <fieldset disabled={locked} className="space-y-10 disabled:opacity-60">
          <p className="text-sm text-mist">
            Fields marked <span className="text-gold">*</span> are required.
          </p>

          <FormSection number="01" title="Your Information">
            <div className="sm:col-span-2">
              <Field id="fullName" label="Full name" required>
                <input id="fullName" name="fullName" autoComplete="name" className={inputClass} />
              </Field>
            </div>
            <Field id="applicantPhone" label="Phone" required>
              <input id="applicantPhone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
            </Field>
            <Field id="applicantEmail" label="Email" required>
              <input id="applicantEmail" name="email" type="email" autoComplete="email" className={inputClass} />
            </Field>
            <div className="sm:col-span-2">
              <Field id="cityState" label="City / State" required>
                <input id="cityState" name="cityState" placeholder="e.g. West Palm Beach, FL" className={inputClass} />
              </Field>
            </div>
          </FormSection>

          <FormSection number="02" title="Licensing & Experience">
            <Field id="licenseStatus" label="Security license status" required>
              <select id="licenseStatus" name="licenseStatus" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select status
                </option>
                {licenseStatuses.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field id="licenseNumber" label="License number" hint="(if licensed)">
              <input id="licenseNumber" name="licenseNumber" autoComplete="off" placeholder="Class D / G number" className={inputClass} />
            </Field>
            <ChoiceGroup name="credentials" label="Armed / unarmed credentials" options={credentialOptions} />
            <Field id="experience" label="Years of experience" required>
              <select id="experience" name="experience" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select experience
                </option>
                {experienceOptions.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
          </FormSection>

          <FormSection number="03" title="Availability & Preferences">
            <ChoiceGroup
              name="availability"
              label="Availability"
              hint="(select all that apply)"
              options={availabilityOptions}
              multiple
              className="sm:col-span-2"
            />
            <ChoiceGroup
              name="assignments"
              label="Preferred assignments"
              hint="(select all that apply)"
              options={assignmentOptions}
              multiple
              className="sm:col-span-2"
            />
          </FormSection>

          <FormSection number="04" title="Resume">
            <div className="sm:col-span-2">
              <label
                htmlFor="resume"
                className="group flex cursor-pointer flex-col items-center justify-center gap-3 border border-dashed border-white/25 bg-ink/60 px-6 py-10 text-center transition-colors hover:border-gold/60 has-[:disabled]:cursor-not-allowed has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold"
              >
                <ClipboardIcon className="h-10 w-10 text-gold/80 transition-colors group-hover:text-gold" />
                <span className="font-semibold text-white">
                  {resumeName || "Upload your resume"}
                </span>
                <span className="text-sm text-mist">
                  {resumeName ? "Click to choose a different file" : "PDF, DOC, or DOCX · up to 5 MB"}
                </span>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="sr-only"
                  onChange={(e) => setResumeName(e.target.files?.[0]?.name ?? "")}
                />
              </label>
            </div>
          </FormSection>

          <div className="border-t border-white/10 pt-10">
            {notice && (
              <p role="status" className="mb-6 border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-white/85">
                {notice}
              </p>
            )}
            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-gold-dark via-gold to-gold-light px-4 py-6 text-[0.95rem] font-bold tracking-[0.1em] text-ink uppercase shadow-[0_20px_60px_-20px_rgb(222_173_47/0.7)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:hover:translate-y-0 sm:gap-4 sm:px-8 sm:text-lg sm:tracking-[0.22em]"
            >
              <span className="text-balance">{locked ? "Applications Opening Soon" : "Submit Application"}</span>
              {!locked && <ArrowRightIcon className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
