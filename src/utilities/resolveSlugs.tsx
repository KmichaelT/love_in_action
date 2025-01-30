import localization, { Locale, locales } from "@/localization.config";

export function resolveSlugs(slugs: Array<string>): { isNotFound: true, locale: Locale, cleanSlugs?: string[] } | { isNotFound: false, locale: Locale, cleanSlugs: string[] } {
  const localeOrSlug = slugs?.[0];
  const slugRaw = slugs?.[1];
  const remainingSlugs = slugs?.slice(2);

  // We do not want to serve under default locale. Default locale should run directly under /
  if (localeOrSlug === localization.defaultLocale) {
    return { isNotFound: true, locale: localization.defaultLocale as Locale }
  }

  let locale: Locale = localization.defaultLocale as Locale;
  let firstSlug: string = "home";
  if (locales.includes(localeOrSlug as Locale)) {
    // localeOrSlug is a locale (default locale is already filtered out by the if statement above)
    locale = localeOrSlug as Locale;
    if (slugRaw === "home") {
      // We do not want to serve under /de/home. This route should be served directly under /de
      return { isNotFound: true, locale }
    }
    // If no slug is provided, we want to serve page saved under slug "home" under /de url
    firstSlug = slugRaw || "home";

    return { locale, cleanSlugs: [firstSlug, ...remainingSlugs], isNotFound: false }
  } else {
    // If localeOrSlug is not a locale, we want to serve page with default locale
    locale = localization.defaultLocale as Locale;
    // localeOrSlug is a slug
    if (localeOrSlug === "home") {
      // We do not want to serve under /home. This route should be served directly under /
      return { isNotFound: true, locale }
    }
    // If no slug is provided, we want to serve page saved under slug "home" under / url
    firstSlug = localeOrSlug || "home";

    // If localeOrSlug is a slug, then slugRaw has to be empty
    if (slugRaw) {
      return { locale, cleanSlugs: [firstSlug, slugRaw, ...remainingSlugs], isNotFound: false }
    } else {
      return { locale, cleanSlugs: [firstSlug, ...remainingSlugs], isNotFound: false }
    }
  }
}
