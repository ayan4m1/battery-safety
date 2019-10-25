import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import '../index.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Recent tests</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.frontmatter.path}>
        <Link to={node.frontmatter.path}>
          <h2>{node.frontmatter.title}</h2>
        </Link>
        <p className="text-muted">published on {node.frontmatter.date}</p>
      </div>
    ))}
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query RecentPostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
