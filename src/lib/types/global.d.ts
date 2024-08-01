import type en from '@/lib/i18n/messages/en-in.json';

type Messages = typeof en;

declare global {
  type IntlMessages = Messages;
}
