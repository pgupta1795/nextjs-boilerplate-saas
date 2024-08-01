export type Locale = (typeof locales)[number]
export const locales = ["en-in", "en-us", "en"] as const
export const defaultLocale: Locale = "en-us"
