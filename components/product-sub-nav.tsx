"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Flex, Link } from "@radix-ui/themes";
import type { Route } from "next";

const pages = [
	{ label: "App Home", slug: "" },
	{ label: "About", slug: "about" },
	{ label: "Privacy", slug: "privacy" },
	{ label: "Terms", slug: "terms" },
	{ label: "People Who Love Us", slug: "case-studies" },
];

export const ProductSubNav = ({ product }: { product: string }) => {
	const pathname = usePathname() ?? "";
	const last = pathname.split("/").filter(Boolean).pop();
	const activeSlug = pages.some((p) => p.slug && p.slug === last) ? last : "";

	return (
		<Flex asChild gap="5" mb="5" wrap="wrap">
			<nav aria-label="App pages">
				{pages.map(({ label, slug }) => (
					<Link
						key={label}
						asChild
						size="2"
						color="gray"
						highContrast={slug === activeSlug}
						weight={slug === activeSlug ? "bold" : "regular"}
						underline="hover"
					>
						<NextLink
							href={`/products/${product}${slug ? `/${slug}` : ""}` as Route}
							aria-current={slug === activeSlug ? "page" : undefined}
						>
							{label}
						</NextLink>
					</Link>
				))}
			</nav>
		</Flex>
	);
};
