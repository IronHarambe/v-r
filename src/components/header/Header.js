import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Header.scss"

function Header() {
    return (
        <div className="header">
         {/* Main settings for navbar */}
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="nav" fixed="top"    >
        {/* Logo */}
        <Navbar.Brand  className="logo">V+R</Navbar.Brand>
        {/* Responsive bar */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler" />
        {/* Collapsing navbar options */}
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto" ></Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/work">WORK</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
            
        </div>
    )
}

export default Header
