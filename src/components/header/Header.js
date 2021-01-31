import React from 'react'
import { Navbar, Nav } from "react-bootstrap";

import "./Header.scss"

function Header() {
    return (
        <div className="header">
         {/* Main settings for navbar */}
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="nav" fixed="top"    >
        {/* Logo */}
        <Navbar.Brand href="#home" className="logo">V+R</Navbar.Brand>
        {/* Responsive bar */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler" />
        {/* Collapsing navbar options */}
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto" ></Nav>
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#projects">WORK</Nav.Link>
            <Nav.Link href="#skill">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
            
        </div>
    )
}

export default Header
