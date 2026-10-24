# ScanCraft: QR & Barcode Pro

An instant, multi-format QR and Barcode scanner, product verification engine, offline inventory management tool, and custom code generator for Android.

- **Application Name**: `ScanCraft: QR & Barcode`
- **Package Name / Application ID**: `com.narzary.qrbarcodescanner`
- **Version**: `1.3.0` (`versionCode = 3`)
- **Developer**: **Dr. Sanjib Narzary**
- **Billing Engine**: Google Play Merchant via Google Play Billing Library **`8.1.0`**
- **Architecture**: MVVM with Clean Architecture, Kotlin Coroutines, StateFlow, Room SQLite Database, CameraX, Google ML Kit, ZXing, and Jetpack Compose (Material 3).

---

## About Developer — Dr. Sanjib Narzary

**Dr. Sanjib Narzary** holds a Doctor of Philosophy (Ph.D.) degree from the **Indian Institute of Technology Guwahati (IIT Guwahati)**. He earned a Bachelor of Technology (B.Tech) in Computer Science and Engineering from the **National Institute of Technology Silchar (NIT Silchar)** and a Master of Technology (M.Tech) in Computer Science and Information Security from the **National Institute of Technology Calicut (NIT Calicut)**.

### Technology and Projects
Passionate about technology, Sanjib enjoys building small, practical projects in his spare time. He created **Echo Search**, a personal AI search engine, and **Alayaran**, a personalized news reader powered by RSS feeds.

His mobile apps include:
- **PetPal**: A virtual assistant for pet lovers
- **GPSCameraMap**: For GPS-tagged images and videos
- **FluidClean**: For clearing junk and temporary files
- **AnyDocViewer**: For viewing documents, source code, and PDFs
- **Kidz Learn**: A learning app for children in India with support for 22 languages
- **QuoteCraft**: For sharing quotes as images or videos
- **PDF Studio**: For managing PDF pages and files
- **Video Converter**: For format conversion and compression
- **ScanCraft**: QR and barcode scanner and generator

### Community and Service
Originally from a remote village in Assam’s Kokrajhar district, Sanjib believes that where you come from should never limit what you dream of or create. He is proud of his community and the **Bodo language**. He has contributed to and translated open-source software for **LibreOffice**, **Fedora**, **GNOME**, and **Mozilla**. His open-source projects are available on GitHub.

He serves on the **Board of Governors at CIT Kokrajhar** and has served as **Head of its Department of Computer Science and Engineering**. He is a member of the **Bodo Sahitya Sabha**, the **Linguistic Society of India**, the **Robotics Society of India**, the **Association for Computing Machinery (ACM)**, and **IEEE**. He is also Co-Principal Investigator of the MeitY, Government of India-funded *“Multilevel Capacity Building and Skilling in Industry-Aligned Emerging Technologies”* project, and has supported **Subunthi Sibinai**, a free computer-training initiative under the **Unnat Bharat Abhiyan** mission.

Outside his work, he enjoys family life with his wife and two daughters.

---

## Key Features

### 1. Dual-Mode Unified Scanner (4-Item Navigation)
- **QR Code Scanner**: Fast automatic detection with instant link recognition. If a web link is detected, a prominent clickable bar appears below the camera view to open in the browser.
- **Barcode Product Scanner**: Auto-detects 10+ standard retail and logistics barcode formats (EAN-13, EAN-8, UPC-A, UPC-E, Code 128, Code 39, Code 93, ITF, Codabar, Data Matrix, PDF417, Aztec).
- **Continuous Lifecycle Reliability**: Managed via `DisposableEffect` and `rememberUpdatedState` so the camera re-binds cleanly when switching between Scanner, Generator, History, and Settings.

### 2. Product Database & Offline Caching
- **Open Food Facts API & UPC Lookup**: Retrieves product name, brand, category, estimated retail pricing, user star rating, review counts, Nutri-Score, Eco-Score, and nutritional breakdown.
- **Offline Caching (Room DB)**: All scan results and product profiles are stored locally for offline warehouse and retail inventory workflows.

### 3. Overlay Display Cards & Exporting
- **Actions**: Save as Image (PNG card render), Save as Text (`.txt` export), Copy, Share, Stock Quantity Counter (`+` / `-`), and Custom Notes.

### 4. Custom QR Code Designer & 10-Format Barcode Generator
- **Centered QR Logos & Icons**: Mathematically centered emblem with 30% High Error Correction (`ErrorCorrectionLevel.H`) and luxury color palettes.
- **10 Barcode Standards**: Code 128, EAN-13, UPC-A, EAN-8, Code 39, ITF-14, Codabar, Data Matrix (2D), PDF 417 (2D), and Aztec (2D) with automatic checksum calculation.

### 5. Google Play Merchant In-App Upgrades (Billing 8.1.0)
- **Monthly Pro (`$9.00/month`)**: `sub_monthly_9` / `com.narzary.qrbarcodescanner.monthly` (Auto-locks back to default after 30 days).
- **Yearly Pro (`$99.00/year`)**: `sub_yearly_99` / `com.narzary.qrbarcodescanner.yearly` (Auto-locks back to default after 365 days).
- **Lifetime Unlimited (`$999.00`)**: `inapp_lifetime_999` / `com.narzary.qrbarcodescanner.lifetime` (Kept unlocked forever).

### 6. Custom Adaptive Launcher Icon & Themes
- Custom glassmorphic adaptive launcher icon (`ic_launcher_foreground.xml`, `ic_launcher_background.xml`, and density-specific PNGs in `mipmap-mdpi` through `mipmap-xxxhdpi`).
- Supports **Material You**, **Liquid Display Glass**, **Dark Mode** (low-light optimized), and **Light Mode**.

### 7. Multi-Language Support (22+ Indian Languages + World Languages)
- Supports all **22 scheduled Indian languages** (including Bodo बड़ो, Assamese, Hindi, Bengali, Telugu, Marathi, Tamil, Urdu, Gujarati, Kannada, Odia, Malayalam, Punjabi, Maithili, Santali, Kashmiri, Nepali, Konkani, Sindhi, Dogri, Manipuri, Sanskrit) and **9 major world languages** (English, Spanish, French, German, Japanese, Chinese, Arabic, Portuguese, Russian).

---

## Documentation Index
- [`LICENSE.md`](./LICENSE.md) — MIT License
- [`PRIVACY_POLICY.md`](./PRIVACY_POLICY.md) — Privacy Policy
- [`TERMS.md`](./TERMS.md) — Terms and Conditions
- [`TERMS_OF_SERVICE.md`](./TERMS_OF_SERVICE.md) — Terms of Service (TOS)
- [`GUIDES.md`](./GUIDES.md) — User & Developer Guides
- [`RELEASE.md`](./RELEASE.md) — Release Notes & Changelog (with 10-language release notes)
- [`PLAYSTORE_INFO.md`](./PLAYSTORE_INFO.md) — Google Play Store Listing & 10-Language Release Notes
