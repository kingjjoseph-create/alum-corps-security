import type { ReactNode } from "react";

export const inputClass =
  "mt-2 block w-full border border-white/15 bg-ink/80 px-4 py-3.5 text-white placeholder:text-white/30 transition-colors focus:border-gold focus:outline-none aria-[invalid=true]:border-red-400";
export const labelClass = "text-xs font-semibold tracking-[0.2em] text-white/80 uppercase";

export function RequiredMark() {
  return (
    <span className="text-gold" aria-hidden="true">
      {" "}
      *
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
        {hint && <span className="ml-2 font-normal tracking-normal text-white/40 normal-case">{hint}</span>}
      </label>
      {children}
      <FieldError id={id} error={error} />
    </div>
  );
}

/** Invalid-state ARIA props for an input, given its error message. */
export const invalidProps = (id: string, error?: string) =>
  error ? ({ "aria-invalid": true, "aria-describedby": `${id}-error` } as const) : {};
