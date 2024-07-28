import { WebPageHeader } from '@/components/ui-extends/webpage-components';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { siteUrls } from '@/lib/config/site';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

const content = {
  title: 'Launch your saas in 24 hours',
  subheading: 'Build Your MVP in Days, not weeks. Open Source Starter Kit',
  description:
    'Elevate your development game with Somvarsha! Launch your apps faster with our SaaS starterkits, components, building guides, and more. Customizable. Open Source.',
  images: {
    'hero-dark':
      'https://utfs.io/f/fddea366-51c6-45f4-bd54-84d273ad9fb9-1ly324.png',
    'hero-light':
      'https://utfs.io/f/43bbc3c8-cf3c-4fae-a0eb-9183f1779489-294m81.png'
  }
};

export default function HeroTemplate6() {
  return (
    <>
      <WebPageHeader badge={content.title} title={content.subheading}>
        <Balancer
          as='p'
          className='text-center text-base text-muted-foreground sm:text-lg'
        >
          {content.description}
        </Balancer>
        <div className='flex items-center gap-3'>
          <Link
            href={siteUrls.github}
            className={buttonVariants({ variant: 'outline' })}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icons.gitHub className='mr-2 h-4 w-4' /> Github
          </Link>

          <Link href={siteUrls.auth.signup} className={buttonVariants()}>
            Signup
            <span className='ml-1 font-light italic'>— it&apos;s free</span>
          </Link>
        </div>
      </WebPageHeader>
      <div className='-m-2 w-full rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
        <div className='relative aspect-video w-full rounded-md bg-muted'>
          <Image
            src={content.images['hero-light']}
            alt='dashboard preview'
            fill
            className='block rounded-md border border-border dark:hidden'
            priority
          />

          <Image
            src={content.images['hero-dark']}
            alt='dashboard preview'
            fill
            className='hidden rounded-md border border-border dark:block'
            priority
          />
        </div>
      </div>
    </>
  );
}
