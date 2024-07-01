import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import RetroGrid from '../background/grid';

const content = {
  signUp: 'Get Started',
  heroSummary: 'Over 200+ deals finished',
  heroHeader1: 'Designing your projects faster with',
  heroHeader2: 'the largest figma UI kit.',
  heroContent:
    'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
  heroFooter: 'Trusted by client accorss the globe',
  images: {
    hero: '/chess-horse.png'
  }
};

export default function HeroTemplate2() {
  return (
    <div className="relative">
      <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_50%_40%_at_50%_-20%,hsl(var(--primary)/30),rgba(255,255,255,0))]"></div>
      <section className="relative max-w-full mx-auto  z-1">
        <RetroGrid />

        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center">
            <h1 className="text-sm text-primary-90 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border-[2px] border-primary rounded-3xl w-fit">
              {content.heroSummary}
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>

            <h2 className="text-4xl tracking-tighter font-geist  bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent mx-auto md:text-6xl">
              {content.heroHeader1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-60 to-orange-200">
                {content.heroHeader2}
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-primary-97">
              {content.heroContent}
            </p>
            <div className="items-center  justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,#393BB2_50%,hsl(var(--primary))_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium text-gray-50 backdrop-blur-3xl">
                  <Link
                    href="#"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-primary-95 border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10"
                  >
                    {content.signUp}
                  </Link>
                </div>
              </span>
            </div>
          </div>
          <div className="mt-32 mx-10">
            <Image
              src={content.images.hero}
              width={1000}
              height={1000}
              alt="logo"
              className="w-auto h-auto bg-cover object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
