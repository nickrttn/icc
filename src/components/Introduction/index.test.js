import React from 'react';
import { shallow } from 'enzyme';
import Introduction from './';

it('has a section', () => {
  const wrapper = shallow(<Introduction />);
  expect(wrapper.is('section')).toBeTruthy();
});
