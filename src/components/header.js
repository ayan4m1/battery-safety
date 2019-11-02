import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';

import vwLogo from '~images/logo.svg';

const Header = () => (
  <Navbar>
    <Navbar.Brand>
      <Link to="/">
        <img src={vwLogo} alt="Vapor Wilco" />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <Nav.Link as={Link} to="/recent" activeLinkKey="/">
          Recent Tests
        </Nav.Link>
        <Nav.Link as={Link} to="/all" activeLinkKey="/">
          All Tests
        </Nav.Link>
        <Nav.Link as={Link} to="/donate">
          Donate
        </Nav.Link>
        <Nav.Link
          href="https://forms.gle/MkzmBG7Nukmd7ypg7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Survey
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
