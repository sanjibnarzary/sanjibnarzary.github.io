import { Container, Heading, Section, Text } from "@radix-ui/themes";
import { Footer } from "@components/footer";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = { ...baseMetadata, title: "Projects", description: "Our projects will be listed here." };

export default function Page() {
	return (
		<>
			<PrimitivesMobileMenu />
			<PrimitivesHeader />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Heading as="h1" size="8" mb="4">
						Projects
					</Heading>
					<Text as="p" size="3" color="gray">
						Our projects will be listed here.
					</Text>
					<Footer />
				</Section>
			</Container>
		</>
	);
}
