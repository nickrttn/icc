import React from 'react';
import { shallow } from 'enzyme';
import Introduction from './';

it('has an article', () => {
  const wrapper = shallow(<Introduction />);
  expect(wrapper.is('article')).toBeTruthy();
});
