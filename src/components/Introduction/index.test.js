import React from 'react';
import { shallow } from 'enzyme';
import Introduction from './';

it('Test example', () => {
  const wrapper = shallow(<Introduction />);
  expect(wrapper.is('section')).toBeTruthy();
});
