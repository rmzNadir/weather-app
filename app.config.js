import 'dotenv/config';

export default {
  expo: {
    entryPoint: './src/App.tsx',
    name: 'weather-app',
    slug: 'weather-app',
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
