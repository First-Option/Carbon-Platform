import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from 'react-router-dom';
import "./ScopeTaps.css"

export default function ScopeTaps() {
  const location = useLocation();

  return (
    <>
     
      <Navbar expand="lg" bg='dark' data-bs-theme="dark" >
      <Container>
      <Navbar.Brand as={Link} to="/Scope03/Scope03Board"  className={location.pathname === '/Scope03/Scope03Board' ? 'active' : '' }>Scope 03</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
          >
            <Nav.Item className='subNavItem'>
            <Nav.Link as={Link} to="/Scope03/WellToTankFuels"  className={location.pathname === '/Scope03/WellToTankFuels' ? 'active' : '' }>
            Well To Tank-Fuels
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='subNavItem'>
            <Nav.Link as={Link} to="/Scope03/Water" className={location.pathname === '/Scope03/Water' ? 'active' : ''}>
             Water
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='subNavItem'>
            <Nav.Link as={Link} to="/Scope03/MaterialUse" className={location.pathname === '/Scope03/MaterialUse' ? 'active' : ''}>
            Material Use
            </Nav.Link>
          </Nav.Item>
               <Nav.Item className='subNavItem'>
            <Nav.Link as={Link} to="/Scope03/WasteDisposal" className={location.pathname === '/Scope03/WasteDisposal' ? 'active' : ''}>
            Waste Disposal
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='subNavItem'>
            <Nav.Link as={Link} to="/Scope03/EmployeeCommuting" className={location.pathname === '/Scope03/EmployeeCommuting' ? 'active' : ''}>
            Employee Commuting
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='subNavItem'>
            <Nav.Link as={Link} to="/Scope03/Food" className={location.pathname === '/Scope03/Food' ? 'active' : ''}>
            Food
            </Nav.Link>
          </Nav.Item>

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
        {/* <Nav variant="tabs"  className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll defaultActiveKey="/Scope01/">
          <Nav.Item>
            <Nav.Link as={Link} to="/Scope01/Fuels"  className={location.pathname === '/Scope01/Fuels' ? 'active' : ''}>
              Fuels
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Scope01/Bioenergy" className={location.pathname === '/Scope01/Bioenergy' ? 'active' : ''}>
              Bioenergy
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Scope01/Transportation" className={location.pathname === '/Scope01/Transportation' ? 'active' : ''}>
              Transportation
            </Nav.Link>
          </Nav.Item>
        </Nav> */}
      
    </>
  );
};
