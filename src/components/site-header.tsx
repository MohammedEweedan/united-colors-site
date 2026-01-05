"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/providers/locale-provider";
import { useTheme } from "@/providers/theme-provider";

export default function SiteHeader() {
  const { locale, dict, switchLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();

  const isArabic = locale === "ar";

  const logoSrc = "/favicon.ico";

  return (
    <header className="navbar">
      <div className="container nav-inner">
        {/* BRAND */}
        <Link
          href="/"
          className="brand"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Image
            src={logoSrc}
            alt="United Colors"
            width={70}
            height={60}
            priority
          />
          <div>
            <div className="brand-text-main">{dict.brand.name}</div>
            <div className="brand-text-sub">{dict.brand.tagline}</div>
          </div>
        </Link>

        {/* LINKS */}
        <nav className="nav-links">
          <Link href="/" className="nav-link">
            {dict.nav.home}
          </Link>
          <Link href="/#services" className="nav-link">
            {dict.nav.services}
          </Link>
          <Link href="/about" className="nav-link">
            {dict.nav.about}
          </Link>
          <Link href="/#contact" className="nav-link">
            {dict.nav.contact}
          </Link>
        </nav>

        {/* ACTIONS */}
        <div className="nav-actions" style={{ display: "flex", gap: ".5rem" }}>
          {/* LANGUAGE BUTTON */}
          <button
            className="button-secondary"
            style={{ backgroundColor: "transparent", border: "none", direction: "ltr" }}
            onClick={() => switchLocale(isArabic ? "en" : "ar")}
            aria-label="Toggle language"
          >
            {isArabic ? "English" : "عربي"}
          </button>

          {/* THEME BUTTON */}
          <button
            className="button-secondary"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
}
