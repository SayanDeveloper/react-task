import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import '../styles/navMod.css';

function TopNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <Navbar color="light" light expand="lg">
        <NavbarBrand href="/">guaranted</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#">Furniture</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Appliances</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Packages</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">FAQ</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <form className="d-flex">
                    <input 
                        type="text" 
                        placeholder="Search the website" 
                        aria-label="Search" 
                    />
                    <button type="submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
                <NavItem>
                    <NavLink className='login' href="#">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='active cart' href="#">Cart</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  )
}

export default TopNav