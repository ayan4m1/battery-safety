import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Row, Col, Card } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';

const RecentTestsPage = ({ data }) => (
  <Layout>
    <SEO title="Recent Posts" />
    <Row>
      <Col md={8}>
        <h1>Most Recent Tests</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.frontmatter.path} className="my-2">
            <Card.Body>
              <Row>
                <Col md={8}>
                  <Link to={node.frontmatter.path}>
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
                </Col>
                <Col md={4} className="text-right">
                  <p className="text-muted">
                    Published on {node.frontmatter.date}
                  </p>
                  <p className="text-muted">
                    Updated on {node.frontmatter.updated}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  </Layout>
);

RecentTestsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query RecentPostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updated] }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            updated(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;

export default RecentTestsPage;
