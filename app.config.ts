import 'dotenv/config';

export default {
  expo: {
    name: "rn-geo-plant",
    slug: "rn-geo-plant",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      // bundleIdentifier: "com.lukeharrisondev.rngeoplant",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.lukeharrisondev.rngeoplant",
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "c706fc66-0cff-4cca-8978-c22f428ee43f",
      },
    },
    plugins: [
      "expo-font", 
      // [
      //   "expo-location", { 
      //     locationWhenInUsePermission: `Allow Geo Plant to use your location when using the app.`
      //   }
      // ],
    ],
  },
} as const