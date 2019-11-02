import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';

import './layout.scss';

import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>
        <footer className="text-right mt-4">
          &copy; {new Date().getFullYear()} Vapor Wilco LLC
        </footer>
      </Container>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
