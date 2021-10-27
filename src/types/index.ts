import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface City {
  id: number;
  slug: string;
  city_slug: string;
  display: string;
  ascii_display: string;
  city_name: string;
  city_ascii_name: string;
  state: string;
  country: string;
  lat: string;
  long: string;
  result_type: string;
  popularity: string;
}

export interface ForecastTemp {
  min: number;
  max: number;
}

export interface ForecastWeather {
  description: string;
  main: string;
}

export interface Forecast {
  humidity: number;
  temp: ForecastTemp;
  weather: ForecastWeather[];
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  Settings: undefined;
  Cities: undefined;
};

export type SettingsScreenNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

export type CitiesScreenNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'Cities'
>;
