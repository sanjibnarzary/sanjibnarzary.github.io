"use client";
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { MDXProvider, components } from "@components/mdx-components";
import { ThemesMDXComponents } from "@components/themes-mdx-components";
import type { Frontmatter } from "types/frontmatter";

export type MdxScope = "primitives" | "themes";

function resolveComponents(scope: MdxScope) {
	switch (scope) {
		case "themes":
			return ThemesMDXComponents;
		default:
			return components;
	}
}

export function MdxContent({
	code,
	frontmatter,
	scope = "primitives",
}: {
	code: string;
	frontmatter: Frontmatter;
	scope?: MdxScope;
}) {
	const Component = React.useMemo(() => getMDXComponent(code), [code]);
	return (
		<MDXProvider frontmatter={frontmatter}>
			<Component components={resolveComponents(scope) as any} />
		</MDXProvider>
	);
}
