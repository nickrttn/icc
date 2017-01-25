import React from 'react';
import { shallow } from 'enzyme';
import Case from './';

it('has an article', () => {
  const wrapper = shallow(<Case case='afghanistan' />);
  expect(wrapper.is('article')).toBeTruthy();
});
