import 'dotenv/config';

export default {
  expo: {
    entryPoint: './src/App.tsx',
    name: 'Weather App',
    slug: 'weather-app',
    privacy: 'public',
    description:
      "Mobile app that helps you find next week's weather forecasts for different cities.",
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/icon.png',
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#171717',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/adaptive-icon.png',
        backgroundColor: '#171717',
      },
    },
    web: {
      favicon: './src/assets/favicon.png',
    },
    primaryColor: '#31b462',
    backgroundColor: '#171717',
    androidNavigationBar: {
      barStyle: 'light-content',
      backgroundColor: '#171717',
    },
    extra: {
      OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
    },
  },
};
