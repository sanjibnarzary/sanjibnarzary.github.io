import { baseMetadata } from "@utils/metadata";
import { Metadata } from "next";
import ThemesHome from "./page.client";

export const metadata: Metadata = {
	...baseMetadata,
	title: "Narzary Mobile First App Development",
	description:
		"Narzary is a mobile-first app development company that specializes in creating high-quality, user-friendly mobile applications for iOS and Android platforms. Our team of experienced developers and designers work closely with clients to understand their unique needs and deliver custom solutions that meet their business goals.",
};

export default function Page() {
	return <ThemesHome />;
}
