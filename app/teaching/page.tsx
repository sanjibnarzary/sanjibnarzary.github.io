import { Box, Container, Grid, Heading, Link, Section, Text } from "@radix-ui/themes";
import { Footer } from "@components/footer";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { baseMetadata } from "@utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Teaching and Administrative Experience | Dr. Sanjib Narzary",
	description:
		"Courses taught and administrative responsibilities undertaken by Dr. Sanjib Narzary.",
};

type Course = {
	title: string;
	level: string;
	format: string;
	semesters?: string[];
	theoryUrl?: string;
};

const courses: Course[] = [
	{
		title: "Advanced Cryptography and Information Security",
		level: "Graduate (M.Tech)",
		format: "Theory",
		semesters: ["Jul-Dec, 2024", "Jul-Dec, 2020"],
	},
	{ title: "ATM Networks", level: "Undergraduate (B.Tech)", format: "Theory" },
	{
		title: "Blockchain Technology",
		level: "Undergraduate (B.Tech)",
		format: "Theory",
		semesters: ["Jan-Jun, 2024"],
	},
	{
		title: "Computer Communication and Networking",
		level: "Diploma",
		format: "Theory + Lab",
		semesters: ["Jul-Dec, 2018"],
	},
	{
		title: "Cryptography and Network Security",
		level: "Diploma",
		format: "Theory + Lab",
		semesters: ["Jul-Dec, 2024", "Jul-Dec, 2023", "Jul-Dec, 2022", "Jul-Dec, 2021"],
	},
	{
		title: "Cryptography and Network Security",
		level: "Undergraduate (B.Tech)",
		format: "Theory",
	},
	{
		title: "Data Structure using C",
		level: "Diploma",
		format: "Theory + Lab",
		semesters: ["Jan-Jun, 2024", "Jan-Jun, 2023"],
	},
	{
		title: "Information Security",
		level: "Undergraduate (B.Tech)",
		format: "Theory + Lab",
	},
	{
		title: "Machine Learning",
		level: "Graduate (M.Tech)",
		format: "Theory",
		semesters: ["Jan-Jun, 2022"],
	},
	{
		title: "Microprocessor",
		level: "Diploma",
		format: "Theory + Lab",
		semesters: ["Jan-Jun, 2020"],
	},
	{
		title: "Object Oriented Methodology",
		level: "Undergraduate (B.Tech)",
		format: "Theory",
	},
	{
		title: "Object Oriented Programming using Java",
		level: "Undergraduate (B.Tech)",
		format: "Lab",
		semesters: ["Jul-Dec, 2023"],
	},
	{
		title: "Operating System",
		level: "Diploma",
		format: "Theory",
		semesters: ["Jan-Jun, 2015"],
	},
	{
		title: "System Programming",
		level: "Undergraduate (B.Tech)",
		format: "Theory + Lab",
	},
	{
		title: "Speech and Natural Language Processing",
		level: "Undergraduate (B.Tech)",
		format: "Theory",
		semesters: ["Jan-Jun, 2024", "Jan-Jun, 2023"],
	},
	{
		title: "Web and Internet Technology",
		level: "Undergraduate (B.Tech)",
		format: "Theory",
		semesters: ["Jul-Dec, 2024", "Jul-Dec, 2023", "Jul-Dec, 2022"],
	},
];

const administrativeRoles = [
	{ role: "Nodal Officer, Samarth eGov ERP Suite", period: "2024-present" },
	{ role: "Nodal Officer, National Knowledge Network", period: "2015-present" },
	{
		role: "Faculty In-charge, Institute Website and Networking",
		period: "2023-present; FIC role established 2020-2023",
	},
	{ role: "Member, Campus Networking, Firewall and Security", period: "2018-2020" },
	{ role: "Website In-charge", period: "2013-2018" },
	{ role: "Head of Department, Computer Science and Engineering", period: "2015-2017" },
	{ role: "Member/Relation, Admission Committee", period: "2013-2023" },
];

export default function Page() {
	return (
		<>
			<PrimitivesMobileMenu />
			<PrimitivesHeader />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Grid
						columns={{ initial: "1", md: "280px 1fr" }}
						gap={{ initial: "5", md: "8" }}
						align="start"
					>
						<Box style={{ textAlign: "center" }}>
							<img
								src="/images/books.webp"
								alt="Library books"
								width="280"
								height="380"
								style={{
									width: "100%",
									maxWidth: 280,
									height: "auto",
									aspectRatio: "1",
									objectFit: "cover",
									objectPosition: "center top",
									borderRadius: "10%",
								}}
							/>
						</Box>
						<Box>
							<Heading as="h1" size="8" mb="4">
								Teaching and Administrative Experience
							</Heading>
							<Text as="p" size="3" mb="4">
								Dr. Sanjib Narzary holds a Doctor of Philosophy degree from the Indian Institute of
								Technology Guwahati. He earned a Bachelor of Technology in Computer Science and
								Engineering from the National Institute of Technology Silchar and a Master of
								Technology in Computer Science and Information Security from the National Institute
								of Technology Calicut.
							</Text>
							<Heading as="h2" size="5" mb="2">
								Teaching experience
							</Heading>
							<Text as="p" size="3" mb="4">
								I have more than 13 years of teaching experience across diploma, undergraduate, and
								graduate programs. I have taught the following courses at different levels:
							</Text>
							<Box asChild mb="5">
								<ul style={{ paddingLeft: "1.5rem" }}>
									{courses.map((course) => (
										<li key={`${course.title}-${course.level}`} style={{ marginBottom: "0.75rem" }}>
											<Text as="span" size="3" weight="medium">
												{course.theoryUrl ? (
													<>
														{course.title} (
														<Link href={course.theoryUrl} target="_blank" rel="noopener noreferrer">
															Theory
														</Link>
														)
													</>
												) : (
													course.title
												)}
											</Text>
											<Text as="span" size="2" color="gray">
												{" — "}
												{course.level} · {course.format}
												{course.semesters && ` · ${course.semesters.join(" · ")}`}
											</Text>
										</li>
									))}
								</ul>
							</Box>
							<Heading as="h2" size="5" mb="2">
								Administrative experience
							</Heading>
							<Text as="p" size="3" mb="3">
								Administrative responsibilities undertaken as part of my academic service:
							</Text>
							<Box asChild mb="5">
								<ul style={{ paddingLeft: "1.5rem" }}>
									{administrativeRoles.map(({ role, period }) => (
										<li key={role} style={{ marginBottom: "0.75rem" }}>
											<Text as="span" size="3">
												{role}
											</Text>
											<Text as="span" size="2" color="gray">
												{" — "}
												{period}
											</Text>
										</li>
									))}
								</ul>
							</Box>
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
								His mobile apps include PetPal, a virtual assistant for pet lovers; GPSCameraMap,
								for GPS-tagged images and videos; FluidClean, for clearing junk and temporary files;
								AnyDocViewer, for viewing documents, source code, and PDFs; and Kidz Learn, a
								learning app for children in India with support for 22 languages. Other projects
								include QuoteCraft for sharing quotes as images or videos, PDF Studio for managing
								PDF pages and files, Video Converter for format conversion and compression, and a QR
								and barcode scanner and generator. Most of his creation can be found here{" "}
								<Link href="/products">Products</Link>
							</Text>
							<Heading as="h2" size="5" mb="2">
								Community and service
							</Heading>
							<Text as="p" size="3" mb="4">
								Originally from a remote village in Assam’s Kokrajhar district, Sanjib believes that
								where you come from should never limit what you dream of or create. He is proud of
								his community and the Bodo language. He has contributed to and translated
								open-source software for LibreOffice, Fedora, GNOME, and Mozilla. His open-source
								projects are available on{" "}
								<Link href="https://github.com/sanjibnarzary">GitHub</Link>.
							</Text>
							<Text as="p" size="3" mb="4">
								He serves on the Board of Governors at CIT Kokrajhar and has served as Head of its
								Department of Computer Science and Engineering. He is a member of the Bodo Sahitya
								Sabha, the Linguistic Society of India, the Robotics Society of India, the
								Association for Computing Machinery, and IEEE. He is also Co-Principal Investigator
								of the MeitY, Government of India-funded “Multilevel Capacity Building and Skilling
								in Industry-Aligned Emerging Technologies” project, and has supported Subunthi
								Sibinai, a free computer-training initiative under the Unnat Bharat Abhiyan mission.
							</Text>
							<Text as="p" size="3" color="gray">
								Outside his work, he enjoys family life with his wife and two daughters.
							</Text>
						</Box>
					</Grid>
					<Box>
						<br />
					</Box>
					<Footer />
				</Section>
			</Container>
		</>
	);
}
