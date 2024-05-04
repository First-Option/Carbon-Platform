import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'
function NavScroll() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Carbon FootPrint</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/ProjectsInformation">Project Information</Nav.Link>
            <NavDropdown title="Scopes Calculations" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/ScopesDefinition">Definition</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Scope01">Scope 01</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Scope02">Scope 02</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Scope03">Scope 03</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/Ghg">What Is GHG?</Nav.Link>
            <Nav.Link as={Link} to="/About">About Us</Nav.Link>
            <Nav.Link as={Link} to="/Report">Report</Nav.Link>
          </Nav>
          {/* Your search form */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;

