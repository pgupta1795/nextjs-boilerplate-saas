import { siteConfig } from '@/lib/config/site';
import { type Metadata } from 'next';

const content = {
  title: 'Maintenance',
  description:
    'We&apos;re currently undergoing maintenance. Please check back later.',
  description2: `${siteConfig.name} is currently undergoing maintenance.`,
  summary:
    'We&apos;re working hard to get everything back up and running. In the meantime, you can check back later.'
};

export const metadata: Metadata = {
  title: content.title,
  description: content.description
};

export default function Maintenance() {
  return (
    <main className='container flex min-h-screen w-screen flex-col items-center justify-center space-y-2'>
      <p className='fixed text-[15vw] font-bold opacity-5'>{content.title}</p>
      <h1 className='text-center text-3xl font-bold sm:text-5xl'>
        {content.description2}
      </h1>
      <p className='text-center text-base text-muted-foreground sm:text-lg'>
        {content.summary}
      </p>
    </main>
  );
}
