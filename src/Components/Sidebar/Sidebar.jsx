import React from 'react'

import Nav from 'react-bootstrap/Nav';
import './Sidebar.css'
function Sidebar() {
  return (
    <>
      <div className='navbarContainer bg-light '>
        <Nav fill variant="tabs" className="h-100 d-md-block sidebar" fixed='left'>
          <Nav.Item >
            <Nav.Link href='/ProjectsInformation'>Project Information</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/ScopesDefinition">What are scopes?</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Scope01">Scope 1 Calculations</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link href="/Scope02">Scope 2 Calculations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Scope03">Scope 3 Calculations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Co2 Emissions</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link>Factors</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

    </>
  );
}
export default Sidebar