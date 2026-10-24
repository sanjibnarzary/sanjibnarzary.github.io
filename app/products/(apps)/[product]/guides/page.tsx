import { getProductConfig, getProductSlugs, hasProductGuides, productBase } from "@utils/products";
import { getAllFrontmatter } from "@utils/mdx";
import { Footer } from "@components/footer";
import { Breadcrumbs } from "@components/breadcrumbs";
import { ProductSubNav } from "@components/product-sub-nav";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { Card, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { baseMetadata } from "@utils/metadata";
import type { Metadata, Route } from "next";

interface PageProps {
	params: Promise<{ product: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
	return getProductSlugs()
		.filter(hasProductGuides)
		.map((product) => ({ product }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { product } = await params;
	const { name } = getProductConfig(product);
	return {
		...baseMetadata,
		title: `User guides – ${name}`,
		description: `Practical guides and workflows for ${name}.`,
	};
}

export default async function ProductGuides({ params }: PageProps) {
	const { product } = await params;
	if (!hasProductGuides(product)) notFound();
	const { name } = getProductConfig(product);
	const guides = getAllFrontmatter(productBase(product, "docs/guides")).sort((a, b) =>
		a.slug.localeCompare(b.slug),
	);

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
							{ label: "User guides" },
						]}
					/>
					<ProductSubNav product={product} hasGuides />
					<Flex direction="column" align="center" mb="7">
						<Heading size="8" mb="2" align="center">
							{name} user guides
						</Heading>
					</Flex>
					<Grid gap="4" columns={{ initial: "1", sm: "2" }} mb="8">
						{guides.map((guide) => (
							<Card key={guide.slug} size="3" asChild>
								<NextLink
									href={`/products/${product}/guides/${guide.slug.split("/").pop()}` as Route}
								>
									<Flex direction="column" gap="3">
										<Heading as="h2" size="4">
											{guide.metaTitle}
										</Heading>
										<Text as="p" size="3" color="gray">
											{guide.metaDescription}
										</Text>
									</Flex>
								</NextLink>
							</Card>
						))}
					</Grid>
				</Section>
				<Footer />
			</Container>
		</>
	);
}
