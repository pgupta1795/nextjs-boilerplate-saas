import { siteUrls } from '@/lib/config/site';

interface NavigationItem {
  id: string;
  href: string;
  label: string;
  badge?: string;
  external?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    id: 'support',
    href: siteUrls.support,
    label: 'Support',
    badge: 'Beta'
  },
  {
    id: 'blogs',
    href: siteUrls.blogs,
    label: 'Blogs'
  },
  {
    id: 'docs',
    href: siteUrls.docs,
    label: 'Docs'
  },
  {
    id: 'changelogs',
    href: siteUrls.changelogs,
    label: 'Changelogs'
  }
];
