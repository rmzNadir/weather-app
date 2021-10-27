import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  HStack,
  useColorMode,
  IconButton,
  useTheme,
  useColorModeValue,
  ColorMode,
} from 'native-base';
import { ActivityIndicator } from 'react-native-paper';

interface ToggleButtonProps {
  toggleColorMode(): void;
  loading: boolean;
  setLoading(loading: boolean): void;
  colorMode: ColorMode;
}

export const ToggleButton = ({
  toggleColorMode,
  loading,
  setLoading,
  colorMode,
}: ToggleButtonProps) => {
  const { colors } = useTheme();
  const color = useColorModeValue(colors.lightText, colors.darkText);

  return (
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
  );
};

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [colorMode]);

  return (
    <HStack space={2} alignItems='center'>
      <ToggleButton
        toggleColorMode={toggleColorMode}
        loading={loading}
        setLoading={setLoading}
        colorMode={colorMode}
      />
    </HStack>
  );
};

export default ToggleTheme;
