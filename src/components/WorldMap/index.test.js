import React from 'react';
import { shallow } from 'enzyme';
import App from './';

it('has a section', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.is('section')).toBeTruthy();
});
