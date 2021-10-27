jest.useFakeTimers();
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import renderer from 'react-test-renderer';
import Loading from '../components/Loading';

const INSET = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe('<Loading/>', () => {
  it('has 1 ActivityIndicator', () => {
    const tree = renderer
      .create(
        <NativeBaseProvider initialWindowMetrics={INSET}>
          <Loading />
        </NativeBaseProvider>,
      )
      .toJSON();

    expect(tree.children[0].children).toHaveLength(1);
    expect(tree.children[0].children[0].type).toEqual('ActivityIndicator');
  });
});
