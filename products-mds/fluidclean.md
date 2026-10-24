# FluidClean 🚀
**Modern Device Cleaner, Duplicate Manager & Liquid Battery Health Monitor for Android**

[![Platform](https://img.shields.io/badge/Platform-Android%208.0%2B-brightgreen.svg)](https://developer.android.com)
[![Language](https://img.shields.io/badge/Kotlin-2.0.21-blue.svg)](https://kotlinlang.org)
[![UI](https://img.shields.io/badge/Jetpack%20Compose-M3%20Liquid-purple.svg)](https://developer.android.com/jetpack/compose)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

FluidClean is a fluid, modern Android system performance utility engineered with Jetpack Compose and Material Design 3. It combines real physical device storage cleaning, duplicate photo and document detection, interactive liquid wave gauges, hardware battery health monitoring, and a physics-animated rocket booster overlay.

---

## 🌟 Key Features

### 1. One-Tap Device Cleanup & Storage Reclamation
- **Physical Disk Operations**: Scans and deletes real application caches, residual temporary files (`.tmp`, `.log`, `.bak`, `.crdownload`), empty directories, and obsolete installer packages.
- **Accurate Telemetry**: Uses Android `StatFs` and `ActivityManager` to report real physical storage and RAM before and after optimization.
- **Cache Clearing Animation**: Smooth visual progress with real-time freed counter and immediate storage gauge updates.

### 2. Duplicate Photo & Document Detection
- **Real File Scanning**: Scans internal and public storage directories (DCIM, Pictures, Documents, Downloads).
- **Exact Matching**: Groups redundant files by size and binary structure.
- **Original File Preservation**: Protects primary original files while selecting redundant copies for safe deletion.
- **Category Tabs**: Filter easily across Duplicate Photos, Duplicate Documents, App Cache, and All Items.

### 3. Liquid Battery Health Monitoring Dashboard
- **Clean Liquid Card**: Glassmorphic card layout featuring a fluid wave animated capsule.
- **Live Charge Percentage**: Hardware telemetry via Android `BatteryManager`.
- **Thermal Sensor Monitoring**: Battery temperature in both Celsius (°C) and Fahrenheit (°F) with thermal state alerts.
- **Remaining Usage Estimation**: Intelligent calculation of battery runtime until drain or charging time until full.

### 4. Interactive Rocket Booster Overlay
- **Slow-to-Fast Physics Trajectory**: Rocket launch animation starts from middle bottom, moves slowly to the center of the device, flares up booster flames, and accelerates at high speed to the top.
- **Improvement Metric Display**: Pops a glassmorphic performance card showing the percentage improvement and megabytes freed.

### 5. Always-On Floating Quick Clean Icon
- **System Overlay & In-App Bubble**: Draggable glowing bubble with rocket icon for quick cleaning over any application.
- **One-Tap Execution**: Instantly purges cached clutter with haptic feedback.

### 6. Transparent Pro Upgrades
- **Simple, Direct Pricing**:
  - $1.00 / month
  - $9.00 / year (Best Value)
  - $99.00 lifetime (One-time payment)
- **Automatic Regional Formatting**: Automatically displays equivalent INR pricing (₹89/month, ₹799/year, ₹8,499 lifetime) for users in India without showing country labels.
- **Google Play Billing 8.1.0**: Compliant in-app purchase integration.

### 7. Multilingual Support
- Supports **all 22 official scheduled languages of India** (with Bodo featured directly after Hindi) plus major international languages.

---

## 👨‍💻 About the Developer

**Dr. Sanjib Narzary** holds a Doctor of Philosophy degree from the Indian Institute of Technology Guwahati. He earned a Bachelor of Technology in Computer Science and Engineering from the National Institute of Technology Silchar and a Master of Technology in Computer Science and Information Security from the National Institute of Technology Calicut.

### Technology and Projects
Passionate about technology, Sanjib enjoys building small, practical projects in his spare time. He created **Echo Search**, a personal AI search engine, and **Alayaran**, a personalized news reader powered by RSS feeds.

His mobile apps include:
- **PetPal**: Virtual assistant for pet lovers
- **GPSCameraMap**: GPS-tagged images and videos
- **FluidClean**: Clearing junk and temporary files
- **AnyDocViewer**: Viewing documents, source code, and PDFs
- **Kidz Learn**: Learning app for children in India with support for 22 languages
- **QuoteCraft**: Sharing quotes as images or videos
- **PDF Studio**: Managing PDF pages and files
- **Video Converter**: Format conversion and compression
- **QR and Barcode Scanner & Generator**

### Community and Service
Originally from a remote village in Assam’s Kokrajhar district, Sanjib believes that where you come from should never limit what you dream of or create. He is proud of his community and the Bodo language. He has contributed to and translated open-source software for **LibreOffice**, **Fedora**, **GNOME**, and **Mozilla**. His open-source projects are available on GitHub.

He serves on the Board of Governors at CIT Kokrajhar and has served as Head of its Department of Computer Science and Engineering. He is a member of the Bodo Sahitya Sabha, the Linguistic Society of India, the Robotics Society of India, the Association for Computing Machinery, and IEEE. He is also Co-Principal Investigator of the MeitY, Government of India-funded “Multilevel Capacity Building and Skilling in Industry-Aligned Emerging Technologies” project, and has supported Subunthi Sibinai, a free computer-training initiative under the Unnat Bharat Abhiyan mission.

Outside his work, he enjoys family life with his wife and two daughters.

---

## 🛡️ Privacy & Security

FluidClean strictly adheres to a **Zero-Cloud-Harvesting** architecture:
- All file scanning, checksum comparisons, duplicate grouping, and battery telemetry calculations run strictly on the user's physical device.
- No personal photos, documents, filenames, or telemetry data are ever uploaded to remote servers.
- Optimization records and session histories are kept in a local encrypted Room SQLite database on device.

---

## 📄 License
This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
