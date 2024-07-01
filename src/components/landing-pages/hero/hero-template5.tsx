import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const content = {
  signUp: 'Get Started',
  heroHeader: 'We help startups to grow and make money',
  heroContent1:
    'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
  heroContent2:
    'At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected.',
  heroFooter: [
    ['Speakers', '18'],
    ['People Attending', '2,091'],
    ['Venue', 'Staples Center'],
    ['Location', 'Los Angeles']
  ],
  images: {
    background:
      'https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif'
  }
};

export default function HeroTemplate5() {
  return (
    <div className="relative min-h-screen">
      <Container className="relative  py-20 sm:pb-24 sm:pt-36">
        <Image
          src={content.images.background}
          className="absolute z-2 -top-0 left-10 w-auto h-auto object-cover"
          width={1000}
          height={1000}
          alt="bg"
        />

        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="text-primary-60 text-5xl font-normal tracking-tighter bg-gradient-to-r from-zinc-100 via-stone-200/50 to-purple-200/70 bg-clip-text text-transparent sm:text-7xl">
            {content.heroHeader}
          </h1>
          <div className="mt-6 space-y-6 font-geist text-md sm:text-xl tracking-tight text-primary-95">
            <p>{content.heroContent1}</p>
            <p>{content.heroContent2}</p>
          </div>
          <Button
            className="mt-4 h-12 bg-gradient-to-t from-primary from-0% to-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            variant="gooeyRight"
          >
            {content.signUp}
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>

          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {content.heroFooter.map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-primary">{name}</dt>
                <dd className="mt-0.5 text-2xl font-normal font-geist tracking-tight text-primary-90">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
}
