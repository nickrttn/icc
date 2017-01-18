import React from 'react';
import { shallow } from 'enzyme';
import WorldMap from './';

it('has a section', () => {
  const wrapper = shallow(<WorldMap />);
  expect(wrapper.is('section')).toBeTruthy();
});
