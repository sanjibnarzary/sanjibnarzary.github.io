"use client";
import { Box, ScrollArea } from "@radix-ui/themes";
import { ThemesHeader } from "./themes-header";
import { DocsNav } from "./docs-nav";
import { MobileMenu, type MobileMenuProps } from "./mobile-menu";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const ThemesMobileMenu = (props: Omit<MobileMenuProps, "children">) => (
	<MobileMenu {...props}>
		<ThemesHeader />
		<ScrollArea>
			<Box pt="4" px="3" pb="9">
				<DocsNav
					routes={[
						{
							pages: [
								{ title: "Home", slug: "" },
								{ title: "Research", slug: "research" },
								{ title: "Projects", slug: "projects" },
								{ title: "Apps", slug: "products" },
								{ title: "Blog", slug: "blog" },
							],
						},
						{
							label: "Resources",
							pages: [
								{
									title: "GitHub",
									slug: "https://github.com/sanjibnarzary",
									icon: <GitHubLogoIcon />,
								},
							],
						},
					]}
				/>
			</Box>
		</ScrollArea>
	</MobileMenu>
);
