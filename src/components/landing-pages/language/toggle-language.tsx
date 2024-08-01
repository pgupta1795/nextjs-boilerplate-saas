'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { setUserLocale } from '@/lib/i18n';
import { locales, type Locale } from '@/lib/i18n/i18n.config';
import { GlobeIcon } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function ToggleLanguage() {
  const currentLocale = useLocale() as Locale;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type='button' variant='outline' size='icon' title='language'>
          <GlobeIcon className='size-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {locales.map((locale) => (
          <DropdownMenuCheckboxItem
            key={locale}
            checked={currentLocale === locale}
            onClick={() => setUserLocale(locale)}
            className='text-sm uppercase'
          >
            {locale}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
