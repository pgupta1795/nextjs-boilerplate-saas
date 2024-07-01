import { ChevronRight, GithubIcon } from 'lucide-react';
import Image from 'next/image';
import LinkItem from '../../ui-extends/link-item';
import HeroAnimated from './hero-template-animated';

const content = {
  signUp: 'Get Started',
  heroHeader: 'Take shadcn to the next level for modern web dev experience',
  heroContent:
    'Move faster with beautiful, responsive UI components and website templates with modern design, 100% free and open-source.',
  images: {
    background: '/abstract-design.png'
  }
};

const HeroTemplate = () => {
  return (
    <section className="min-h-[800px] w-full  mt-0 relative">
      <div className="absolute -z-1 inset-0 opacity-15  h-[600px] w-full bg-transparent  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <Image
        className="absolute inset-x-0 -top-20 opacity-75 w-full h-full object-cover"
        src={content.images.background}
        width={1000}
        height={1000}
        priority
        alt="background image"
      />
      <div className="relative z-10 max-w-4xl translate-y-[33%]  mx-auto space-y-4">
        <HeroAnimated
          header={content.heroHeader}
          headerClassName="text-center max-w-5xl text-5xl md:text-6xl tracking-tighter mx-auto lg:text-7xl font-bold font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1"
          description={content.heroContent}
          descriptionClassName="mx-auto text-primary-95 text-center text-md lg:max-w-2xl md:py-5"
        >
          <div className="flex flex-wrap items-center justify-center  gap-3">
            <LinkItem
              href="/sign-up"
              variant="default"
              className="group items-center bg-gradient-to-tr from-primary-97 via-primary-80 to-primary transition-colors sm:w-auto py-4 px-10"
            >
              {content.signUp}
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </LinkItem>
            <LinkItem
              href="https://github.com/pgupta1795/pgupta1795"
              variant="ghost"
              className="inline-flex w-full justify-center items-center gap-x-2 text-primary-90 border border-primary-90 bg-background hover:text-primary-60 duration-200 sm:w-auto py-4 px-10 hover:bg-background/10 hover:border-primary-60"
              target="_blank"
            >
              <GithubIcon className="w-5 h-5" />
              Star on GitHub
            </LinkItem>
          </div>
        </HeroAnimated>
      </div>
    </section>
  );
};
export default HeroTemplate;
