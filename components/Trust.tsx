import { ShieldIcon, TargetIcon } from "./Icons";
import { site } from "@/lib/site";

/** Full license disclosure with a link to the state regulator. */
export function LicenseCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative border border-gold/30 bg-gradient-to-b from-graphite to-coal p-7 sm:p-8 ${className}`}>
      <span aria-hidden="true" className="absolute -top-px -left-px h-8 w-8 border-t-2 border-l-2 border-gold" />
      <ShieldIcon className="h-9 w-9 text-gold" />
      <p className="mt-5 text-xs font-semibold tracking-[0.3em] text-gold uppercase">Licensed Security Agency</p>
      <p className="mt-3 text-2xl font-semibold tracking-wide text-white tabular-nums">{site.licenseLabel}</p>
      <p className="mt-3 leading-relaxed text-mist">
        {site.legalName} holds a {site.licenseClass} license issued by the {site.licenseIssuer}.
      </p>
      <a
        href={site.licenseVerifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex min-h-11 lg:min-h-0 items-center text-sm text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light lg:mt-5"
      >
        Verify with the Division of Licensing<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}

/** Service area list — counties plus the "on request" note. */
export function ServiceAreasCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative border border-white/10 bg-gradient-to-b from-graphite to-coal p-7 sm:p-8 ${className}`}>
      <TargetIcon className="h-9 w-9 text-gold" />
      <p className="mt-5 text-xs font-semibold tracking-[0.3em] text-gold uppercase">Service Areas</p>
      <p className="mt-3 font-display text-3xl font-semibold text-white">{site.serviceRegionLabel}</p>
      <ul className="mt-4 space-y-2">
        {site.serviceAreas.map((a) => (
          <li key={a} className="flex items-center gap-3 text-white/85">
            <span aria-hidden="true" className="h-px w-4 bg-gold" />
            {a}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-mist">{site.serviceAreaNote}</p>
    </div>
  );
}
