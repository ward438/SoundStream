
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from "../apple-touch-icon.png";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

export default class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" bg="primary" theme="primary" expand="md">        
        <Nav.Link as={Link} active to="/"><Navbar.Brand><img src={logo} alt={"brand"} style={{ height: "80px" }} /></Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} active to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav navbar className="ml-auto">
          </Nav>
          {/* this is the search bar */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}