import { getProductConfig, getProductSlugParams, hasProductGuides, productBase } from "@utils/products";
import { getMdxBySlug } from "@utils/mdx";
import { Footer } from "@components/footer";
import { Breadcrumbs } from "@components/breadcrumbs";
import { MdxContent } from "@components/mdx-content";
import { ProductSubNav } from "@components/product-sub-nav";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { Container, Section } from "@radix-ui/themes";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ product: string; slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
	return getProductSlugParams("docs/guides");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { product, slug } = await params;
	const { name } = getProductConfig(product);
	const { frontmatter } = await getMdxBySlug(productBase(product, "docs/guides"), slug);
	return {
		...baseMetadata,
		title: `${frontmatter.metaTitle} – ${name}`,
		description: frontmatter.metaDescription,
	};
}

export default async function ProductGuide({ params }: PageProps) {
	const { product, slug } = await params;
	const { name } = getProductConfig(product);
	const { frontmatter, code } = await getMdxBySlug(productBase(product, "docs/guides"), slug);

	return (
		<>
			<PrimitivesMobileMenu />
			<PrimitivesHeader />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Breadcrumbs
						items={[
							{ label: "Home", href: "/" },
							{ label: "Apps", href: "/products" },
							{ label: name, href: `/products/${product}` },
							{ label: "User guides", href: `/products/${product}/guides` },
							{ label: frontmatter.metaTitle },
						]}
					/>
					<ProductSubNav product={product} hasGuides={hasProductGuides(product)} />
					<MdxContent code={code} frontmatter={frontmatter} scope="primitives" />
				</Section>
				<Footer />
			</Container>
		</>
	);
}
