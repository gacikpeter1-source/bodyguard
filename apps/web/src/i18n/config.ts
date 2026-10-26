// Adding a language = add its code here and a messages/<code>.json file.
export const locales = ["sk", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "sk";
export const LOCALE_COOKIE = "locale";
