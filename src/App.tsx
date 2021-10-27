import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import moment from 'moment';
import { NativeBaseProvider, extendTheme, Box } from 'native-base';
import { colorModeManager } from './app/colorModeManager';
import { theme } from './app/theme';
import Routes from './routes';
import 'moment/locale/es';
moment.locale('es');

export const extendedTheme = extendTheme(theme);

const config = {
  dependencies: {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider
        config={config}
        theme={extendedTheme}
        colorModeManager={colorModeManager}>
        <Box
          safeArea
          flex={1}
          _dark={{ bg: 'muted.900' }}
          _light={{ bg: 'muted.50' }}>
          <Routes />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
