import {
  WebPageHeader,
  WebPageWrapper
} from '@/components/ui-extends/webpage-components';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { siteConfig, siteUrls } from '@/lib/config/site';
import { ArrowRightIcon } from 'lucide-react';
import { type Metadata } from 'next';
import Link from 'next/link';

const content = {
  title: 'Support',
  description: `Get support from ${siteConfig.name} to get started building your next project.`,
  badge: 'Get in touch with us',
  subtitle:
    'If you have any questions or need help, feel free to reach out to us.',
  supportInfos: [
    {
      title: 'Say Hello',
      description:
        'Get in touch with us to learn more about our products and services.',
      email: 'hello@example.com',
      buttonHref: `mailto:hello@example.com`,
      buttonText: 'Get in touch'
    },
    {
      title: 'Tech Support',
      description:
        'Get help with any technical issues you are facing. Our team will help you resolve any issues.',
      email: 'tech@example.com',
      buttonHref: `mailto:tech@example.com`,
      buttonText: 'Get in touch'
    },
    {
      title: 'Sales',
      description:
        'Get help with any sales-related questions. Our team will help you with any sales inquiries.',
      email: 'sales@example.com',
      buttonHref: `mailto:sales@example.com`,
      buttonText: 'Get in touch'
    },
    {
      title: 'Our Blog',
      description:
        'Read our blog to learn more about our products and the latest updates.',
      buttonHref: `${siteUrls.blogs}`,
      buttonText: 'Read Blog'
    }
  ]
};

export const metadata: Metadata = {
  title: content.title,
  description: content.description
};

export default function ContactPage() {
  return (
    <WebPageWrapper>
      <WebPageHeader title={content.title} badge={content.badge}>
        <p>{content.subtitle}</p>
      </WebPageHeader>
      <div className='grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2'>
        {content.supportInfos.map((supportInfo) => (
          <SupportCard key={supportInfo.title} {...supportInfo} />
        ))}
      </div>
    </WebPageWrapper>
  );
}

type SupportInfo = {
  title: string;
  description: string;
  email?: string;
  buttonHref: string;
  buttonText: string;
};

function SupportCard({
  buttonHref,
  buttonText,
  description,
  title,
  email
}: SupportInfo) {
  return (
    <Card>
      <CardHeader className='flex h-full flex-col items-start justify-between gap-3'>
        <div className='flex flex-col gap-2'>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {email && <p className='text-base text-primary'>{email}</p>}
        </div>
        <Link
          href={buttonHref}
          className={buttonVariants({
            className:
              'w-fit gap-1 transition-all duration-300 ease-in-out hover:gap-3',
            variant: 'secondary'
          })}
        >
          <span>{buttonText}</span>
          <ArrowRightIcon className='h-4 w-4' />
        </Link>
      </CardHeader>
    </Card>
  );
}
