import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  Icon,
  VStack,
  Text,
  useColorModeValue,
  useTheme,
  Center,
} from 'native-base';
import { ActivityIndicator, List } from 'react-native-paper';
import { Forecast as IForecast } from '../types';
import Forecast from './Forecast';

interface ForecastsProps {
  expanded: boolean;
  toggleExpanded(): void;
  forecasts: IForecast[];
  loading: boolean;
}

const Forecasts = ({
  expanded,
  toggleExpanded,
  forecasts,
  loading,
}: ForecastsProps) => {
  const { colors, sizes } = useTheme();

  return (
    <List.Accordion
      title={<Text bold>Pronósticos</Text>}
      right={({ isExpanded }) => (
        <Icon
          as={AntDesign}
          name={isExpanded ? 'caretup' : 'caretdown'}
          size='xs'
          color='primary.500'
        />
      )}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        paddingHorizontal: sizes['2'],
        backgroundColor: useColorModeValue(colors.muted[50], colors.muted[700]),
      }}
      expanded={expanded}
      onPress={toggleExpanded}>
      {loading ? (
        <Center flex={1} p='2' pb='6'>
          <ActivityIndicator size='small' color={colors.primary[500]} />
        </Center>
      ) : (
        <VStack space='2' px='2' pb='2'>
          {forecasts.map((forecast, i) => (
            <Forecast key={i} forecast={forecast} day={i} />
          ))}
        </VStack>
      )}
    </List.Accordion>
  );
};

export default Forecasts;
