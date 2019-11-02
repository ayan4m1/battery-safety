import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';

const AllTestsPage = () => (
  <Layout>
    <SEO title="AllTests Posts" />
    <Jumbotron>
      <h1>All Tests</h1>
      <h2>Coming Soon</h2>
    </Jumbotron>
  </Layout>
);

export default AllTestsPage;
