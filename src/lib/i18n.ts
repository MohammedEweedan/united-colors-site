import "server-only";

import type en from "../../public/locales/en/common.json";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("../../public/locales/en/common.json").then((module) => module.default),
  ar: () => import("../../public/locales/ar/common.json").then((module) => module.default),
};

export const defaultLocale: Locale = "en";

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries[defaultLocale];
  return loader();
}
