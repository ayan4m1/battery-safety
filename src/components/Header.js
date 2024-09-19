import { Link } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';

import vwLogo from 'images/logo.svg';

const Header = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <Link to="/">
          <img alt="Vapor Wilco" src={vwLogo} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link activeLinkKey="/recent" as={Link} to="/recent">
            Recent
          </Nav.Link>
          <Nav.Link activeLinkKey="/all" as={Link} to="/all">
            All
          </Nav.Link>
          <Nav.Link activeLinkKey="/donate" as={Link} to="/donate">
            Donate
          </Nav.Link>
          <Nav.Link
            href="https://forms.gle/MkzmBG7Nukmd7ypg7"
            rel="noopener noreferrer"
            target="_blank"
          >
            Survey
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
