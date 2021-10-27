import React, { memo, useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import Constants from 'expo-constants';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  VStack,
  Text,
} from 'native-base';
import { City, Forecast } from '../types';
import Forecasts from './Forecasts';

interface CitiesListItemProps {
  item: City;
  index: number;
}

const { OPEN_WEATHER_API_KEY } = Constants.manifest!.extra as {
  [k: string]: string;
};

const CitiesListItem = memo(({ item, index }: CitiesListItemProps) => {
  const [forecasts, setForecasts] = useState<Forecast[]>([]);
  const [loadingForecasts, setLoadingForecasts] = useState(false);
  const [showForecasts, setShowForecasts] = useState(false);
  const { display, state, city_name, popularity, lat, long } = item;

  const isHot = parseFloat(popularity) >= 0.22;

  const toggleShowForecasts = () => {
    setShowForecasts((s) => !s);
  };

  useEffect(() => {
    if (showForecasts && !forecasts.length) {
      const getForecast = async () => {
        try {
          setLoadingForecasts(true);
          const {
            data: { daily },
          } = await axios.get<{ daily: Forecast[] }>(
            `https://api.openweathermap.org/data/2.5/onecall?units=metric&lang=es&lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${OPEN_WEATHER_API_KEY}`,
          );
          setForecasts(daily);
        } catch (e) {
          if (axios.isAxiosError(e)) {
            console.error(e.response);
          }
        } finally {
          setLoadingForecasts(false);
        }
      };
      getForecast();
    }
  }, [showForecasts, forecasts.length, lat, long]);

  return (
    <Box
      mx='4'
      mb='4'
      rounded='lg'
      _dark={{ bg: 'muted.700', borderColor: 'muted.800' }}
      _light={{ bg: 'muted.50', borderColor: 'muted.200' }}
      overflow='hidden'
      borderWidth='1'>
      <VStack space='2' p='4'>
        <Flex
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'>
          <Heading size='md'>{display}</Heading>
          <Spacer />
          {isHot && (
            <Icon
              as={FontAwesome5}
              name='fire'
              size='sm'
              color='orange.400'
              textAlign='right'
            />
          )}
        </Flex>

        <Flex
          flexDirection='row'
          justifyContent='space-between'
          alignItems='flex-end'>
          <VStack space='1'>
            <HStack space='2' alignItems='center'>
              <Icon
                as={FontAwesome5}
                name='map-marked-alt'
                size='xs'
                color='primary.500'
              />
              <Text
                _dark={{ color: 'muted.200' }}
                _light={{ color: 'muted.600' }}>
                {state}
              </Text>
            </HStack>
            <HStack space='2' alignItems='center'>
              <Icon
                as={FontAwesome5}
                name='city'
                size='xs'
                color='primary.500'
              />
              <Text
                _dark={{ color: 'muted.200' }}
                _light={{ color: 'muted.600' }}>
                {city_name}
              </Text>
            </HStack>
          </VStack>
          <Heading
            size='lg'
            _dark={{ color: 'muted.200' }}
            _light={{ color: 'muted.600' }}>
            #{index + 1}
          </Heading>
        </Flex>
      </VStack>
      <Box borderTopWidth='1' borderTopColor='primary.500'>
        <Forecasts
          expanded={showForecasts}
          toggleExpanded={toggleShowForecasts}
          forecasts={forecasts}
          loading={loadingForecasts}
        />
      </Box>
    </Box>
  );
});

export default CitiesListItem;
