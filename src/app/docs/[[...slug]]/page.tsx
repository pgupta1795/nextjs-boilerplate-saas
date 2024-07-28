import { docs } from '@/app/source';
import { RollButton } from 'fumadocs-ui/components/roll-button';
import { DocsBody, DocsPage } from 'fumadocs-ui/page';
import { useMDXComponents } from 'mdx-components';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

type Props = {
  params: { slug?: string[] };
};

export default async function Page({ params }: Props) {
  const page = docs.getPage(params.slug);
  if (page == null) notFound();
  const MDX = page.data.exports.default;
  const components = useMDXComponents();

  return (
    <DocsPage toc={page.data.exports.toc}>
      <RollButton />
      <DocsBody>
        <h1>{page.data.title}</h1>
        <p>{page.data.description}</p>
        <MDX components={components} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return docs.getPages()?.map((page) => ({ slug: page.slugs }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = docs.getPage(params.slug);
  if (page == null) notFound();
  return {
    title: page.data.title,
    description: page.data.description
  } satisfies Metadata;
}
