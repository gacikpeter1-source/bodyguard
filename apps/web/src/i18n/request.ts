import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, LOCALE_COOKIE, locales, type Locale } from "./config";

const isLocale = (v: string | undefined): v is Locale => !!v && (locales as readonly string[]).includes(v);

// Locale: user's choice (cookie, mirrored from profile) -> browser language -> default.
export default getRequestConfig(async () => {
  const fromCookie = (await cookies()).get(LOCALE_COOKIE)?.value;
  const accepted = ((await headers()).get("accept-language") ?? "")
    .split(",")
    .map((p) => p.split(";")[0].trim().slice(0, 2).toLowerCase());
  const locale: Locale = isLocale(fromCookie) ? fromCookie : (accepted.find(isLocale) ?? defaultLocale);
  return { locale, messages: (await import(`../../messages/${locale}.json`)).default };
});
