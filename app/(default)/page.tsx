import { baseMetadata } from "@utils/metadata";
import { Metadata } from "next";
import ThemesHome from "./page.client";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Dr. Sanjib Narzary | Mobile App Development Side Project",
	description:
		"Dr. Sanjib Narzary is serving as an Assistant Professor in the Department of Computer Science and Engineering at Central Institute of Technology Kokrajhar. In his spare time he develops mobile apps and web applications. He is passionate about using technology to solve real-world problems and improve people's lives.",
};

export default function Page() {
	return <ThemesHome />;
}
