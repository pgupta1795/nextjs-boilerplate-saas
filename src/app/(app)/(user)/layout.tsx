import { AppLayoutShell } from '@/app/(app)/_components/layout-shell';
import { sidebarConfig } from '@/lib/config/sidebar';
import { type ReactNode } from 'react';

/**
 * These are the ids of the sidebar nav items to not included in the sidebar specifically @get ids from the sidebar config
 * @param param0 children
 * @returns
 */
export default function UserLayout({ children }: { children: ReactNode }) {
  const sideNavRemoveIds: string[] = [sidebarConfig.navIds.admin];

  return (
    <AppLayoutShell sideNavRemoveIds={sideNavRemoveIds}>
      {children}
    </AppLayoutShell>
  );
}
