import { en } from "./en";
import { es } from "./es";

export type Locale = "en" | "es";
export type Translations = typeof en;

export const translations = {
  en,
  es,
} as const satisfies Record<Locale, Translations>;

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}
