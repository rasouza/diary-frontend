/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from 'reactstrap'
import logo from 'assets/img/logo.png'

function AuthNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Navbar
      expand="lg"
      className={
        isOpen
          ? 'bg-white navbar-absolute'
          : 'navbar-transparent navbar-absolute'
      }>
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <NavbarToggler onClick={toggle}>
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </NavbarToggler>
          </div>
          <div className="logo-img mr-2">
            <img height="32" src={logo} alt="Coding Diary" />
          </div>
          <Link to="/" className="navbar-brand">
            Coding Diary
          </Link>
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <a
                href="https://github.com/users/rasouza/projects/2"
                className="nav-link"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-github" /> Github
              </a>
            </NavItem>
            <NavItem>
              <a
                href="https://www.100daysofcode.com/"
                className="nav-link"
                target="_blank"
                rel="noreferrer">
                <i className="far fa-file-alt" /> 100 Days of Code Challenge
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default AuthNavbar
