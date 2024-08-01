/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getUserLocale } from '@/lib/i18n';
import { locales } from '@/lib/i18n/i18n.config';
import { type AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  if (!locales.includes(locale)) notFound();
  const messages: { default: AbstractIntlMessages } = await import(
    `./lib/i18n/messages/${locale}.json`
  );
  return { locale, messages: messages.default };
});
