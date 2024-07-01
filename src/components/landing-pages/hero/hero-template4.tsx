'use client';

import { Button } from '@/components/ui/button';
import { ChevronRightIcon, MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navigation = [
  { title: 'Features', path: '#' },
  { title: 'Integrations', path: '#' },
  { title: 'Customers', path: '#' },
  { title: 'Pricing', path: '#' }
];

const content = {
  signin: 'Sign In',
  signUp: 'Get Started',
  contactUs: 'Contact Us',
  heroSummary: 'Over 200+ deals finished',
  heroHeader: 'We help startups to grow and make money',
  heroContent:
    'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
  heroFooter: 'Trusted by client accorss the globe',
  images: {
    logo: '/chess.png',
    background: '/bg-container.png'
  }
};

export default function HeroTemplate4() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.menu-btn') && !target.closest('.menu')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <Link href="#">
        <Image
          src={content.images.logo}
          className="rounded-full w-auto h-auto"
          width={50}
          height={50}
          alt="logo"
        />
      </Link>
      <div className="md:hidden">
        <Button
          size="icon"
          variant="outline"
          className="text-primary outline-none md:hidden menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="relative mt-4">
      <div className="absolute inset-0 blur-xl h-screen bg-[linear-gradient(143.6deg,_rgba(192,_132,_252,_0)_20.79%,_hsl(var(--primary))_40.92%,_rgba(204,_171,_238,_0)_70.35%)]"></div>
      <div className="relative">
        <header>
          <div className="md:hidden mx-2 pb-5">
            <Brand />
          </div>
          <nav
            className={`pb-5 md:text-sm absolute top-0 inset-x-0 bg-background shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent menu ${
              menuOpen ? 'block' : 'hidden'
            } md:block`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={`flex-1 text-white/90 items-center mt-8 md:mt-0 md:flex block `}
              >
                <ul className="mx-auto flex justify-center items-center max-md:space-x-3 max-md:w-full md:space-x-6 md:space-y-0 rounded-full dark:bg-zinc-800/10 dark:border dark:border-white/10 dark:shadow-lg dark:shadow-zinc-800/5 dark:ring-1 dark:ring-zinc-900/5 backdrop-blur text-sm font-medium text-zinc-800 dark:text-zinc-200 w-fit px-6 py-4">
                  {navigation.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="dark:text-zinc-200 hover:dark:text-white text-primary-foreground hover:text-primary-foreground/45"
                      >
                        <Link href={item.path} className="block">
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                  <Link
                    href="/sign-in"
                    className="flex items-center justify-center gap-x-1 py-3 px-4 text-primary font-medium dark:text-zinc-200 transform-gpu dark:border dark:border-white/10 dark:shadow-lg dark:shadow-zinc-800/5 dark:backdrop-blur rounded-full md:inline-flex"
                  >
                    {content.signin}
                    <ChevronRightIcon />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-white overflow-hidden md:px-8 md:flex justify-center items-center">
            <div className="flex-none space-y-5 max-w-xl">
              <Link
                href="/blogs"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-transparent/10"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-primary text-white">
                  Blogs
                </span>
                <p className="flex items-center">
                  {content.heroSummary}
                  <ChevronRightIcon />
                </p>
              </Link>
              <h1 className="text-left tracking-tight max-w-md md:max-w-3xl text-3xl md:text-4xl mr-auto lg:text-6xl font-geist font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1">
                {content.heroHeader}
              </h1>
              <p>{content.heroContent}</p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <Link
                  href="#"
                  className="flex items-center justify-center gap-x-1 py-3 px-4 text-primary font-medium dark:text-zinc-200 transform-gpu dark:border dark:border-white/10 dark:shadow-lg dark:shadow-zinc-800/5 dark:backdrop-blur rounded-full md:inline-flex"
                >
                  {content.signUp}
                  <ChevronRightIcon />
                </Link>
                <Link
                  href="#contact"
                  className="py-4 px-4 text-primary hover:text-primary/75 dark:text-zinc-200 font-medium duration-150"
                >
                  {content.contactUs}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
