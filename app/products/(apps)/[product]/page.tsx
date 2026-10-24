import { Container, Section } from "@radix-ui/themes";
import { Footer } from "@components/footer";
import { MdxContent } from "@components/mdx-content";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { Breadcrumbs } from "@components/breadcrumbs";
import { ProductSubNav } from "@components/product-sub-nav";
import { baseMetadata } from "@utils/metadata";
import {
	getProductConfig,
	getProductHomeParams,
	getProductPage,
	resolveProductSlug,
	hasProductGuides,
} from "@utils/products";
import type { Metadata } from "next";

interface PageProps {
	params: Promise<{ product: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const product = resolveProductSlug((await params).product);
	const { frontmatter } = await getProductPage(product, "index");
	return {
		...baseMetadata,
		title: frontmatter.metaTitle ?? getProductConfig(product).title,
		description: frontmatter.metaDescription ?? getProductConfig(product).description,
	};
}

export function generateStaticParams() {
	return getProductHomeParams().map((product) => ({ product }));
}

// The product home page is rendered from data/products/<product>/index.mdx
export default async function ProductHome({ params }: PageProps) {
	const product = resolveProductSlug((await params).product);
	const productConfig = getProductConfig(product);
	const { frontmatter, code } = await getProductPage(product, "index");

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
							{ label: productConfig.name },
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
