"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/site";
import { ButtonLink } from "./Button";
import { ChevronDownIcon, CloseIcon, MailIcon, MenuIcon, PhoneIcon, ShieldIcon } from "./Icons";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  // Escape closes any open menu; clicking outside closes the dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (pathname.startsWith(href)) return true;
    const item = navigation.find((n) => n.href === href);
    return !!item?.children?.some((c) => pathname.startsWith(c.href));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={`hidden border-b border-gold/15 bg-ink/90 backdrop-blur transition-all duration-500 lg:block ${
          scrolled ? "-mt-10 opacity-0" : "mt-0 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs tracking-wide text-mist lg:px-8">
          <p className="uppercase tracking-[0.2em]">{site.licenseLabel}</p>
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
              <PhoneIcon className="h-3.5 w-3.5 text-gold" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
              <MailIcon className="h-3.5 w-3.5 text-gold" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-500 ${
          scrolled || mobileOpen
            ? "border-gold/20 bg-ink/95 shadow-[0_10px_40px_-20px_rgb(0_0_0/0.9)] backdrop-blur-md"
            : "border-white/5 bg-ink"
        }`}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-6 lg:px-8 ${
            scrolled ? "h-20" : "h-22 lg:h-24"
          }`}
        >
          <Logo priority className={`transition-all duration-500 ${scrolled ? "h-16" : "h-[4.5rem] lg:h-20"}`} />

          <ul className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) =>
              item.children ? (
                <li
                  key={item.href}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`nav-link px-4 py-2 ${isActive(item.href) ? "text-gold" : "text-white/85"}`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="-ml-3 p-2 pr-3 text-white/70 transition-colors hover:text-gold"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      aria-label={`${servicesOpen ? "Hide" : "Show"} ${item.label} submenu`}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  <div
                    id="services-menu"
                    className={`absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 transition-all duration-300 ${
                      servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <ul className="border border-gold/20 bg-coal/98 p-2 shadow-2xl backdrop-blur">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="group block px-4 py-3 transition-colors hover:bg-gold/10"
                          >
                            <span className="block text-sm font-semibold text-white group-hover:text-gold">
                              {child.label}
                            </span>
                            <span className="mt-0.5 block text-xs text-mist">{child.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link px-4 py-2 ${isActive(item.href) ? "text-gold" : "text-white/85"}`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="hidden lg:block">
            <ButtonLink href={site.quoteHref} className="px-5 py-3 text-xs">
              Get a Quote
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-gold/40 text-gold lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 ${scrolled ? "top-20" : "top-22"} overflow-y-auto bg-ink/98 backdrop-blur-md transition-all duration-500 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <ul className="relative space-y-1 px-6 pt-8 pb-10">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block border-b border-white/5 py-4 font-display text-3xl ${
                  isActive(item.href) ? "text-gold" : "text-white"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-2 mb-3 space-y-1 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-2 text-sm font-semibold tracking-[0.18em] text-mist uppercase hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="pt-8">
            <ButtonLink href={site.quoteHref} arrow className="w-full">
              Request Security Coverage
            </ButtonLink>
          </li>
          <li className="pt-6 text-sm text-mist">
            <a href={site.phoneHref} className="flex items-center gap-3 py-2 hover:text-gold">
              <PhoneIcon className="h-4 w-4 text-gold" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 py-2 hover:text-gold">
              <MailIcon className="h-4 w-4 text-gold" /> {site.email}
            </a>
            <p className="mt-4 flex items-center gap-3 border-t border-white/10 pt-5 text-xs tracking-[0.18em] uppercase">
              <ShieldIcon className="h-4 w-4 text-gold" /> {site.licenseLabel}
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}
