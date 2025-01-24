import localization, { Locale, locales } from "@/localization.config";

export function resolveSlugs(slugs: Array<string>): { isNotFound: true, locale: Locale, slug?: string } | { isNotFound: false, locale: Locale, slug: string } {
  const localeOrSlug = slugs?.[0];
  const slugRaw = slugs?.[1];

  // We do not want to serve under default locale. Default locale should run directly under /
  if (localeOrSlug === localization.defaultLocale) {
    return { isNotFound: true, locale: localization.defaultLocale as Locale }
  }

  let locale: Locale = localization.defaultLocale as Locale;
  let slug: string = "home";
  if (locales.includes(localeOrSlug as Locale)) {
    // localeOrSlug is a locale (default locale is already filtered out by the if statement above)
    locale = localeOrSlug as Locale;
    if (slugRaw === "home") {
      // We do not want to serve under /de/home. This route should be served directly under /de
      return { isNotFound: true, locale }
    }
    // If no slug is provided, we want to serve page saved under slug "home" under /de url
    slug = slugRaw || "home";
  } else {
    // If localeOrSlug is not a locale, we want to serve page with default locale
    locale = localization.defaultLocale as Locale;
    // localeOrSlug is a slug
    if (localeOrSlug === "home") {
      // We do not want to serve under /home. This route should be served directly under /
      return { isNotFound: true, locale }
    }
    // If localeOrSlug is a slug, then slugRaw has to be empty
    if (slugRaw) {
      return { isNotFound: true, locale }
    }
    // If no slug is provided, we want to serve page saved under slug "home" under / url
    slug = localeOrSlug || "home";
  }

  return { locale, slug, isNotFound: false }
}