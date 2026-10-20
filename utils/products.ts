import fs from "fs";
import path from "path";
import { getAllFrontmatter, getMdxBySlug } from "@utils/mdx";

const PRODUCTS_PATH = path.join(process.cwd(), "data", "products");

// every folder in data/products is a product; its name is the URL slug
export const getProductSlugs = () =>
	fs
		.readdirSync(PRODUCTS_PATH, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name);

export const productBase = (product: string, section: string) => `products/${product}/${section}`;

// static params for `[product]/.../[slug]` routes
export const getProductSlugParams = (section: string) =>
	getProductSlugs().flatMap((product) => {
		const base = productBase(product, section);
		return getAllFrontmatter(base).map((frontmatter) => ({
			product,
			slug: frontmatter.slug.replace(`${base}/`, ""),
		}));
	});

export interface ProductConfig {
	name: string;
	title: string;
	headline: string;
	description: string;
	ctaLabel: string;
	ctaHref: string;
	image?: string;
	playStoreUrl?: string;
	appStoreUrl?: string;
	apkUrl?: string;
	aliases?: string[];
}

// data/products/<product>/product.json (optional) drives the product home page
export const getProductConfig = (product: string): ProductConfig => {
	const name = product.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
	const defaults: ProductConfig = {
		name,
		title: name,
		headline: name,
		description: "",
		ctaLabel: "Get started",
		ctaHref: `/products/${product}/docs/overview/introduction`,
	};
	const file = path.join(PRODUCTS_PATH, product, "product.json");
	const config: ProductConfig = fs.existsSync(file)
		? { ...defaults, ...JSON.parse(fs.readFileSync(file, "utf8")) }
		: defaults;
	return hasProductApk(product) ? { ...config, apkUrl: `/downloads/${product}.apk` } : config;
};

// data/products/<product>/apk/app-release.apk is copied to public/downloads/<product>.apk by scripts/copy-apks.ts
export const hasProductApk = (product: string) =>
	fs.existsSync(path.join(PRODUCTS_PATH, product, "apk", "app-release.apk"));

// top-level data/products/<product>/*.mdx files (about, privacy, terms, ...) are standalone pages;
// index.mdx is the product home page and is excluded here
export const getProductPages = (product: string) =>
	fs
		.readdirSync(path.join(PRODUCTS_PATH, product))
		.filter((file) => file.endsWith(".mdx") && file !== "index.mdx")
		.map((file) => file.replace(/\.mdx$/, ""));

export const getProductPage = (product: string, page: string) =>
	getMdxBySlug(`products/${product}`, page);

// alternate URL slugs for a product's home page (declared as "aliases" in product.json)
export const getProductHomeParams = () =>
	getProductSlugs().flatMap((product) => [
		product,
		...(getProductConfig(product).aliases ?? []),
	]);

export const resolveProductSlug = (slug: string) =>
	getProductSlugs().find(
		(product) => product === slug || getProductConfig(product).aliases?.includes(slug),
	) ?? slug;
