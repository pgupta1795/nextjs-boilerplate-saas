import { org_config_cookie } from '@/lib/config/cookie-keys';
import { env } from '@/lib/env';
import { type ClassValue, clsx } from 'clsx';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// it tells you if the current link is active or not based on the pathname
export function isLinkActive(href: string, pathname: string | null) {
  return pathname === href;
}

export function getAbsoluteUrl(path: string) {
  return `${env.NEXTAUTH_URL}${path}`;
}

export function thousandToK(value: number) {
  return value / 1000;
}

export function formatDate(date: string | number | Date) {
  return format(new Date(date), 'PP');
}

// ********************** ORGANIZATION *************************
export function setOrgCookie(orgId: string) {
  document.cookie = `${org_config_cookie}=${orgId}; path=/; max-age=31536000;`;
}
