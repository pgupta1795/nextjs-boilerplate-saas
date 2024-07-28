import { docs } from '@/app/source';
import HeaderNav from '@/components/landing-pages/header/header-nav';
import { Icons } from '@/components/ui/icons';
import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';

type RootDocsLayoutProps = {
  children: ReactNode;
};

export default function RootDocsLayout({ children }: RootDocsLayoutProps) {
  return (
    <DocsLayout
      tree={docs.pageTree}
      nav={{
        title: <Icons.logo />,
        children: (
          <div className='hidden lg:block'>
            <HeaderNav />
          </div>
        )
      }}
    >
      {children}
    </DocsLayout>
  );
}
