// `pnpm test` (Node's test runner via tsx). Pins that the redirect table is
// consistent and that real pages are never swallowed by it.
import assert from "node:assert/strict";
import fs from "node:fs";
import { test } from "node:test";
import { REDIRECT_PATHS, REDIRECT_RULES, resolveRedirect } from "./redirects";

const url = (path: string) => new URL(path, "https://sanjibnarzary.com");

test("leaves real pages alone", () => {
	for (const path of ["/", "/about", "/research", "/products", "/blog", "/blog/themes-3"]) {
		assert.equal(resolveRedirect(url(path)), null, path);
	}
});

test("every rule's path is covered by run_worker_first", () => {
	const config = fs.readFileSync(new URL("../wrangler.jsonc", import.meta.url), "utf8");
	for (const prefix of REDIRECT_PATHS) {
		assert.ok(config.includes(`"${prefix}"`), `wrangler.jsonc run_worker_first lacks ${prefix}`);
	}
	const covered = (path: string) =>
		REDIRECT_PATHS.some((prefix) =>
			prefix.endsWith("/*")
				? path === prefix.slice(0, -2) || path.startsWith(prefix.slice(0, -1))
				: path === prefix,
		);
	for (const rule of REDIRECT_RULES) {
		const probe = rule.from.replace("*", "x").replace(/:\w+/g, "x");
		assert.ok(covered(probe), `${rule.from} is not reachable by the Worker`);
	}
});
