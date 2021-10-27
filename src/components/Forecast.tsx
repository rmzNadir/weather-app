import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import moment from 'moment';
import { Box, HStack, Icon, Text } from 'native-base';
import { toFixedNoRounding } from '../app/toFixedNoRouding';
import { Forecast as IForecast } from '../types';

const WEATHER_ICONS: Record<string, Record<string, string>> = {
  Thunderstorm: { name: 'thunderstorm', as: 'Ionicons', color: 'blueGray.400' },
  Drizzle: { name: 'cloud-drizzle', as: 'Feather ', color: 'blueGray.400' },
  Rain: { name: 'cloud-rain', as: 'Feather', color: 'blueGray.400' },
  Snow: { name: 'snow', as: 'Ionicons', color: 'cyan.300' },
  Clear: { name: 'sun', as: 'Feather', color: 'amber.400' },
  Clouds: { name: 'cloud', as: 'Feather', color: 'blueGray.400' },
};

const getIconLibrary = (as: string) => {
  switch (as) {
    case 'Feather':
      return Feather;
    default:
      return Ionicons;
  }
};
interface ForecastProps {
  forecast: IForecast;
  day: number;
}
const Forecast = ({ forecast, day }: ForecastProps) => {
  const today = moment();

  const { humidity, temp, weather } = forecast;

  return (
    <Box px='2' pb='2' w='100%'>
      <HStack space='2' justifyContent='space-between'>
        <Text minWidth='15%' testID='day'>
          {day < 1 ? 'Hoy' : today.add(day, 'days').format('DD/MMM')}
        </Text>
        <HStack alignItems='center' minWidth='15%'>
          <Icon as={Ionicons} name='water' size='xs' color='cyan.500' />
          <Text testID='humidity'>{humidity}%</Text>
        </HStack>

        <Icon
          as={getIconLibrary(WEATHER_ICONS[weather[0].main].as)}
          name={WEATHER_ICONS[weather[0].main].name}
          size='sm'
          color={WEATHER_ICONS[weather[0].main].color}
        />

        <Text bold minWidth='20%' textAlign='right' testID='min-max'>
          {toFixedNoRounding(temp.max, 0)}° / {toFixedNoRounding(temp.min, 0)}°
        </Text>
      </HStack>
    </Box>
  );
};

export default Forecast;
