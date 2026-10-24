# CineCam AR Pro — Cinema Camera & Augmented Reality Studio

CineCam AR Pro is a broadcast-grade cinematography camera and augmented reality studio application for Android, built with **Kotlin**, **Jetpack Compose**, **CameraX**, and **Google ML Kit**.

---

## Key Capabilities & Architectural Features

### 1. Real-Time CameraX Focus Peaking Analyzer
- **Custom `FocusPeakingAnalyzer`**: Implements `androidx.camera.core.ImageAnalysis.Analyzer` running at 60fps.
- **Y-Plane Edge Detection**: Computes high-pass gradient magnitudes ($|\Delta Y_x| + |\Delta Y_y|$) across the luminance plane without heavy GPU or external image libraries.
- **Green Edge Highlighting**: Detects sharp, in-focus focal planes and renders them in high-visibility neon green (`#00E676`) directly on the camera preview viewfinder.
- **Dynamic Sensitivity Slider**: Allows users to fine-tune edge threshold sensitivity from 10% to 100% or select alternate peaking colors (Neon Green, Vivid Red, Electric Blue, White, Yellow).

### 2. Viewfinder Transparent HUD Overlay Panels
- **Translucent HUD Design**: Every open control panel (Manual Exposure, Tracking Settings, AR Studio, Filters & VFX, Resolution Picker, Watermark Settings, Audio Settings, Gallery) is rendered as a semi-transparent HUD (`Color(0xD9090E17)`) floating directly over the active camera view area.
- **Small Close Button & Auto-Dismiss**: Each HUD includes a dedicated top-right close icon (`Icons.Default.Close`) and supports auto-dismissal when tapping outside the panel, ensuring the viewfinder feed is never obscured.

### 3. Pro Manual Exposure Control Overlay
- **ISO Sensitivity Slider**: Continuous and stepped slider from ISO 50 to 6400 with a Cine digital readout (`ISO 400`, `ISO 800`, etc.) and quick 1-tap chip presets.
- **Shutter Speed Slider**: Cinema shutter speed slider spanning $1/8000s$ to $1/2s$ ($1/8000$, $1/4000$, $1/2000$, $1/1000$, $1/500$, $1/250$, $1/120$, $1/60$, $1/48$, $1/30$, $1/15$, $1/8$, $1/4$, $1/2$), complete with instant digital readouts.
- **EV Exposure Compensation Slider**: Floating exposure bias from $-3.0\text{ EV}$ to $+3.0\text{ EV}$ in $0.1\text{ EV}$ increments.
- **Kelvin White Balance Slider**: Custom temperature slider from $2500\text{K}$ to $9500\text{K}$ alongside cinema presets (Auto, Daylight 5500K, Tungsten 3200K, Fluorescent 4000K, Cloudy 6500K, Shade 7500K).
- **Manual Focus Distance Slider**: Micro macro ($0.05\text{m}$) to infinity ($\infty$).

### 4. On-Camera Wireframe Gesture HUD
- **Circular Wireframe Reticle**: Touching the viewfinder screen summons an intuitive circular wireframe dial showing active zoom level ($1.0\times$ to $10.0\times$) and EV brightness bias.
- **Gesture Dragging & Dial Control**: Drag gestures seamlessly adjust zoom and exposure.
- **Auto-Hide on Inactivity**: Automatically fades out after 3.5 seconds of user inactivity to keep the preview uncluttered.

### 5. 33-Keypoint ML Kit Tracking & Full Virtual Wardrobe
- **Google ML Kit Pose Detection (33 Landmarks)**: Full skeletal mapping tracking head, shoulders, elbows, wrists, hips, knees, ankles, heels, and toes.
- **Front-Camera Selfie by Default**: Automatically detects faces and aligns augmented items.
- **Dynamic Distance Scaling (`distScale`)**: All accessories and garments scale naturally based on subject proximity to the lens:
  - **Birds on Shoulder**: Scarlet Macaw, Blue Budgie, Cyber Falcon, and Phoenix with interactive feeding, happiness meter, and chirping.
  - **Goggles on Eyes**: Cyberpunk Neon Visor, Steampunk Brass Aviators.
  - **Earrings on Ears**: Gold Jhumkas, Diamond Studs, Neon Rings.
  - **Necklace on Neck**: Gold Temple Choker, Diamond Pendant, Royal Pearl String.
  - **Hats on Head**: Emerald Royal Crown, Fedoras, Cyber Helmets.
  - **Hairstyles on Hair**: Royal Crown Braids, Cyberpunk Neon Spikes.
  - **Shirts & Tops on Torso**: Banarasi Silk Shaaris, Casual Cotton T-Shirts, Formal Slim-Fit Shirts.
  - **Pants & Lower Wear on Legs**: Blue Denim Jeans, Formal Black Trousers, Cargo Pants.
  - **Footwear on Feet**: Leather Oxford Shoes, Sport Sneakers, Summer Strappy Sandals, Home Comfort Slippers.
- **Wireframe Skeleton Mode**: Wireframe bones togglable in settings and top bar.

### 6. Audio Feedback System
- **Disabled by Default**: Camera shutter clicks, record beeps, and AR creature audio are muted by default for silent operation.
- **Settings Sheet**: Toggle audio feedback, adjust volume via smooth slider, and audition sound effects.

### 7. Media Composite Export & System Gallery Integration
- **Direct MediaStore Registration**: Photos (JPEG/RAW) and Videos (MP4) are composited with all active AR layers, watermarks, and orientation metadata and scanned via `MediaScannerConnection` so they immediately appear in Google Photos / Gallery.
