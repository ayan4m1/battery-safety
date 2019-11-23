import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import SEO from '~components/SEO';
import Layout from '~components/Layout';

const AllTestsPage = () => (
  <Layout>
    <SEO title="All Tests" />
    <Jumbotron>
      <h1>All Tests</h1>
      <h2>Coming Soon</h2>
    </Jumbotron>
  </Layout>
);

export default AllTestsPage;
