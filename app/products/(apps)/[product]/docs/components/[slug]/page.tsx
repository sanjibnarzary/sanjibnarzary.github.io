import { getProductSlugParams, productBase } from "@utils/products";
import { getMdxBySlug } from "@utils/mdx";
import { getPackageData, formatBytes } from "@utils/bundlephobia";
import { MdxContent } from "@components/mdx-content";
import { QuickNav } from "@components/quick-nav";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ product: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { product, slug } = await params;
	const DOCS_BASE = productBase(product, "docs/components");
	const { frontmatter } = await getMdxBySlug(DOCS_BASE, slug);
	return {
		...baseMetadata,
		title: `${frontmatter.metaTitle} – Radix Primitives`,
		description: frontmatter.metaDescription,
	};
}

export default async function ComponentsDoc({ params }: PageProps) {
	const { product, slug } = await params;
	const DOCS_BASE = productBase(product, "docs/components");
	const { frontmatter, code } = await getMdxBySlug(DOCS_BASE, slug);

	const packageData = frontmatter.name
		? await getPackageData(frontmatter.name, "latest").catch(() => null)
		: null;

	const extendedFrontmatter = {
		...frontmatter,
		version: packageData?.version ?? undefined,
		gzip: typeof packageData?.gzip === "number" ? formatBytes(packageData.gzip) : undefined,
	};

	return (
		<>
			<div data-search-lvl0 style={{ display: "none" }}>
				Components
			</div>

			<MdxContent code={code} frontmatter={extendedFrontmatter} scope="primitives" />

			<QuickNav key={frontmatter.slug} />
		</>
	);
}

export const dynamicParams = false;

export function generateStaticParams() {
	return getProductSlugParams("docs/components");
}
