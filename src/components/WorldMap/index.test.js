import React from 'react';
import { shallow } from 'enzyme';
import WorldMap from './';

it('Test example', () => {
  const wrapper = shallow(<WorldMap />);
  expect(wrapper.is('section')).toBeTruthy();
});
