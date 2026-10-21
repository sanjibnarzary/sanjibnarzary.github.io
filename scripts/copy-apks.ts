import fs from "fs";
import path from "path";

const PRODUCTS = path.join(process.cwd(), "data", "products");
const OUT = path.join(process.cwd(), "public", "downloads");

// data/products/<product>/apk/app-release.apk -> public/downloads/<product>.apk
fs.rmSync(OUT, { recursive: true, force: true });
for (const entry of fs.readdirSync(PRODUCTS, { withFileTypes: true })) {
	const apk = path.join(PRODUCTS, entry.name, "apk", "app-release.apk");
	if (!entry.isDirectory() || !fs.existsSync(apk)) continue;
	fs.mkdirSync(OUT, { recursive: true });
	fs.copyFileSync(apk, path.join(OUT, `${entry.name}.apk`));
}
