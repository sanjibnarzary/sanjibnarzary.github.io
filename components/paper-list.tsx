"use client";

import * as React from "react";
import { Badge, Box, Button, Card, DropdownMenu, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { CheckIcon, CopyIcon, DownloadIcon } from "@radix-ui/react-icons";
import type { Paper } from "@data/papers";
import { citationFormats, formatCitation, type CitationFormat } from "@utils/citations";

const typeLabels = { conference: "Conference", journal: "Journal", preprint: "Preprint" } as const;

function PaperCard({ paper }: { paper: Paper }) {
	const [copied, setCopied] = React.useState(false);

	const copy = async (format: CitationFormat) => {
		await navigator.clipboard.writeText(formatCitation(paper, format));
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	const download = (format: CitationFormat) => {
		const meta = citationFormats.find((f) => f.id === format)!;
		const blob = new Blob([formatCitation(paper, format)], { type: `${meta.mime};charset=utf-8` });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${paper.id}.${meta.extension}`;
		a.click();
		URL.revokeObjectURL(url);
	};

	const details = [
		paper.volume && `Vol. ${paper.volume}${paper.number ? `(${paper.number})` : ""}`,
		paper.pages && `pp. ${paper.pages}`,
		paper.publisher,
	].filter(Boolean);

	return (
		<Card size="3">
			<Flex direction="column" gap="3" height="100%">
				<Flex gap="2" align="center">
					<Badge color={paper.type === "journal" ? "blue" : paper.type === "conference" ? "violet" : "orange"}>
						{typeLabels[paper.type]}
					</Badge>
					<Badge variant="outline" color="gray">
						{paper.year}
					</Badge>
				</Flex>
				<Heading as="h3" size="4">
					{paper.url ? (
						<a href={paper.url} target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
							{paper.title}
						</a>
					) : (
						paper.title
					)}
				</Heading>
				<Text size="2" color="gray">
					{paper.authors.join("; ")}
				</Text>
				<Text size="2">
					<em>{paper.venue}</em>
					{details.length > 0 && <> · {details.join(" · ")}</>}
				</Text>
				<Box mt="auto" pt="2">
					<Flex gap="2" wrap="wrap">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>
								<Button variant="soft" size="2">
									{copied ? <CheckIcon /> : <CopyIcon />}
									{copied ? "Copied" : "Copy"}
									<DropdownMenu.TriggerIcon />
								</Button>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								{citationFormats.map((f) => (
									<DropdownMenu.Item key={f.id} onSelect={() => copy(f.id)}>
										{f.label}
									</DropdownMenu.Item>
								))}
							</DropdownMenu.Content>
						</DropdownMenu.Root>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>
								<Button variant="outline" size="2">
									<DownloadIcon />
									Export
									<DropdownMenu.TriggerIcon />
								</Button>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								{citationFormats
									.filter((f) => f.extension)
									.map((f) => (
										<DropdownMenu.Item key={f.id} onSelect={() => download(f.id)}>
											{f.label} (.{f.extension})
										</DropdownMenu.Item>
									))}
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</Flex>
				</Box>
			</Flex>
		</Card>
	);
}

export function PaperList({ papers }: { papers: Paper[] }) {
	const years = [...new Set(papers.map((p) => p.year))].sort((a, b) => b - a);
	return (
		<Flex direction="column" gap="7">
			{years.map((year) => (
				<Box key={year}>
					<Heading as="h2" size="5" mb="3">
						{year}
					</Heading>
					<Grid columns={{ initial: "1", md: "2" }} gap="4">
						{papers
							.filter((p) => p.year === year)
							.map((p) => (
								<PaperCard key={p.id} paper={p} />
							))}
					</Grid>
				</Box>
			))}
		</Flex>
	);
}
