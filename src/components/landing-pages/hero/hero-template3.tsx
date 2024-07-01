import { ChevronRight, GithubIcon } from 'lucide-react';
import LinkItem from '../../ui-extends/link-item';
import Pattern from '../background/pattern';
import HeroAnimated from './hero-template-animated';

const content = {
  signUp: 'Get Started',
  heroSummary: 'Over 200+ deals finished',
  heroHeader: 'We help startups to grow and make money',
  heroContent:
    'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.'
};

const HeroTemplate3 = () => {
  return (
    <>
      <section className="min-h-[800px] w-full mt-0 relative">
        <Pattern />
        <div className="relative z-10 max-w-4xl ml-5 md:ml-10  translate-y-[33%]  mr-auto  space-y-4">
          <h1 className="text-sm text-primary-80 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border-[2px] border-primary-80 rounded-3xl w-fit">
            <pre className="tracking-tight uppercase">
              {content.heroSummary}
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </pre>
          </h1>
          <HeroAnimated
            header={content.heroHeader}
            headerClassName="ml-2 text-left tracking-tight max-w-md md:max-w-3xl text-3xl md:text-4xl tracking-tighter mr-auto lg:text-6xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1"
            description=""
            descriptionClassName="  "
          >
            <div className="mr-auto text-[0.84rem] ml-2 text-zinc-400 text-left md:text-lg lg:max-w-2xl md:py-5">
              <pre className="tracking-tight uppercase max-w-md md:max-w-3xl text-wrap">
                {content.heroContent}
              </pre>
            </div>
          </HeroAnimated>
          <div className="mr-auto ml-2  flex flex-wrap gap-y-4 items-start justify-start gap-x-3">
            <LinkItem
              href="/sign-up"
              className="inline-flex rounded-none uppercase font-mono text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border-input border-[1px] transition-colors sm:w-auto py-4 px-10"
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
        </div>
      </section>
    </>
  );
};
export default HeroTemplate3;
