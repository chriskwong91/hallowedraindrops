
import React from 'react';

// Bootstrap items
import NavBar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';


const Navigation = () => (
      <div>
        <NavBar fixedTop fluid staticTop>
          <Nav bsStyle="tabs" pullLeft>
            <NavItem>{'<--'} Return to Editor</NavItem>
          </Nav>
          <Nav bsStyle="tabs" pullRight>
            <NavItem pullRight>Profile</NavItem>
          </Nav>
        </NavBar>
      </div>
);

export default Navigation;
