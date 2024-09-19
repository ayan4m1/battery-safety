import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from 'components/SEO';
import Layout from 'components/Layout';

export default function Markdown({ data }) {
  const {
    frontmatter: { title, date, updated },
    html
  } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <Row>
          <Col xs="8">
            <h2>{title}</h2>
          </Col>
          <Col className="text-muted text-end" xs="4">
            <p>Published on {date}</p>
            <p>Updated on {updated}</p>
          </Col>
          <Col dangerouslySetInnerHTML={{ __html: html }} md="12" />
        </Row>
      </Container>
    </Layout>
  );
}

Markdown.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query ($pagePath: String!) {
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
