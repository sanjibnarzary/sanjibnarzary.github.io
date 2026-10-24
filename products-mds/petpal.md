# 🐾 PetPal Assistant: Virtual Screen Pet & Productivity Companion

![PetPal Launcher Icon](app/src/main/res/drawable/pet_icon.png)

> **Package:** `com.narzary.petpal`  
> **Target SDK:** Android 36 (Min SDK 24)  
> **Framework:** Jetpack Compose (Material Design 3)  
> **Billing Library:** Google Play Billing 8.1.0  

**PetPal Assistant** is an interactive, animated virtual pet companion that displays on your screen and floats over other applications. It boosts your daily focus with motivational quotes, rewards completed to-do tasks with digital treats, protects your wellness with eye-strain break reminders, and dances joyfully whenever music is played on your device.

---

## ✨ Key Features

### 🐶 1. 16 Animated Pet Companions
- **Free by Default:** Loyal Golden Pup 🐕 and Calico Kitten 🐱.
- **Unlockable Creatures:** Tiny Squeak Mouse 🐭, Dawn Rooster 🐓, Clucky Hen 🐔, Sky Chirper 🐦, Rainbow Parrot 🦜, Cheeky Hamster 🐹, Chubby Guinea Pig 🐹, Pink Piglet 🐷, Gentle Dairy Cow 🐮, Mighty Lion 🦁, Striped Tiger 🐯, Tall Giraffe 🦒.
- **Mythical Beasts:** Tiny Fireheart Dragon 🐉 and Sparkle Horn Unicorn 🦄.
- **Procedural Animated Poses:**
  - **Walk:** Alternating paw strides and body bounce.
  - **Sit:** Attentive breathing and gentle head tilts.
  - **Sleep:** Curled cozy posture, Zzz particles, and soft snore audio.
  - **Dance:** High-energy wiggle, 360° spin, and floating music notes 🎵.
  - **Eat:** Mouth chomping animation, floating hearts, and munch sound effects.
  - **Happy:** Triumphant victory jumps and celebration stars ✨.

### 🪟 2. Floating Screen Overlay (`SYSTEM_ALERT_WINDOW`)
- **Unobtrusive Screen Companion:** By default, only the pet appears on your screen, leaving other apps clean and readable.
- **Quick Minimize Bubble:** Tap the subtle corner icon on your pet to collapse it into a floating translucent avatar badge pinned to the screen edge. Tap the badge anytime to re-expand.
- **Optional Action Bar:** Toggle the bottom mini toolbar on or off anytime in Settings.
- **Draggable Placement:** Freely drag your buddy to any position across your screen.
- **Music Detection:** Detects background audio playback and automatically triggers a happy dance!

### 🎯 3. Productivity Quests & Digital Treats Economy
- Local offline task manager powered by **Android Room Database**.
- Categorize tasks into *Work*, *Study*, *Wellness*, *Personal*, and *Habit*.
- Completing quests rewards **Digital Treats (🍪)** with triumphant chimes.
- Feed treats to your pet to maintain **Happiness** (0–100%) and **Energy** (0–100%).

### 💬 4. Daily Motivational Quotes & Voice Interaction
- Curated library of 20+ uplifting productivity, mindfulness, and anti-procrastination quotes.
- **Text-to-Speech (TTS):** Have your pet speak quotes aloud in a friendly, cheerful voice.
- **Voice Commands:** Hands-free control via `SpeechRecognizer` — say *"walk"*, *"sit"*, *"sleep"*, *"dance"*, *"feed"*, or *"motivate"*.
- **Synthesized Audio Engine:** Custom procedural chimes, munches, and dance rhythms with volume sliders and on/off controls.

### 👁️ 5. Eye Strain & Ergonomic Break Reminders
- Built-in notification scheduler implementing the **20-20-20 rule** (look 20 feet away for 20 seconds).
- Hydration and posture prompts to prevent burnout during long focus sessions.
- Configurable reminder frequencies: *Off, 20 min, 30 min, 45 min, 60 min*.

### 📊 6. Productivity Dashboard & Analytics
- 7-day productivity bar chart comparing daily completed tasks.
- Streak counter tracking consecutive active focus days.
- Customizable daily quest goals (3, 5, 7, 10 tasks/day) with instant progress tracking.

### 🛍️ 7. Google Play Billing 8.1.0 Store & Wardrobe
- **Single Pet Unlocks:** $4.99 per pet.
- **1-Year All-Access Pass:** $99.00 / year (upgradable in Settings or Shop).
- **Lifetime VIP & Future Updates Pass:** $999.00 (upgradable in Settings or Shop).
- **Wardrobe Customization:**
  - **Hats:** Top Hat 🎩, Party Hat 🥳, Royal Crown 👑, Wizard Hat 🧙, Sport Cap 🧢.
  - **Glasses:** Cool Shades 🕶️, Study Specs 👓, Heart Shades 💖, Monocle 🧐.
  - **Collars:** Classic Red 🔴, Golden Bell 🔔, Dapper Bowtie 🎀, Rainbow Bandana 🌈.
  - **Pet Avatar Size Slider:** Scale pet dimensions between 70% and 160% in Settings.
- **Sandbox Test Mode:** Built-in instant simulator for evaluating purchases without a live Play Console merchant account.

---

## 🛠️ Architecture & Tech Stack

- **UI Framework:** Android Jetpack Compose with Material Design 3 (M3).
- **Architecture Pattern:** MVVM (Model-View-ViewModel) with Unidirectional Data Flow (`StateFlow` & `SharedFlow`).
- **Data Persistence:**
  - **Room Database:** Local SQLite storage for tasks and daily statistics.
  - **Jetpack DataStore Preferences:** User settings, active pet, accessories, sound volume, scale, and purchase flags.
- **Audio & Speech:**
  - Android `AudioTrack` procedural frequency synthesis.
  - Android `TextToSpeech` (TTS) and `SpeechRecognizer`.
- **System Overlay:** Android `Service` + `WindowManager` hosting a ComposeView tree with custom `LifecycleOwner`.
- **Billing:** `com.android.billingclient:billing-ktx:8.1.0`.

---

## 🚀 Building & Running

### Requirements
- Android SDK 24+ (Android 7.0 Nougat or newer).
- JDK 11+.
- Gradle 8.x+ with Android Gradle Plugin 9.1.1.

### Build Commands
```bash
# Compile debug APK
gradle :app:assembleDebug

# Run Unit and Robolectric Tests
gradle :app:testDebugUnitTest
```

---

## 📄 License & Legal
- **License:** Apache License 2.0 (see `LICENSE` file).
- **Privacy Policy:** See `PRIVACY.md`.
- **Terms of Service:** See `TOS.md`.
- **Play Store Listing Info:** See `PLAYSTORE_INFO.md`.
