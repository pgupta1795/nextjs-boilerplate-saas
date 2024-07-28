import { siteConfig } from '@/lib/config/site';
import { type Metadata } from 'next';

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;
}

/**
 * Generates the metadata object for a page, including title, description, and social media sharing information.
 *
 * @param {PageSEOProps} props - The properties used to generate the metadata.
 * @param {string} props.title - The title of the page.
 * @param {string} [props.description] - The description of the page.
 * @param {string} [props.image] - The URL of the image to use for social media sharing.
 * @returns {Metadata} - The generated metadata object.
 */
export function genPageMetadata({
  title,
  description,
  image,
  ...rest
}: PageSEOProps): Metadata {
  return {
    title,
    description: description ?? siteConfig.description,
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description: description ?? siteConfig.description,
      card: 'summary_large_image',
      images: image ? [image] : [siteConfig.orgImage],
      creator: '@8233476049'
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description ?? siteConfig.description,
      type: 'website',
      images: [{ url: siteConfig.orgImage, alt: siteConfig.name }],
      locale: siteConfig.locale,
      url: './',
      siteName: siteConfig.name
    },
    ...rest
  };
}
