import React from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { GoogleLogout } from 'react-google-login';
//añadir el spicy logo

import config from '../config.js';

export default function HeaderDashboard(props){

  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand><span className="text-white"><strong>Day By Day:    </strong> {sessionStorage.getItem('name')}</span></NavbarBrand>
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#" onClick={() => props.onShow(1)}><span className="text-white">Todos los Notes</span></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => props.onShow(2)}><span className="text-white">Mis Notes</span></NavLink>
          </NavItem>
          <NavItem>
            <GoogleLogout
              clientId={config.clientID}
              buttonText="Sign Out"
              theme='dark'
              onLogoutSuccess={props.onLogout}
            />
          </NavItem>
        </Nav>
      </Collapse>
  </Navbar>
  );
}