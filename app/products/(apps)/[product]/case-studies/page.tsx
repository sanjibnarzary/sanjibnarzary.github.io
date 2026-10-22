import { getProductConfig, getProductSlugs, hasProductGuides, productBase } from "@utils/products";
import { getAllFrontmatter } from "@utils/mdx";
import type { Route } from "next";
import { Footer } from "@components/footer";
import { Breadcrumbs } from "@components/breadcrumbs";
import { ProductSubNav } from "@components/product-sub-nav";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import {
	Avatar,
	Card,
	Container,
	Flex,
	Grid,
	Heading,
	Link,
	Section,
	Text,
} from "@radix-ui/themes";
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
	const hashtag = name.replace(/[^A-Za-z0-9]/g, "");
	const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(`@SanjibNarzary #${hashtag} `)}`;
	const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`@SanjibNarzary #${hashtag} `)}`;
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
					<ProductSubNav product={product} hasGuides={hasProductGuides(product)} />
					<Flex direction="column" align="center" mb="7">
						<Heading size="8" mb="2" align="center">
							{name} case studies
						</Heading>
						<Text align="center" size="4" mb="3" as="p" style={{ maxWidth: 480 }} color="gray">
							See how people use {name} and what they have to say about it.
						</Text>
					</Flex>

					{stories.length > 0 ? (
						<Grid gap="4" columns={{ initial: "1", sm: "2" }} mb="8">
							{stories.map((story) => {
								const { author, authorPosition, userAvatarURL } = story as typeof story & {
									author?: string;
									userAvatarURL?: string;
									authorPosition?: string;
								};

								return (
									<Card key={story.slug} size="3" asChild>
										<NextLink href={`/${story.slug}` as Route}>
											<Flex gap="3" height="100%" align="stretch">
												{author && (
													<Avatar
														size="3"
														src={userAvatarURL}
														fallback={author.trim().charAt(0).toUpperCase() || "U"}
														style={{
															width: 96,
															height: 96,
															flexShrink: 0,
															borderRadius: "var(--radius-3)",
														}}
													/>
												)}
												<Flex
													direction="column"
													gap="3"
													height="100%"
													justify="between"
													flexGrow="1"
												>
													<Heading as="h2" size="4">
														{story.metaTitle}
													</Heading>
													<Text as="p" size="3" color="gray">
														{story.metaDescription}
													</Text>
													{author && (
														<Text as="p" size="2" weight="medium">
															{author}
															{authorPosition && (
																<Text color="gray" weight="regular">
																	{" · "}
																	{authorPosition}
																</Text>
															)}
														</Text>
													)}
												</Flex>
											</Flex>
										</NextLink>
									</Card>
								);
							})}
						</Grid>
					) : (
						<Text align="center" as="p" color="gray" mb="8">
							User stories for {name} are coming soon.
						</Text>
					)}

					<Flex justify="center" mb="8">
						<Text as="p" align="center" size="3" color="gray" style={{ maxWidth: 560 }}>
							Share your case studies or testimonials of {name} with a{" "}
							<Link href={tweetUrl} target="_blank" rel="noopener noreferrer">
								tweet to @SanjibNarzary
							</Link>{" "} or {" "}
							<Link href={facebookUrl} target="_blank" rel="noopener noreferrer">
								share on Facebook
							</Link>{" "}
							mentioning #{hashtag}.
						</Text>
					</Flex>
				</Section>

				<Footer />
			</Container>
		</>
	);
}
