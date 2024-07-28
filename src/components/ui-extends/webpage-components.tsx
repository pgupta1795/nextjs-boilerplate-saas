import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { type ElementType } from 'react';
import Balancer from 'react-wrap-balancer';

type WebPageWrapperProps = {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
};

// This is a page wrapper used in all public web pages
export function WebPageWrapper({
  children,
  as,
  className
}: WebPageWrapperProps) {
  const Comp: ElementType = as ?? 'main';

  return (
    <Comp
      className={cn(
        'container flex flex-col items-center justify-center gap-24 py-10',
        className
      )}
    >
      {children}
    </Comp>
  );
}

type WebPageHeaderProps = {
  title: string;
  badge?: string;
  children?: React.ReactNode;
};

// This is a page heading used in all public web pages
export function WebPageHeader({ title, badge, children }: WebPageHeaderProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      {badge && (
        <Badge size='md' variant='secondary'>
          <p className='text-center text-base'>{badge}</p>
        </Badge>
      )}
      <Balancer
        as='h1'
        className='max-w-2xl text-center font-heading text-4xl font-bold leading-none sm:text-5xl'
      >
        {title}
      </Balancer>

      {children && children}
    </div>
  );
}
