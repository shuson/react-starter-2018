import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import BarItem from '../BarItem';

test('BarItem renders without props', t => {
  const wrapper = shallow(<BarItem />);
  t.pass()
});