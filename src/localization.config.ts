import { LocalizationConfig } from "payload";

// You need to restart the development server after changing this file
export const locales = ['en', 'de'] as const;

const localization: LocalizationConfig = {
  locales: [...locales],
  defaultLocale: 'en',
  fallback: true,
} as const;

export default localization;

if (!localization.locales.includes(localization.defaultLocale)) {
  throw new Error('Default locale is not in the locales array');
}
if (localization.locales.length < 1) {
  throw new Error('Localization must be enabled. If you only want to use one locale, set the `defaultLocale` to that locale and set `locales` to an array with a single element.');
}
