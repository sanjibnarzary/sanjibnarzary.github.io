"use client";
import * as React from "react";
import NextLink from "next/link";
import { Box, Grid, Text, Flex, Link, Heading, AccessibleIcon } from "@radix-ui/themes";
import { Logo } from "./logo";
import { BoxLink } from "./box-link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import styles from "./footer.module.css";

const exploreLinks = [
	{ label: "Home", href: "/" },
	{ label: "Research", href: "/research" },
	{ label: "Teaching", href: "/teaching" },
	{ label: "Products", href: "/products" },
	{ label: "About", href: "/about" },
] as const;

const socialLinks = [
	{ label: "GitHub", href: "https://github.com/sanjibnarzary" },
	{ label: "Twitter", href: "https://x.com/SanjibNarzary" },
	{ label: "Facebook", href: "https://facebook.com/SanjibNarzary" },
	{ label: "HuggingFace", href: "https://huggingface.co/alayaran" },
];

const projectLinks = [
	{ label: "SeekGPT", href: "https://seekgpt.org" },
	{ label: "Mobile Apps", href: "/products" },
	{ label: "Echo Search", href: "https://echo.narzary.com" },
	{ label: "Alayaran", href: "https://alayaran.com" },
];

export const Footer = () => (
	<Grid asChild pb="9" gapX="7" gapY="3" className={styles.Footer}>
		<footer>
			<Flex align="start" direction="column" className={styles.Brand} mb="5">
				<BoxLink asChild>
					<NextLink href="/">
						<AccessibleIcon label="Sanjib Narzary Homepage">
							<Logo />
						</AccessibleIcon>
					</NextLink>
				</BoxLink>
				<Box pr="8" mt="5">
					<Heading
						as="h6"
						size="2"
						style={{ lineHeight: "20px", color: "var(--gray-10)", fontWeight: "inherit" }}
					>
						Dr. Sanjib Narzary — Assistant Professor and tech enthusiast, builder of apps and open
						source, from Kokrajhar, Assam.
					</Heading>
				</Box>
			</Flex>

			<Box>
				<Heading as="h6" size="3">
					Explore
				</Heading>
				<ul>
					{exploreLinks.map(({ label, href }) => (
						<li key={href}>
							<Text as="p" size="2" mt="3">
								<Link color="gray" asChild>
									<NextLink href={href}>{label}</NextLink>
								</Link>
							</Text>
						</li>
					))}
				</ul>
			</Box>

			<Box>
				<Heading as="h6" size="3">
					Projects
				</Heading>
				<ul>
					{projectLinks.map(({ label, href }) => (
						<ExternalItem key={href} label={label} href={href} />
					))}
				</ul>
			</Box>

			<Box>
				<Heading as="h6" size="3">
					Social Networks
				</Heading>
				<ul>
					{socialLinks.map(({ label, href }) => (
						<ExternalItem key={href} label={label} href={href} />
					))}
				</ul>
			</Box>

			<Text as="p" size="1" color="gray" mt="6" className={styles.Copyright}>
				© {new Date().getFullYear()} Dr. Sanjib Narzary. All rights reserved.
			</Text>
		</footer>
	</Grid>
);

const ExternalItem = ({ label, href }: { label: string; href: string }) => (
	<li>
		<Text as="p" size="2" mt="3">
			<Link color="gray" href={href} target="_blank" rel="noopener noreferrer">
				{label}
				<ArrowTopRightIcon style={{ display: "inline", marginLeft: 4, verticalAlign: "middle" }} />
			</Link>
		</Text>
	</li>
);
