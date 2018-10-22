import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../index';
import BarItem from '../BarItem';

test('Sidebar renders without props', t => {
  const wrapper = shallow(<Sidebar />);
  t.pass()
});

test('Sidebar renders TM segments without authentication', t => {
    const wrapper = shallow(<Sidebar
        appName="tm"
    />);
    t.is(wrapper.find(BarItem).length, 2);
});

test('Sidebar renders NS segments without authentication', t => {
    const wrapper = shallow(<Sidebar
        appName="ns"
    />);
    t.is(wrapper.find(BarItem).length, 2);
});