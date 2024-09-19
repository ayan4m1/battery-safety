import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Row, Col, Card } from 'react-bootstrap';

import SEO from 'components/SEO';
import Layout from 'components/Layout';

export default function RecentTestsPage({ data }) {
  return (
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
            <Card className="my-2" key={node.frontmatter.path}>
              <Card.Body>
                <Row>
                  <Col md={8}>
                    <Link to={node.frontmatter.path}>
                      <h4>{node.frontmatter.title}</h4>
                    </Link>
                  </Col>
                  <Col className="text-end" md={4}>
                    <p className="text-muted">
                      Published {node.frontmatter.date}
                    </p>
                    {node.frontmatter.updated &&
                      node.frontmatter.date !== node.frontmatter.updated && (
                        <p className="text-muted">
                          Updated {node.frontmatter.updated}
                        </p>
                      )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Layout>
  );
}

RecentTestsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query RecentPostsQuery {
    allMarkdownRemark(sort: { frontmatter: { updated: DESC } }, limit: 10) {
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
