import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Footbar from '../index';

test('Footbar will render content regardless of anything', t => {
  const wrapper = shallow(<Footbar />);
  t.not(wrapper.type(), null)
});