import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const DynamicPage = () => {
  let today = "abc";
  today += "DEF";
  return (
    <Layout>
      <h2>Dynamic Page</h2>
      <p>This page was loaded asynchronously!!!</p>
      <Link to="/">back</Link>
    </Layout>
  );
};

export default DynamicPage;
