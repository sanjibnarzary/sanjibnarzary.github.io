import { getProductConfig, getProductSlugs, productBase } from "@utils/products";
import { getAllFrontmatter } from "@utils/mdx";
import type { Route } from "next";
import { Footer } from "@components/footer";
import { Breadcrumbs } from "@components/breadcrumbs";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { Card, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import NextLink from "next/link";
import { baseMetadata } from "@utils/metadata";
import { Metadata } from "next";

export function generateStaticParams() {
	return getProductSlugs().map((product) => ({ product }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ product: string }>;
}): Promise<Metadata> {
	const { product } = await params;
	const { name } = getProductConfig(product);
	return {
		...baseMetadata,
		title: `Case studies – ${name}`,
		description: `See how people use ${name} and what they say about it.`,
	};
}

export default async function CaseStudies({ params }: { params: Promise<{ product: string }> }) {
	const { product } = await params;
	const { name } = getProductConfig(product);
	const stories = getAllFrontmatter(productBase(product, "case-studies")).sort((a, b) =>
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
							{ label: "Case studies" },
						]}
					/>
					<Flex direction="column" align="center" mb="7">
						<Heading size="8" mb="2" align="center">
							{name} case studies
						</Heading>
						<Text align="center" size="4" mb="3" as="p" style={{ maxWidth: 480 }} color="gray">
							See how people use {name} and what they have to say about it.
						</Text>
					</Flex>

					{stories.length > 0 ? (
						<Grid gap="4" columns={{ initial: "1", sm: "2", md: "3" }} mb="8">
							{stories.map((story) => (
								<Card key={story.slug} size="3" asChild>
									<NextLink href={`/${story.slug}` as Route}>
										<Flex direction="column" gap="3" height="100%" justify="between">
											<Heading as="h2" size="4">
												{story.metaTitle}
											</Heading>
											<Text as="p" size="3" color="gray">
												{story.metaDescription}
											</Text>
											<Text as="p" size="2" weight="medium">
												{(story as any).author}
												{(story as any).authorPosition && (
													<Text color="gray" weight="regular">
														{" · "}
														{(story as any).authorPosition}
													</Text>
												)}
											</Text>
										</Flex>
									</NextLink>
								</Card>
							))}
						</Grid>
					) : (
						<Text align="center" as="p" color="gray" mb="8">
							User stories for {name} are coming soon.
						</Text>
					)}
				</Section>

				<Footer />
			</Container>
		</>
	);
}
