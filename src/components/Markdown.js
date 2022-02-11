import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '~components/SEO';
import Layout from '~components/Layout';

export default class Markdown extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { data } = this.props;
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
            <Col xs="4" className="text-muted text-right">
              <p>Published on {date}</p>
              <p>Updated on {updated}</p>
            </Col>
            <Col md="12" dangerouslySetInnerHTML={{ __html: html }} />
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
