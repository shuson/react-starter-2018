import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <Grid stackable columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Link to="/dynamic">Navigate to Dynamic Page</Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Home;
