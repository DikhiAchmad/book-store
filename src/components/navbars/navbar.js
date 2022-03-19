import React from 'react'
import { NavbarBrand,NavbarToggler ,Collapse, Navbar,Nav,NavItem, NavLink} from 'reactstrap';
import './index.css';
import {
  Link
} from "react-router-dom";
const Navbars = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Navbar
    color="faded"
    expand="md"
    className='py-4'
    light
  >
    <NavbarBrand href="/" className='fw-bold text-blue'>
    Yudic Book’s Store
    </NavbarBrand>
    <NavbarToggler onClick={() => { setIsOpen(!isOpen)}} />
    <Collapse isOpen={isOpen} navbar>
      <Nav
        className="ms-auto"
        navbar
      >
        <NavItem>
          <NavLink tag={Link} to={"/"} className='me-4 fw-bold text-blue'>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"admin"} className='button-cherry px-3 rounded'>
            console Admin
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
  )
}

export default Navbars
