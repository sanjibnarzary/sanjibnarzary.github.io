import NextLink from "next/link";
import { Flex, Link, Text } from "@radix-ui/themes";
import type { Route } from "next";

export interface BreadcrumbItem {
	label: string;
	href?: string;
}

export const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => (
	<nav aria-label="Breadcrumb">
		<Flex asChild align="center" gap="2" wrap="wrap" mb="3" p="0" m="0">
			<ol style={{ listStyle: "none" }}>
				{items.map((item, i) => {
					const last = i === items.length - 1;
					return (
						<Flex asChild align="center" gap="2" key={item.label}>
							<li>
								{item.href && !last ? (
									<Link asChild size="2" color="gray" underline="hover">
										<NextLink href={item.href as Route}>{item.label}</NextLink>
									</Link>
								) : (
									<Text size="2" aria-current={last ? "page" : undefined}>
										{item.label}
									</Text>
								)}
								{!last && (
									<Text size="2" color="gray" aria-hidden>
										/
									</Text>
								)}
							</li>
						</Flex>
					);
				})}
			</ol>
		</Flex>
	</nav>
);
