import { Box, Container, Grid, Heading, Link, Section, Text } from "@radix-ui/themes";
import { Footer } from "@components/footer";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
	...baseMetadata,
	title: "About Dr. Sanjib Narzary",
	description: "Learn about Dr. Sanjib Narzary, his academic background, technology projects, and community work.",
};

export default function Page() {
	return (
		<>
			<PrimitivesMobileMenu />
			<PrimitivesHeader />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Grid columns={{ initial: "1", md: "280px 1fr" }} gap={{ initial: "5", md: "8" }} align="start">
						<Box style={{ textAlign: "center" }}>
							<img
								src="https://cit.ac.in/uploads/users/images/1755229478.jpg"
								alt="Dr. Sanjib Narzary"
								width="280"
								height="280"
								style={{
									width: "100%",
									maxWidth: 280,
									height: "auto",
									aspectRatio: "1",
									objectFit: "cover",
									objectPosition: "center top",
									borderRadius: "50%",
								}}
							/>
						</Box>
						<Box>
							<Heading as="h1" size="8" mb="4">
								About Dr. Sanjib Narzary
							</Heading>
							<Text as="p" size="3" mb="4">
								Dr. Sanjib Narzary holds a Doctor of Philosophy degree from the Indian Institute of
								Technology Guwahati. He earned a Bachelor of Technology in Computer Science and
								Engineering from the National Institute of Technology Silchar and a Master of Technology
								in Computer Science and Information Security from the National Institute of Technology
								Calicut.
							</Text>
							<Heading as="h2" size="5" mb="2">
								Technology and projects
							</Heading>
							<Text as="p" size="3" mb="4">
								Passionate about technology, Sanjib enjoys building small, practical projects in his
								spare time. He created <Link href="https://echo.narzary.com">Echo Search</Link>, a
								personal AI search engine, and <Link href="https://alayaran.com">Alayaran</Link>, a
								personalized news reader powered by RSS feeds.
							</Text>
							<Text as="p" size="3" mb="4">
								His mobile apps include PetPal, a virtual assistant for pet lovers; GPSCameraMap, for
								GPS-tagged images and videos; FluidClean, for clearing junk and temporary files;
								AnyDocViewer, for viewing documents, source code, and PDFs; and Kidz Learn, a learning
								app for children in India with support for 22 languages. Other projects include
								QuoteCraft for sharing quotes as images or videos, PDF Studio for managing PDF pages
								and files, Video Converter for format conversion and compression, and a QR and barcode
								scanner and generator. Most of his creation can be found here{" "}
								<Link href="/products">Products</Link>
							</Text>
							<Heading as="h2" size="5" mb="2">
								Community and service
							</Heading>
							<Text as="p" size="3" mb="4">
								Originally from a remote village in Assam’s Kokrajhar district, Sanjib believes that
								where you come from should never limit what you dream of or create. He is proud of his
								community and the Bodo language. He has contributed to and translated open-source
								software for LibreOffice, Fedora, GNOME, and Mozilla. His open-source projects are
								available on <Link href="https://github.com/sanjibnarzary">GitHub</Link>.
							</Text>
							<Text as="p" size="3" mb="4">
								He serves on the Board of Governors at CIT Kokrajhar and has served as Head of its
								Department of Computer Science and Engineering. He is a member of the Bodo Sahitya
								Sabha, the Linguistic Society of India, the Robotics Society of India, the Association
								for Computing Machinery, and IEEE. He is also Co-Principal Investigator of the MeitY,
								Government of India-funded “Multilevel Capacity Building and Skilling in Industry-Aligned
								Emerging Technologies” project, and has supported Subunthi Sibinai, a free
								computer-training initiative under the Unnat Bharat Abhiyan mission.
							</Text>
							<Text as="p" size="3" color="gray">
								Outside his work, he enjoys family life with his wife and two daughters.
							</Text>
							
						</Box>
						
					</Grid>
					<Box><br /></Box>
					<Footer />
				</Section>
			</Container>
		</>
	);
}
