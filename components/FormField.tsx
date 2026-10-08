import { useEffect, useRef, type ReactNode } from "react";

export const inputClass =
  "mt-2 block w-full scroll-mt-36 border border-white/15 bg-ink/80 px-4 py-3.5 text-white placeholder:text-white/45 transition-colors focus:border-gold focus:outline-none aria-[invalid=true]:border-red-400";
export const labelClass = "text-xs font-semibold tracking-[0.14em] text-white/80 uppercase sm:tracking-[0.2em]";

export function RequiredMark() {
  return (
    <span className="text-gold" aria-hidden="true">
      {"\u00a0*"}
    </span>
  );
}

export function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
      {error}
    </p>
  );
}

export function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <RequiredMark />}
        {hint && <span className="ml-2 font-normal tracking-normal text-white/60 normal-case">{hint}</span>}
      </label>
      {children}
      <FieldError id={id} error={error} />
    </div>
  );
}

/** Invalid-state ARIA props for an input, given its error message. */
export const invalidProps = (id: string, error?: string) =>
  error ? ({ "aria-invalid": true, "aria-describedby": `${id}-error` } as const) : {};

/** Numbered fieldset used to break long forms into sections. */
export function FormSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <fieldset className="border-t border-white/10 pt-10 first:border-t-0 first:pt-0">
      <legend className="float-left mb-8 flex w-full items-center gap-4">
        <span className="font-display text-3xl font-semibold text-gold-gradient">{number}</span>
        <span className="text-sm font-semibold tracking-[0.14em] text-white uppercase sm:tracking-[0.25em]">{title}</span>
      </legend>
      <div className="clear-both grid gap-6 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

/**
 * Tap-friendly option buttons backed by real radio inputs (single choice) or
 * checkboxes (`multiple`). Radios lay out in one row; checkboxes wrap in a grid.
 */
export function ChoiceGroup({
  name,
  label,
  options,
  defaultValue,
  multiple = false,
  required = false,
  hint,
  className = "",
}: {
  name: string;
  label: string;
  options: readonly string[];
  defaultValue?: string | readonly string[];
  multiple?: boolean;
  required?: boolean;
  hint?: string;
  className?: string;
}) {
  const selected = Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : [];
  return (
    <fieldset className={className}>
      <legend className={labelClass}>
        {label}
        {required && <RequiredMark />}
        {hint && <span className="ml-2 font-normal tracking-normal text-white/60 normal-case">{hint}</span>}
      </legend>
      <div className={`mt-2 grid gap-2 ${multiple ? "grid-cols-2 sm:grid-cols-3" : "auto-cols-fr grid-flow-col"}`}>
        {options.map((opt) => (
          <label key={opt} className="relative cursor-pointer has-[:disabled]:cursor-not-allowed">
            <input
              type={multiple ? "checkbox" : "radio"}
              name={name}
              value={opt}
              defaultChecked={selected.includes(opt)}
              className="peer sr-only"
            />
            <span className="flex h-full items-center justify-center gap-2 border border-white/15 bg-ink/80 px-3 py-3.5 text-center text-sm font-medium text-white/75 transition-all peer-checked:border-gold peer-checked:bg-gold/15 peer-checked:text-gold peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold peer-disabled:opacity-60 hover:border-white/40">
              {opt}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/**
 * After a failed submission, move focus (and scroll) to the first invalid field
 * so people on long forms or small screens can see what needs fixing.
 */
export function useFocusFirstError(status: string, errors: object | undefined) {
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (status !== "error" || !errors || !Object.keys(errors).length) return;
    formRef.current?.querySelector<HTMLElement>("[aria-invalid=true]")?.focus();
  }, [status, errors]);
  return formRef;
}
