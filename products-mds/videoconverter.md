# Narzary Video Converter & Compressor

![Platform](https://img.shields.io/badge/Platform-Android%2014%20%7C%2015%20%7C%2016-00E5FF?style=for-the-badge&logo=android)
![Language](https://img.shields.io/badge/Language-Kotlin%202.2-7C3AED?style=for-the-badge&logo=kotlin)
![UI](https://img.shields.io/badge/UI-Jetpack%20Compose%20M3-10B981?style=for-the-badge&logo=jetpackcompose)
![License](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)

A powerful, high-performance, **100% offline video converter, compressor, audio extractor, and high-speed multi-threaded downloader** built with Jetpack Compose and Material Design 3. Engineered for mobile and tablet devices with native **hardware GPU acceleration** (via Android `MediaCodec`), zero cloud dependencies, complete privacy, multi-threaded parallel downloads (2 to 20 threads, IDM-style acceleration), built-in media players and file browser, and full multilingual support for all **22+ scheduled Indian languages** and international languages.

---

## ⚡ Core Philosophy: 100% Offline Device Sovereignty
Most video converters rely on external cloud servers, exposing your personal video clips to data harvesting and latency. **Narzary Video Converter operates entirely on your physical device.** All video encoding, audio extraction, downsampling, and watermarking execute directly on your phone or tablet's GPU/CPU silicon. No uploads, no bandwidth waste, absolute privacy.

---

## 🚀 Key Features

### 1. Minimal Default Converter Workspace
- **Default Launch Destination:** The Converter screen is the default workspace when opening the app.
- **Add Video File(s):** Multi-file device picker with immediate metadata inspection (resolution, duration, file size).
- **Preset Option:** 1-tap horizontal chip selector for fast optimization profiles:
  - *WhatsApp & Web HD* (720p, 60% reduction, Fast)
  - *YouTube 1080p Pro* (1080p, 60fps, High Quality)
  - *Discord 8MB Extreme* (480p, 80% reduction)
  - *Podcast & Music MP3* (Audio-only 256kbps extraction)
  - *HEVC / H.265 Master* (Next-gen 50% size reduction)
  - *AV1 Next-Gen Streamer* (Ultra-modern royalty-free codec)
- **Live Preview Frame:** 16:9 preview canvas displaying before/after file size comparisons, predicted savings, and live watermark placement.
- **Convert Button:** One-touch conversion execution with batch support.

### 2. Real-Time Visual Progress Bar Component
- Displayed directly on the **Converter screen** in real-time when transcoding starts.
- **Live Telemetry & Metrics:**
  - Dynamic progress bar with animated gradient (0% to 100%).
  - Frame rendering rate (FPS) counter (e.g. `78.4 FPS`).
  - Throughput velocity in MB/s (e.g. `14.2 MB/s`).
  - Remaining time countdown (`ETA: 4s`).
  - Processing phase indicator (*Analyzing streams*, *Transcoding via GPU MediaCodec*, *Applying watermark*, *Finalizing*).
  - Quick action buttons: **Cancel**, **Save to Gallery**, **Share**, and **View Batch Queue**.

### 3. Small Advanced Parameters Panel
- Accessed via the sleek **"Advanced"** icon button (`Icons.Default.Tune`) in the Converter header:
  - **Video Target Formats:** MP4, MKV, AVI, MOV, WebM, WMV, FLV, 3GP.
  - **Audio Formats (Audio-Only Extraction):** MP3, AAC, M4A, WAV, FLAC, OGG.
  - **Video Codecs:** H.264 (AVC), H.265 (HEVC), AV1, VP9, MPEG-4 Part 2.
  - **Granular Target Size Slider:** Percentage reduction slider from **10% to 90%** with instantaneous output size recalculation.
  - **Resolution Presets:** Original, 4K UHD (2160p), 2K QHD (1440p), 1080p Full HD, 720p HD, 480p SD, 360p Low, 240p Compact.
  - **Quality Tuning Modes:** Ultra Fast, Fast, Balanced, High Quality, Maximum Compression.
  - **Target FPS:** Keep Original, 24 fps (Cinema), 30 fps, 60 fps.
  - **Audio Bitrates:** 64 kbps, 96 kbps, 128 kbps, 192 kbps, 256 kbps, 320 kbps.
  - **Watermark Settings:** Custom text, position chips, and removal toggle.
  - **GPU Acceleration Switch:** Toggle hardware-accelerated MediaCodec vs CPU multi-threading.
  - **Save Custom Preset:** Save any combination as a named profile.

### 4. High-Speed Multi-Threaded Parallel Downloader (IDM-Style)
- **Automatic Media URL Detection:** Automatically inspects supplied URLs to determine media type (Video, Audio, or Generic File), content length, and multi-thread byte-range capability before downloading.
- **Parallel Segmented Streams:** Configure between **2 and 20 parallel threads** (slider and quick-select chips: 2T, 4T, 8T, 12T, 16T, 20T) for maximum download velocity, just like Internet Download Manager (IDM).
- **Segmented Chunk Visualization:** Live visual grid showing progress across all active parallel download chunks simultaneously.
- **Zero Third-Party Trademark Clutter:** Clean, neutral URL input ("Paste Video or File Download URL") without brand names.
- **Audio Extraction During Download:** Optional toggle to convert video streams to audio-only (MP3) on download.
- **One-Tap "Compress" Action:** Pipe any completed download directly into the conversion workspace with one tap.

### 5. In-App Media Players & Universal File Browser
- **In-App Video Player:** Play downloaded videos within the application using an interactive modal player with full transport controls, playback scrubbing, and time indicators, plus a 1-tap option to open via the system video viewer.
- **In-App Audio Player:** Dedicated player for downloaded audio tracks and extracted podcasts, with play/pause, timecode, and system audio player fallback.
- **Non-Media File Protection:** Generic files (PDFs, ZIPs, documents, APKs) are cleanly recognized and prevented from playing in media players; instead, they open directly in system-supported file viewers.
- **Downloaded File Browser:** Dedicated tab to explore all downloaded files stored on the device with category filters (*All, Videos, Audio, Documents & Other*), file size, modification date, share options, and file management.

### 6. Watermarking & Attribution System
- **Default Watermark:** Applied to non-premium conversions as `"Narzary Video Converter and Compressor"` at the **bottom-left** of the output video.
- **Custom Positioning:** Bottom-Left, Bottom-Right, Top-Left, Top-Right, Center.
- **Custom Text:** Personalize watermark label with text input.
- **Watermark Removal:** 100% clean video export unlocked via the **Narzary PRO 1-Year Pass**.

### 7. Streamlined 4-Item Navigation
1. **Home (`DashboardScreen`):** App hub containing quick links to Converter, Downloader, Batch Converter, Exports & Presets, Settings, plus real-time hardware telemetry (RAM, Storage, Battery, GPU codecs).
2. **Converter (`ConvertScreen`):** Minimal, focused conversion workspace (default screen upon app launch).
3. **Downloader (`DownloaderScreen`):** Parallel multi-threaded URL downloader with IDM visualization and File Browser.
4. **Settings (`SettingsScreen`):** Subscription management, 22+ languages, dark theme, and cloud integration.

### 8. Google Play 1-Year Annual Subscription Model ($9.00/year)
- Billed through your **Google Play Store Merchant Account**.
- **1-Year Period Protection:** Unlocks premium features for exactly **365 days**.
- **PRO Account Badge:** Displayed prominently in the TopAppBar, Converter screen, and Settings.
- **Expiration & Renewal:** After 1 year, the app prompts for renewal. Free conversion remains permanent.
- **Testing Helpers:** Built-in "Simulate 1-Year Expiry" toggle to easily verify the expiration warning and renewal user journey.

### 9. Multilingual Localization (22+ Scheduled Indian Languages + World Languages)
Instant in-app switching without restarting:
- **Indian Languages:** Hindi (हिन्दी), Assamese (অসমীয়া), Bengali (বাংলা), Bodo (बर'), Dogri (डोगरी), Gujarati (ગુજરાતી), Kannada (ಕನ್ನಡ), Kashmiri (कॉशुर / کٲشُر), Konkani (कोंकणी), Maithili (मैथिली), Malayalam (മലയാളം), Manipuri (ꯃꯤꯇꯩꯂꯣꯟ), Marathi (मराठी), Nepali (नेपाली), Odia (ଓଡ଼ିଆ), Punjabi (ਪੰਜਾਬੀ), Sanskrit (संस्कृतम्), Santali (ᱥᱟᱱᱛᱟᱲᱤ), Sindhi (सिन्धी / سنڌي), Tamil (தமிழ்), Telugu (తెలుగు), Urdu (اردو).
- **World Languages:** English, Spanish (Español), French (Français), German (Deutsch), Japanese (日本語), Portuguese (Português), Arabic (العربية), Chinese (中文).

---

## 🛠️ Architecture & Tech Stack
- **Language:** 100% Kotlin
- **UI Toolkit:** Jetpack Compose with Material Design 3 (M3)
- **Architecture:** Clean MVVM (Model-View-ViewModel) with StateFlow
- **Media Engine:** Android `MediaCodec`, `MediaExtractor`, and `MediaCodecList` for hardware capability detection
- **Networking:** OkHttp 4 for URL inspection and streaming downloads
- **Theming:** Dark Space Studio cyberpunk palette (Neon Cyan, Electric Violet, Emerald Green) with full Dark, Light, and System modes
- **Adaptive Design:** Bottom Navigation Bar for phones, Navigation Rail for tablets/foldables

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
