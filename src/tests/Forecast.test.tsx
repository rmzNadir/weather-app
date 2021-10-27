/* eslint-disable @typescript-eslint/no-empty-function */
jest.useFakeTimers();
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { parse } from 'react-native-svg';
import renderer from 'react-test-renderer';
import { toFixedNoRounding } from '../app/toFixedNoRouding';
import Forecast from '../components/Forecast';

const INSET = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const FORECAST = {
  humidity: 54,
  weather: [
    {
      description: 'lluvia moderada',
      icon: '10d',
      id: 501,
      main: 'Rain',
    },
  ],
  temp: {
    day: 20.4,
    eve: 16.88,
    max: 20.4,
    min: 14.68,
    morn: 15.2,
    night: 14.68,
  },
};

// NativeBase's Icon component has a bug when used with jest but doesn't affect test functionality

describe('<Forecast/>', () => {
  let instance: renderer.ReactTestInstance;
  beforeAll(() => {
    instance = renderer.create(
      <NativeBaseProvider initialWindowMetrics={INSET}>
        <Forecast day={0} forecast={FORECAST} />
      </NativeBaseProvider>,
    ).root;
  });

  it('Correctly displays day', () => {
    const item = instance.findByProps({ testID: 'day' });

    expect(item.props.children).toEqual('Hoy');
  });

  it('Correctly displays humidity', () => {
    const item = instance.findByProps({ testID: 'humidity' });

    expect(item.props.children.join('')).toEqual(`${FORECAST.humidity}%`);
  });

  it('Correctly displays min temp', () => {
    const item = instance.findByProps({ testID: 'min-max' });

    expect(parseInt(item.props.children[2])).toEqual(
      toFixedNoRounding(FORECAST.temp.min, 0),
    );
  });

  it('Correctly displays max temp', () => {
    const item = instance.findByProps({ testID: 'min-max' });

    expect(parseInt(item.props.children[0])).toEqual(
      toFixedNoRounding(FORECAST.temp.max, 0),
    );
  });

  it('Correctly displays formatted min/max temp', () => {
    const item = instance.findByProps({ testID: 'min-max' });

    expect(item.props.children.join('')).toEqual(
      `${toFixedNoRounding(FORECAST.temp.max, 0)}° / ${toFixedNoRounding(
        FORECAST.temp.min,
        0,
      )}°`,
    );
  });
});
