import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';

export default class Markdown extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { data } = this.props;
    const {
      frontmatter: { title },
      html
    } = data.markdownRemark;

    return (
      <Layout>
        <SEO title={title} />
        <Container>
          <Row>
            <Col md="12" dangerouslySetInnerHTML={{ __html: html }} />
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
