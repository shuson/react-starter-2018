import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from '../index';

const Dropdown_SAMPLE_DROPDOWNVALUE = {
  "id": "all",
  "name": "All"
};
const Dropdown_SAMPLE_DROPDOWNOPTIONS = [
  {
    "id": "SG-CB",
    "name": "Corporate Banking"
  },
  {
    "id": "SG-CM",
    "name": "Corporate Mass"
  },
  {
    "id": "SG-CMM",
    "name": "Corporate Mass 1 - IG"
  },
  {
    "id": "SG-FIG",
    "name": "SG-FIG 1"
  },
  {
    "id": "SG-GLC",
    "name": "Government-Linked Company"
  },
  {
    "id": "SG-GMIMKAC",
    "name": "SG-GMIMKAC"
  },
  {
    "id": "SG-MNC",
    "name": "Multi-National Corporation"
  },
  {
    "id": "SG-PB",
    "name": "Private Banking"
  },
  {
    "id": "SG-PFS",
    "name": "PFS Mass"
  },
  {
    "id": "SG-PV",
    "name": "Privilege 1"
  },
  {
    "id": "SG-PVR",
    "name": "Privilege 2"
  },
  {
    "id": "SG-STF",
    "name": "PFS Mass"
  },
  {
    "id": "SG-TRY",
    "name": "SG-TRY"
  },
  {
    "id": "SG-WMB",
    "name": "Wealth Banking"
  }
];

test('Dropdown renders properly without required props', t => {
  const wrapper = shallow(<Dropdown />);
  t.pass();
});

test('Dropdown renders content with required props', t => {
  const wrapper = shallow(<Dropdown
    dropdownValue={Dropdown_SAMPLE_DROPDOWNVALUE}
    dropdownOptions={Dropdown_SAMPLE_DROPDOWNOPTIONS}
  />);
  t.not(wrapper.type(), null);
});

// Discontinued testing because of existing HOC used from "react-onclickoutside" package