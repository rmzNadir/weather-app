import React from 'react';
import { useTheme, Center } from 'native-base';
import { ActivityIndicator } from 'react-native';

const Loading = () => {
  const { colors } = useTheme();

  return (
    <Center flex={1} _dark={{ bg: 'muted.900' }} _light={{ bg: 'muted.50' }}>
      <ActivityIndicator size='large' color={colors.primary[500]} />
    </Center>
  );
};

export default Loading;
