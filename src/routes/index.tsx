import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorMode, useTheme } from 'native-base';
import { StatusBar, Platform } from 'react-native';
import Cities from '../screens/Cities';
import Settings from '../screens/Settings';
import { RootStackParamList } from '../types';

const Root = createNativeStackNavigator<RootStackParamList>();

const { Navigator, Screen } = Root;

const Routes: React.FC = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(
        colorMode === 'dark' ? 'light-content' : 'dark-content',
      );
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(
          colorMode === 'dark' ? colors.muted[900] : colors.muted[50],
        );
    }, [colorMode, colors.muted]),
  );

  return (
    <Navigator
      initialRouteName='Cities'
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name='Cities' component={Cities} />
      <Screen name='Settings' component={Settings} />
    </Navigator>
  );
};

export default Routes;
