import { Separator } from '@/components/ui/separator';
import {
  CandlestickChart,
  Layers,
  LockIcon,
  ShieldCheckIcon,
  SparkleIcon,
  ZapIcon
} from 'lucide-react';
import Image from 'next/image';

const content = {
  signUp: 'Get Started',
  heroHeader: 'Take shadcn to the next level for modern web dev experience',
  heroContent:
    'Move faster with beautiful, responsive UI components and website templates with modern design, 100% free and open-source.',
  images: {
    background: '/abstract-design.png'
  }
};

const features = [
  {
    icon: <ZapIcon />,
    title: 'Fast Refresh',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.'
  },
  {
    icon: <CandlestickChart />,
    title: 'Analytics',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.'
  },
  {
    icon: <LockIcon />,
    title: 'Datacenter security',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.'
  },
  {
    icon: <Layers />,
    title: 'Build on your terms',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Safe to use',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.'
  },
  {
    icon: <SparkleIcon />,
    title: 'Flexible',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.'
  }
];

export default function Features() {
  return (
    <section className="py-14 relative text-primary-90">
      <Image
        src={content.images.background}
        priority
        width={1000}
        height={1000}
        className="absolute z-2 -top-0 left-10 object-cover w-auto h-auto"
        alt="docs"
      />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="mt-4 text-3xl font-normal font-geist tracking-tighter md:text-5xl sm:text-4xl">
              {content.heroHeader}
            </h3>
            <p className="mt-3 font-geist text-primary/70">
              {content.heroContent}
            </p>
          </div>
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)'
            }}
          ></div>
        </div>
        <Separator className="h-px w-1/2 mx-auto mt-5 bg-primary/25" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="bg-transparent transform-gpu border border-solid border-primary/15 dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  space-y-3 p-4 rounded-xl"
              >
                <div className="text-primary rounded-full p-4 transform-gpu border border-solid border-primary/30 dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-300 font-bold font-geist tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
