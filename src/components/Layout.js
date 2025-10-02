import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import './Layout.scss';

import Header from './Header';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Container>
      <main>{children}</main>
      <footer className="text-end mt-4">
        &copy; {new Date().getFullYear()} Vapor Wilco LLC
      </footer>
    </Container>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
