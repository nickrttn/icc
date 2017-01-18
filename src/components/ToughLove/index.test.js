import React from 'react';
import { shallow } from 'enzyme';
import ToughLove from './';

it('has an article', () => {
  const wrapper = shallow(<ToughLove />);
  expect(wrapper.is('article')).toBeTruthy();
});
