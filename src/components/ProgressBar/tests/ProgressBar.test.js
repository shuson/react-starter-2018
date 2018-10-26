import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from '../index';

const ProgressBar_SAMPLE_VALUE = '50%';

test('ProgressBar renders null when no value is passed', t => {
  const wrapper = shallow(<ProgressBar />);
  t.is(wrapper.type(), null);
});

test('ProgressBar renders content when value is passed', t => {
  const wrapper = shallow(<ProgressBar value={ProgressBar_SAMPLE_VALUE} />);
  t.not(wrapper.type(), null);
});