import { siteUrls } from '@/lib/config/site';
import { getOrganizations } from '@/server/actions/organization/queries';
import { redirect } from 'next/navigation';
import { Fragment, type ReactNode } from 'react';

export default async function OrgLayout({ children }: { children: ReactNode }) {
  const { userOrgs } = await getOrganizations();
  if (userOrgs.length === 0) redirect(siteUrls.dashboard.home);
  return <Fragment>{children}</Fragment>;
}
