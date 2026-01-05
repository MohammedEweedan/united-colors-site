"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import {
  Locale,
  dictionaries,
  defaultLocale,
  type Dictionary,
} from "@/i18n/dictionaries";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  t: (path: string) => string;
  switchLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

// simple "a.b.c" path resolver
function resolvePath(dict: Dictionary, path: string): string {
  const parts = path.split(".");
  let current: any = dict;

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return path; // fallback: show the key
    }
  }

  return typeof current === "string" ? current : path;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale, ] = useState<Locale>(defaultLocale);

  const value = useMemo<LocaleContextValue>(() => {
    const dict = dictionaries[locale];

    return {
      locale,
      dict,
      t: (path: string) => resolvePath(dict, path),
      switchLocale: (next: Locale) => setLocale(next),
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
