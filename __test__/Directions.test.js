import React from 'react';
import Directions from '../src/components/Directions';
import renderer from 'react-test-renderer';

test('Checking Directions Component', () => {
  // console.log('Print something for the people');
  const snap = renderer.create(
    <Directions/>
  );
});