import localization, { Locale, locales } from "@/localization.config";
import { notFound } from "next/navigation";

type Params = {
  slug?: string
  localeOrSlug?: string
}

export function resolveParams(params: Params) {
  const { slug: slugRaw, localeOrSlug } = params;
  // We do not want to serve under default locale. Default locale should run directly under /
  if (localeOrSlug === localization.defaultLocale) {
    notFound();
  }

  let locale: Locale = localization.defaultLocale as Locale;
  let slug: string = "home";

  if (locales.includes(localeOrSlug as Locale)) {
    // localeOrSlug is a locale
    locale = localeOrSlug as Locale;
    if (slugRaw === "home") {
      // We do not want to serve under /de/home. This route should be served directly under /de
      notFound();
    }
    // If no slug is provided, we want to serve page saved under slug "home" under /de url
    slug = slugRaw || "home";
  } else {
    // localeOrSlug is a slug
    if (localeOrSlug === "home") {
      // We do not want to serve under /home. This route should be served directly under /
      notFound();
    }
    // If localeOrSlug is a slug, then slugRaw has to be empty
    if (slugRaw) {
      notFound();
    }

    // If localeOrSlug is not a locale, we want to serve page with default locale
    locale = localization.defaultLocale as Locale;
    // If no slug is provided, we want to serve page saved under slug "home" under / url
    slug = localeOrSlug || "home";
  }

  return { locale, slug }
}