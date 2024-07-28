import { AppLayoutShell } from '@/app/(app)/_components/layout-shell';
import { sidebarConfig } from '@/lib/config/sidebar';
import React from 'react';

type AppLayoutProps = {
  children: React.ReactNode;
};

/**
 * these are the ids of the sidebar nav items to include in the sidebar specifically @get ids from the sidebar config
 */
export default function AdminLayout({ children }: AppLayoutProps) {
  const sideNavIncludedIds: string[] = [sidebarConfig.navIds.admin];

  return (
    <AppLayoutShell
      sideNavIncludedIds={sideNavIncludedIds}
      showOrgSwitcher={false}
    >
      {children}
    </AppLayoutShell>
  );
}
