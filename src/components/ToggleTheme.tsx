import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  HStack,
  useColorMode,
  IconButton,
  useTheme,
  useColorModeValue,
} from 'native-base';
import { ActivityIndicator } from 'react-native-paper';

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [colorMode]);

  const color = useColorModeValue(colors.lightText, colors.darkText);

  return (
    <HStack space={2} alignItems='center'>
      <IconButton
        onPress={() => {
          setLoading(true);
          toggleColorMode();
        }}
        borderRadius='full'
        variant='solid'
        _pressed={{ backgroundColor: loading ? 'primary.500' : undefined }}
        _icon={{
          size: 'sm',
          as: FontAwesome5,
          name: loading ? undefined : colorMode === 'light' ? 'sun' : 'moon',
        }}>
        {loading ? <ActivityIndicator size='small' color={color} /> : undefined}
      </IconButton>
    </HStack>
  );
};

export default ToggleTheme;
