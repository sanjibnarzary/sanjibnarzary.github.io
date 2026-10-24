# QuoteCraft 📸✨

A versatile photo creator, quote overlay studio, and multi-screen video story maker for Android, built with Jetpack Compose and Material 3. QuoteCraft lets you transform photos and color canvases into social media quote art, typography posters, and animated quote video stories with calm relaxing music.

---

## 🌟 Key Features

### 1. Canvas Backgrounds & Aspect Ratios
- **Aspect Ratios**: 
  - **`3:4 (Portrait)`** — Default aspect ratio tailored for mobile wallpapers, reels, and stories.
  - **`4:3 (Landscape)`** — Classic landscape framing.
  - **`1:1 (Square)`** — Classic post ratio.
- **Default Container & Shapes**:
  - `ShapeType.NONE` by default with 0% alpha transparent fill and 0dp border width.
- **Interactive Canvas Taps**:
  - **Clicking Canvas Background**: Directly opens the color palette for solid colors and gradients.
  - **Clicking Container Shapes / Borders**: Directly opens the Shape Palette sheet with multi-tab controls.
  - **Clicking Text**: Directly opens text editing with autofocus for immediate typing, font styles, sizes, and formatting.
- **Background Sources**:
  - **Solid Colors & Gradients**: HSV color picker, gradient presets, and custom hex colors.
  - **Full-Screen Camera**: Full in-app camera with instant toggle between **Rear** and **Front (Selfie)** cameras, flash controls, and shutter capture.
  - **System Photo Picker**: Choose photos from your device library using Android's zero-permission system photo picker.

### 2. Avatar Overlay Placeholder & Custom Shapes
- **Interactive Avatar Overlay**:
  - Add photo avatar placeholder directly on the photo canvas or individual story screens.
  - Tapping avatar overlay opens the comprehensive customization palette.
  - Choose photos from device gallery or capture live via camera (front & rear toggle).
  - **8 Avatar Shapes**: Rounded Rectangle, Circle, Square, Rectangle, Star, Heart, Oval, Hexagon.
  - Customizable border colors and width (0dp up to 10dp).
  - Flexible positioning: Top Left (default with rounded white border), Top Center, Top Right, Bottom Left, Bottom Center, Bottom Right, and Center.
  - Adjustable size slider with real-time canvas updates.

### 3. User Copyright Overlay (Pro Exclusive)
- **Creator Copyright Branding**:
  - Optional creator branding overlay with avatar photo on the left, Name on top, and Social Handle below on the right.
  - Positioned by default at **Bottom Center** with subtle, non-distracting opacity (~70%) to keep quotes front and center.
  - Fully customizable: shapes, border, colors, text, and opacity slider (30% to 100%).
  - Configurable directly from canvas tap or within Settings.
  - Disabled by default; available exclusively for Pro supporters (locked in Settings for free users).
  - Automatically supersedes default watermark when enabled.

### 4. Multi-Screen Quote Story & Video Maker
- **Multiple Screen Slides**: Add multiple quote screens to tell a sequential story.
- **Timing Slider**: Supports slide durations from **1s up to 59s**, with **10s as the default** for each screen.
- **Default Transition**: **Cross Fade** applied automatically as the default transition across all screens until changed by the user.
- **Audio Defaults**: Audio is **not selected or played by default** while editing, previewing, or exporting (`CalmAudioOption.NONE`). Users can optionally attach calm ambient soundscapes or custom music when desired.
- **Interactive Transition Dots**: Clickable dots between screens on the timeline strip to open the Transition Palette and attach transitions.
- **All 15 Transitions Supported**:
  - Cut, Dissolve, Crossfade, Fade In, Fade Out, Wipe, J-Cut, L-Cut, Whip Pan, Match Cut, Morphing, Transitions GEN S, Transitions XTRActive, Transitions XTRActive Polarized, Transitions Drivewear.
- **Calm & Relaxing Music**:
  - Optional soothing ambient tracks: Birds & Nature, Hills & Mountain Breeze, Calm Water & Waves, Babbling Stream, Buddha Temple Singing Bowl, Deep Meditation, Zen Bamboo Flute, Soft Relaxing Piano, and more.
  - Support for attaching custom device audio files.
- **Story Export Preview Window**:
  - Full interactive preview window prior to rendering with music playback and mute/unmute toggle.
- **Smooth Video Rendering**:
  - Hardware-accelerated MP4 export pipeline with bounded drain loops ensuring smooth rendering without hangs.

### 5. Gallery with Built-in Video Player
- **Dedicated Gallery**: Browse, organize, search, and preview all created photos and exported MP4 video stories.
- **Built-in Video Player**:
  - Direct hardware-accelerated playback for exported MP4 stories.
  - Play, Pause, and Replay controls.
  - Live scrubbing slider with formatted timestamp display (`00:04 / 00:09`).
  - Smooth looping and tap-anywhere toggle.
- **File Management**: Rename files, mark favorites, delete, and share instantly via Android's native share sheet.

### 6. Creator Watermark & Social Branding
- **Default Watermark**:
  - Subtle gray transparent QuoteCraft watermark with QuoteCraft logo icon and text.
  - Positioned by default in the **Bottom Left** corner so it does not distract.
  - Free users have the watermark enabled on all saved photos and exported videos (locked in Settings).
  - Pro / Supporter users can remove the watermark completely or customize its position, creator name, social handle, avatar, and transparency.
- **7 Watermark Positions**:
  - Bottom Left, Bottom Middle, Bottom Right, Top Left, Top Middle, Top Right, and Center.

### 7. Developer Support & Currency Detection
- **Support Tiers**:
  - Monthly Supporter: **$1 / month** (or **₹89 / month** for Indian users)
  - Annual Patron: **$9 / year** (or **₹799 / year** for Indian users)
  - Lifetime Benefactor: **$99 one-time** (or **₹8,499 one-time** for Indian users)
- **Seamless Local Currency**:
  - Indian users automatically see prices in Indian Rupees (₹).
  - International users automatically see prices in US Dollars ($).
  - Country and region labels are completely hidden for a clean, natural display.
- Integrated via Google Play Billing Library 8.1.0 with pending purchase support.

---

## 👨‍💻 Developer Information

### Dr. Sanjib Narzary
Dr. Sanjib Narzary holds a Doctor of Philosophy degree from the Indian Institute of Technology Guwahati. He earned a Bachelor of Technology in Computer Science and Engineering from the National Institute of Technology Silchar and a Master of Technology in Computer Science and Information Security from the National Institute of Technology Calicut.

#### Technology and Projects
Passionate about technology, Sanjib enjoys building small, practical projects in his spare time. He created Echo Search, a personal AI search engine, and Alayaran, a personalized news reader powered by RSS feeds.

His mobile apps include PetPal, a virtual assistant for pet lovers; GPSCameraMap, for GPS-tagged images and videos; FluidClean, for clearing junk and temporary files; AnyDocViewer, for viewing documents, source code, and PDFs; and Kidz Learn, a learning app for children in India with support for 22 languages. Other projects include QuoteCraft for sharing quotes as images or videos, PDF Studio for managing PDF pages and files, Video Converter for format conversion and compression, and a QR and barcode scanner and generator.

#### Community and Service
Originally from a remote village in Assam’s Kokrajhar district, Sanjib believes that where you come from should never limit what you dream of or create. He is proud of his community and the Bodo language. He has contributed to and translated open-source software for LibreOffice, Fedora, GNOME, and Mozilla. His open-source projects are available on GitHub.

He serves on the Board of Governors at CIT Kokrajhar and has served as Head of its Department of Computer Science and Engineering. He is a member of the Bodo Sahitya Sabha, the Linguistic Society of India, the Robotics Society of India, the Association for Computing Machinery, and IEEE. He is also Co-Principal Investigator of the MeitY, Government of India-funded “Multilevel Capacity Building and Skilling in Industry-Aligned Emerging Technologies” project, and has supported Subunthi Sibinai, a free computer-training initiative under the Unnat Bharat Abhiyan mission.

Outside his work, he enjoys family life with his wife and two daughters.

---

## 🛠️ Architecture & Tech Stack

- **UI**: 100% Jetpack Compose + Material Design 3.
- **Camera**: CameraX (`camera-camera2`, `camera-lifecycle`, `camera-view`) with front/rear switching.
- **Images**: Coil Compose for asynchronous image loading.
- **Video Rendering & Player**: Android `MediaMuxer` + `MediaCodec` + `VideoView`.
- **Audio Synthesizer**: Procedural ambient stereo synthesis for calm and relaxing soundscapes.
- **Billing**: Google Play Billing Library `8.1.0`.
- **Target SDK**: Android 16 (API 36), Min SDK 24.

---

## 📄 Documentation

- [User & Developer Guide](GUIDE.md)
- [LICENSE](LICENSE)
- [Terms of Service](TOS.md)
- [Privacy Policy](PRIVACY.md)
- [Play Store Listing](PLAYSTORE.md)
- [Release Notes](RELEASE.md)
