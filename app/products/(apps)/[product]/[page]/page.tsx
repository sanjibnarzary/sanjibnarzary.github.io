import { Container, Section } from "@radix-ui/themes";
import { Footer } from "@components/footer";
import { MdxContent } from "@components/mdx-content";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { Breadcrumbs } from "@components/breadcrumbs";
import { ProductSubNav } from "@components/product-sub-nav";
import { baseMetadata } from "@utils/metadata";
import { getProductConfig, getProductPage, getProductPages, getProductSlugs } from "@utils/products";
import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ product: string; page: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { product, page } = await params;
	const { frontmatter } = await getProductPage(product, page);
	return {
		...baseMetadata,
		title: `${frontmatter.metaTitle} – ${getProductConfig(product).name}`,
		description: frontmatter.metaDescription,
	};
}

export default async function ProductPage({ params }: PageProps) {
	const { product, page } = await params;
	const { frontmatter, code } = await getProductPage(product, page);

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
							{ label: getProductConfig(product).name, href: `/products/${product}` },
							{ label: frontmatter.metaTitle },
						]}
					/>
					<ProductSubNav product={product} />
					<MdxContent code={code} frontmatter={frontmatter} scope="primitives" />
				</Section>
				<Footer />
			</Container>
		</>
	);
}

export const dynamicParams = false;

export function generateStaticParams() {
	return getProductSlugs().flatMap((product) =>
		getProductPages(product).map((page) => ({ product, page })),
	);
}
