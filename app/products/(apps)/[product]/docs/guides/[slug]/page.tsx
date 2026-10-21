import { getProductSlugParams, productBase } from "@utils/products";
import { getMdxBySlug } from "@utils/mdx";
import { MdxContent } from "@components/mdx-content";
import { QuickNav } from "@components/quick-nav";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ product: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { product, slug } = await params;
	const DOCS_BASE = productBase(product, "docs/guides");
	const { frontmatter } = await getMdxBySlug(DOCS_BASE, slug);
	return {
		...baseMetadata,
		title: `${frontmatter.metaTitle} – Radix Primitives`,
		description: frontmatter.metaDescription,
	};
}

export default async function GuidesDoc({ params }: PageProps) {
	const { product, slug } = await params;
	const DOCS_BASE = productBase(product, "docs/guides");
	const { frontmatter, code } = await getMdxBySlug(DOCS_BASE, slug);

	return (
		<>
			<div data-search-lvl0 style={{ display: "none" }}>
				Guides
			</div>

			<MdxContent code={code} frontmatter={frontmatter} scope="primitives" />

			<QuickNav key={frontmatter.slug} />
		</>
	);
}

export const dynamicParams = false;

export function generateStaticParams() {
	return getProductSlugParams("docs/guides");
}
