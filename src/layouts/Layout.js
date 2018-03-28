import React from 'react';
import { Link } from 'react-router-dom';

import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <Link to="/">
        <h1 className='text-center'>
          react-starter-2018
        </h1>
      </Link>
      {children}
    </div>
  );
};

export default Layout;
