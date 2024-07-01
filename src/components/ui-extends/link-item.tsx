import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { buttonVariants } from '../ui/button';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: 'default' | 'ghost' | 'link' | 'shine';
}

const LinkItem = ({
  children,
  href,
  className = '',
  variant = 'default',
  ...props
}: Props) => (
  <Link
    {...props}
    href={href}
    className={cn(`${buttonVariants({ variant })}`, className)}
  >
    {children}
  </Link>
);

export default LinkItem;
