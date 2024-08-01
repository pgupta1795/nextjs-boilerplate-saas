import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import { type ReactNode } from 'react';

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
