import {
	getProductConfig,
	getProductSlugParams,
	hasProductGuides,
	productBase,
} from "@utils/products";
import { Footer } from "@components/footer";
import { Breadcrumbs } from "@components/breadcrumbs";
import { MdxContent } from "@components/mdx-content";
import { ProductSubNav } from "@components/product-sub-nav";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { MarketingCaption } from "@components/marketing/marketing-caption";
import { getMdxBySlug } from "@utils/mdx";
import { Box, Container, Link, Section, Text } from "@radix-ui/themes";
import NextLink from "next/link";
import { baseMetadata } from "@utils/metadata";
import type { Metadata, Route } from "next";

interface PageProps {
	params: Promise<{ product: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { product, slug } = await params;
	const { name } = getProductConfig(product);
	const { frontmatter } = await getMdxBySlug(productBase(product, "case-studies"), slug);
	return {
		...baseMetadata,
		title: `${frontmatter.metaTitle} – Case studies – ${name}`,
		description: frontmatter.metaDescription,
	};
}

export default async function CaseStudy({ params }: PageProps) {
	const { product, slug } = await params;
	const { name } = getProductConfig(product);
	const { frontmatter, code } = await getMdxBySlug(productBase(product, "case-studies"), slug);
	const { author, authorPosition } = frontmatter as typeof frontmatter & {
		author?: string;
		authorPosition?: string;
	};

	return (
		<>
			<PrimitivesHeader />
			<PrimitivesMobileMenu />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} maxWidth="800px">
				<Section size={{ initial: "2", md: "4" }}>
					<Breadcrumbs
						items={[
							{ label: "Home", href: "/" },
							{ label: "Apps", href: "/products" },
							{ label: name, href: `/products/${product}` },
							{ label: "Case studies", href: `/products/${product}/case-studies` },
							{ label: frontmatter.metaTitle },
						]}
					/>
					<ProductSubNav product={product} hasGuides={hasProductGuides(product)} />
					<MarketingCaption mb="1">{name} case study</MarketingCaption>
					<MdxContent code={code} frontmatter={frontmatter} scope="primitives" />
					{author && (
						<Box mt="8">
							<Text as="p" weight="bold">
								{author}
							</Text>
							{authorPosition && <Text as="p">{authorPosition}</Text>}
						</Box>
					)}
					<Box mt="6">
						<Link asChild highContrast color="gray">
							<NextLink href={`/products/${product}/case-studies` as Route}>
								← All {name} case studies
							</NextLink>
						</Link>
					</Box>
				</Section>

				
			</Container>
			<Container>
				<Footer />
			</Container>
		</>
	);
}

export const dynamicParams = false;

export function generateStaticParams() {
	return getProductSlugParams("case-studies");
}
