import type { Paper } from "@data/papers";

export type CitationFormat = "bibtex" | "ris" | "endnote" | "apa" | "text";

export const citationFormats: { id: CitationFormat; label: string; extension?: string; mime?: string }[] = [
	{ id: "bibtex", label: "BibTeX", extension: "bib", mime: "application/x-bibtex" },
	{ id: "ris", label: "RIS", extension: "ris", mime: "application/x-research-info-systems" },
	{ id: "endnote", label: "EndNote", extension: "enw", mime: "application/x-endnote-refer" },
	{ id: "apa", label: "APA" },
	{ id: "text", label: "Plain text" },
];

const initials = (given: string) =>
	given
		.split(/[\s.]+/)
		.filter(Boolean)
		.map((p) => `${p[0].toUpperCase()}.`)
		.join(" ");

const splitName = (name: string) => {
	const [last, given = ""] = name.split(",").map((s) => s.trim());
	return { last, given };
};

const bibtexAuthors = (p: Paper) => p.authors.join(" and ");

export function toBibTeX(p: Paper): string {
	const entryType = p.type === "conference" ? "inproceedings" : p.type === "journal" ? "article" : "misc";
	const venueKey = p.type === "conference" ? "booktitle" : p.type === "journal" ? "journal" : "howpublished";
	const fields: [string, string | undefined][] = [
		["author", bibtexAuthors(p)],
		["title", `{${p.title}}`],
		[venueKey, p.venue],
		["volume", p.volume],
		["number", p.number],
		["pages", p.pages?.replace("-", "--")],
		["year", String(p.year)],
		["publisher", p.publisher],
		["url", p.url],
	];
	const body = fields
		.filter(([, v]) => v)
		.map(([k, v]) => `  ${k} = {${v}}`)
		.join(",\n");
	return `@${entryType}{${p.id},\n${body}\n}`;
}

export function toRIS(p: Paper): string {
	const type = p.type === "conference" ? "CONF" : p.type === "journal" ? "JOUR" : "GEN";
	const [sp, ep] = (p.pages ?? "").split("-");
	const lines: [string, string | undefined][] = [
		["TY", type],
		...p.authors.map((a): [string, string] => ["AU", a]),
		["TI", p.title],
		[p.type === "conference" ? "T2" : "JO", p.venue],
		["VL", p.volume],
		["IS", p.number],
		["SP", sp || undefined],
		["EP", ep],
		["PY", String(p.year)],
		["PB", p.publisher],
		["UR", p.url],
		["ER", ""],
	];
	return lines
		.filter(([k, v]) => k === "ER" || v)
		.map(([k, v]) => `${k}  - ${v}`)
		.join("\n");
}

export function toEndNote(p: Paper): string {
	const type = p.type === "conference" ? "Conference Paper" : p.type === "journal" ? "Journal Article" : "Generic";
	const lines: [string, string | undefined][] = [
		["0", type],
		...p.authors.map((a): [string, string] => ["A", a]),
		["T", p.title],
		[p.type === "conference" ? "B" : "J", p.venue],
		["V", p.volume],
		["N", p.number],
		["P", p.pages],
		["D", String(p.year)],
		["I", p.publisher],
		["U", p.url],
	];
	return lines
		.filter(([, v]) => v)
		.map(([k, v]) => `%${k} ${v}`)
		.join("\n");
}

const apaAuthors = (p: Paper) => {
	const names = p.authors.map((a) => {
		const { last, given } = splitName(a);
		return given ? `${last}, ${initials(given)}` : last;
	});
	if (names.length === 1) return names[0];
	return `${names.slice(0, -1).join(", ")}, & ${names[names.length - 1]}`;
};

export function toPlainText(p: Paper, style: "apa" | "text" = "text"): string {
	const authors =
		style === "apa"
			? apaAuthors(p)
			: p.authors
					.map((a) => {
						const { last, given } = splitName(a);
						return given ? `${given} ${last}` : last;
					})
					.join(", ");
	const vol = p.volume ? `, ${p.volume}${p.number ? `(${p.number})` : ""}` : "";
	const pages = p.pages ? `, ${p.pages}` : "";
	const publisher = p.publisher ? ` ${p.publisher}.` : "";
	return `${authors} (${p.year}). ${p.title}. ${p.venue}${vol}${pages}.${publisher}${p.url ? ` ${p.url}` : ""}`;
}

export function formatCitation(p: Paper, format: CitationFormat): string {
	switch (format) {
		case "bibtex":
			return toBibTeX(p);
		case "ris":
			return toRIS(p);
		case "endnote":
			return toEndNote(p);
		case "apa":
			return toPlainText(p, "apa");
		default:
			return toPlainText(p);
	}
}
