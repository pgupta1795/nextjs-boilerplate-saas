import { siteUrls } from '@/lib/config/site';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${siteUrls.publicUrl}/sitemap.xml`
  };
}
