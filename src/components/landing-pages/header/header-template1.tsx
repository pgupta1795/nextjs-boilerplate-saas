import MobileNav from '@/components/landing-pages/header/mobile-nav';
import ToggleTheme2 from '@/components/landing-pages/theme/toggle-theme2';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { siteUrls } from '@/lib/config/site';
import { getUser } from '@/server/auth';
import Link from 'next/link';
import { Suspense } from 'react';
import HeaderNav from './header-nav';

export default async function HeaderTemplate1() {
  const user = await getUser();
  return (
    <div className='container sticky top-0 z-50 max-w-[1400px] pt-5'>
      <header className=' relative flex h-14 w-full items-center rounded-lg border border-border bg-background/60 backdrop-blur sm:px-12'>
        <div className='absolute left-4 z-10 flex items-center gap-4 transition-transform'>
          <div className='z-50 block lg:hidden'>
            <MobileNav />
          </div>

          <Link href={siteUrls.home}>
            <Icons.logo />
            <span className='sr-only'>Somvarsha logo</span>
          </Link>
        </div>

        <div className='absolute left-0 right-0 mx-auto hidden lg:block '>
          <HeaderNav />
        </div>

        <div className='absolute right-4 flex items-center space-x-2'>
          <ToggleTheme2 />
          <Suspense
            fallback={
              <Button
                disabled
                aria-disabled
                variant='secondary'
                className='w-28'
              >
                <Icons.loader className='h-4 w-4' />
              </Button>
            }
          >
            <section className='flex items-center space-x-2'>
              {user ? (
                <Link
                  href={siteUrls.dashboard.home}
                  className={buttonVariants({
                    className: 'flex items-center space-x-1'
                  })}
                >
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link
                  href={siteUrls.auth.signup}
                  className={buttonVariants({
                    className: 'flex items-center space-x-1'
                  })}
                >
                  <span>Sign Up</span>
                  <span className='font-light italic'> — it&apos;s free</span>
                </Link>
              )}
            </section>
          </Suspense>
        </div>
      </header>
    </div>
  );
}
