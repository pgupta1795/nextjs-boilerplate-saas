import { cn } from '@/lib/utils';
import React from 'react';

type BlockquoteProps = {
  children?: React.ReactNode;
  className?: string;
};

const Blockquote = ({ children, className }: BlockquoteProps) => {
  return (
    <div
      className={cn(
        "relative rounded-lg border-l-8 border-border bg-primary-65/70 py-5 pl-16 pr-5 font-sans text-lg italic leading-relaxed before:absolute before:left-3 before:top-3 before:font-serif before:text-6xl before:content-['“'] before:text-primary-foreground text-primary-foreground w-full h-full flex flex-col justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

const BlockquoteAuthor = ({ children, className }: BlockquoteProps) => {
  return (
    <div className={cn('mt-5 pr-4 text-right font-bold not-italic', className)}>
      {children}
    </div>
  );
};

export { Blockquote, BlockquoteAuthor };
