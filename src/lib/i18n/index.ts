'use server';
import { COOKIE_NAME } from '@/lib/config/cookie-keys';
import { defaultLocale, type Locale } from '@/lib/i18n/i18n.config';
import { cookies } from 'next/headers';

export async function getUserLocale(): Promise<Locale> {
  return (cookies().get(COOKIE_NAME)?.value as Locale) ?? defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
