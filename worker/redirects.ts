/**
 * Legacy URL redirects, ported from the former `redirects()` in
 * next.config.js (which a static export ignores).
 *
 * They live in Worker code rather than in a `_redirects` file on purpose:
 * several dynamic rules overlap (`/docs/colors/getting-started/*` is also
 * matched by `/docs/colors/*`), and the static-assets `_redirects` evaluation
 * on the Cloudflare edge did not honor file order for such overlapping splat
 * rules, so the broader rule won. Here the first matching rule wins, in the
 * order written, and worker/redirects.test.ts pins every case.
 *
 * Status codes match what Next emitted: 308 for `permanent: true`, 307
 * otherwise. The query string is preserved.
 */

export type RedirectRule = {
	/** Pathname pattern: literal segments, `*` (greedy, at most one, last) or `:name` placeholders. */
	from: string;
	/** Destination pathname; may reference `:splat` and `:name` placeholders. */
	to: string;
	status: 307 | 308;
};

// Most specific first within each family; the matcher returns the first hit.
// No legacy URLs are redirected on this site.
export const REDIRECT_RULES: readonly RedirectRule[] = [];

/**
 * Path prefixes the Worker must see for the rules above to run
 * (wrangler.jsonc `assets.run_worker_first`). Kept next to the rules so the
 * two cannot drift; the test checks every rule is covered.
 */
export const REDIRECT_PATHS: string[] = [];

export type Redirect = { location: string; status: 307 | 308 };

/**
 * Returns the redirect for a request URL, or null when no rule matches.
 * Matching is case-sensitive: `run_worker_first` patterns are, so an
 * upper-cased legacy URL never reaches the Worker anyway (Next's redirects()
 * on Vercel matched case-insensitively; real pages were case-sensitive).
 */
export function resolveRedirect(url: URL): Redirect | null {
	const pathname = url.pathname.replace(/\/+$/, "") || "/";
	for (const rule of REDIRECT_RULES) {
		const params = match(rule.from, pathname);
		if (params) {
			return { location: fill(rule.to, params) + url.search, status: rule.status };
		}
	}
	return null;
}

function match(pattern: string, pathname: string): Record<string, string> | null {
	const patternSegments = pattern.split("/").slice(1);
	const pathSegments = pathname.split("/").slice(1);
	const params: Record<string, string> = {};

	for (let i = 0; i < patternSegments.length; i++) {
		const segment = patternSegments[i];
		if (segment === "*") {
			// Greedy: everything from here on, and there must be something.
			const rest = pathSegments.slice(i);
			if (rest.length === 0 || rest[0] === "") return null;
			params.splat = rest.join("/");
			return params;
		}
		const value = pathSegments[i];
		if (value === undefined || value === "") return null;
		if (segment.startsWith(":")) {
			params[segment.slice(1)] = value;
		} else if (segment !== value) {
			return null;
		}
	}
	return pathSegments.length === patternSegments.length ? params : null;
}

function fill(to: string, params: Record<string, string>): string {
	return to.replace(/:([A-Za-z]\w*)/g, (_, name: string) => params[name] ?? "");
}
