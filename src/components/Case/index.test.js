import React from 'react';
import { shallow } from 'enzyme';
import Landing from './';

it('has a section', () => {
  const wrapper = shallow(<Landing />);
  expect(wrapper.is('section')).toBeTruthy();
});
