# FieldCam GPS: Map Stamp Camera

FieldCam GPS is a high-precision Android application designed for surveyors, field engineers, inspectors, environmental researchers, and outdoor professionals who need accurate GPS map stamps, compass headings, altitude, timestamps, and custom watermarks imprinted onto photos and videos.

---

## 🌟 Key Features

### 📍 Real-Time Location & MiniMap HUD
- Real-time GPS coordinate stamping (Latitude / Longitude down to 6 decimal precision).
- Altitude in meters, real-time speed (km/h), and magnetic/true compass bearing.
- Reverse-geocoded physical address and timestamp.
- Adaptive landscape mode: MiniMap card & telemetry neatly docked on the left, custom survey note pinned to the right edge.

### 🔒 Copyright & Custom Watermark
- Built-in copyright watermark notice (e.g., `© FieldCam GPS | Protected Photo`).
- Four corner positions: Bottom Right, Bottom Left, Top Right, Top Left.
- Adjustable watermark opacity and custom text.
- **Watermark Unlock**: Locked by default in the free tier; unlocked via voluntary donation (min ₹10) or active FieldCam Pro Yearly subscription.

### 💳 Pro Subscription ($9.99 / Year - Google Play Merchant)
- Annual subscription tier offering complete access to all premium features.
- Auto-renewing yearly at **$9.99 USD / year** (~$0.83/month).
- Billed directly and securely through Google Play In-App Billing.
- In-app subscription status with live expiration date display and "Manage on Google Play" integration.
- Automatic feature lock if subscription expires and is not renewed.

### ❤️ Donation Support (UPI & Razorpay)
- Directly support independent, ad-free development without third-party trackers.
- UPI ID: `8822465418@sbi` (FieldCam Support).
- On-screen UPI QR Code scan card (compatible with GPay, PhonePe, Paytm, BHIM, and banking apps).
- Preset amounts (₹10, ₹50, ₹100, ₹250, ₹500) and custom amount entry.
- **Heartfelt Thank You Modal Window**: Upon successful donation, a warm appreciation modal connects with the user, explains the real-world impact of their support, and unlocks the locked Copyright watermark and custom watermark text.

---

## 🏗️ Architecture & Technology Stack
- **Framework:** Jetpack Compose (100% Kotlin)
- **Design System:** Material Design 3 (M3)
- **Camera:** CameraX 1.5.0
- **Location:** Google Play Services Location 21.3.0
- **Billing:** Google Play Billing Merchant Integration
- **Testing:** JUnit 4 & Robolectric 4.16.1

---

## 🚀 Building & Testing
Run local unit and Robolectric tests:
```bash
gradle :app:testDebugUnitTest
```

Compile debug APK:
```bash
gradle assembleDebug
```
