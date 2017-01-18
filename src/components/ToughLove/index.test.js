import React from 'react';
import { shallow } from 'enzyme';
import ToughLove from './';

it('Test example', () => {
  const wrapper = shallow(<ToughLove />);
  expect(wrapper.is('section')).toBeTruthy();
});
