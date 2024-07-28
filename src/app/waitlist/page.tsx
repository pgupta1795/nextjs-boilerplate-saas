import { WaitlistForm } from '@/app/waitlist/_components/waitlist-form';
import { Icons } from '@/components/ui/icons';
import { type Metadata } from 'next';

export const content = {
  title: 'Waitlist',
  description:
    'A list of users who are waiting to be approved for the service.',
  heading: 'Join the waitlist',
  subheading:
    'Welcome to {siteConfig.name}, a platform which provides resources for building applications faster. We&apos;re currently working on adding more features and improving the user experience. In the meantime, you can join our waitlist!'
};

export const metadata: Metadata = {
  title: content.title,
  description: content.description
};

export default function Waitlist() {
  return (
    <main className='container flex min-h-screen w-screen flex-col items-center justify-center space-y-4'>
      <Icons.logoIcon className='h-10 w-10 text-foreground sm:h-14 sm:w-14' />
      <h1 className='z-10 bg-gradient-to-br from-muted to-foreground bg-clip-text text-center font-heading text-3xl font-bold text-transparent md:text-7xl'>
        {content.heading}
      </h1>
      <p className='z-10 mx-auto max-w-lg text-center text-sm text-muted-foreground'>
        {content.subheading}
      </p>
      <WaitlistForm />
    </main>
  );
}
