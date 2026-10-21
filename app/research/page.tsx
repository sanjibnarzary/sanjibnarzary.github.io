import { Container, Heading, Section, Text } from "@radix-ui/themes";
import { Footer } from "@components/footer";
import { PaperList } from "@components/paper-list";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { papers } from "@data/papers";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Research",
	description: "Published papers by Dr. Sanjib Narzary on NLP, machine translation, and low-resource languages.",
};

export default function Page() {
	return (
		<>
			<PrimitivesMobileMenu />
			<PrimitivesHeader />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Heading as="h1" size="8" mb="2">
						Research
					</Heading>
					<Text as="p" size="3" color="gray" mb="6">
						Published papers on natural language processing, machine translation, and resources for
						low-resource languages such as Bodo. Copy or export any citation as BibTeX, RIS, EndNote, APA or
						plain text.
					</Text>
					<PaperList papers={papers} />
					<Footer />
				</Section>
			</Container>
		</>
	);
}
