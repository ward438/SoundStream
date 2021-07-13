
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
      <Navbar type="dark" bg="primary" theme="primary" expand="md" style={{border: '1.5px solid'}}>        
        <Nav.Link as={Link} active to="/"><Navbar.Brand><img src={logo} alt={"brand"} style={{ height: "80px",border: '1px solid', borderRadius: '10px', boxShadow: '8px 8px #0b73a3b7' }} /></Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto' style={{color: 'white', fontSize: '2em'}}>
            <Nav.Link as={Link} active to="/about" style={{border: '1px solid', borderRadius: '10px', height: '80px', boxShadow: '8px 8px #0b73a3b7', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              Artist Collections
            </Nav.Link>
          </Nav>
          <Nav navbar className="ml-auto" style={{color: 'white', marginRight: '5em'}}>
            SoundStream
          </Nav>
          {/* this is the search bar */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}