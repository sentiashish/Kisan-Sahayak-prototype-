# Kisan Sahayak

Kisan Sahayak is a mobile-first farm monitoring prototype with farmer, advisory, extension officer, registration, and sensor health screens.

## Run The Web Prototype

```powershell
npm install
npm run dev
```

Open `http://localhost:8443/` in a browser.

## Build The Android App

```powershell
npm run android:sync
cd android
.\gradlew assembleDebug
```

The debug APK is created at `android/app/build/outputs/apk/debug/app-debug.apk`.

## Release Files

- [Download the debug APK](release/Kisan-Sahayak-debug.apk)
- [View the mobile screenshot](release/mobile-home.png)
- [Release notes](release/README.md)

## Project Structure

- `src/`: React application screens and styles
- `public/assets/`: application icons and visual assets
- `android/`: Capacitor Android project
- `release/`: APK and preview assets