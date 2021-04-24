import React from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, Badge } from 'reactstrap';
import { GoogleLogout } from 'react-google-login';
//añadir el spicy logo

import config from '../config.js';

export default function HeaderDashboard(props){

  return (
    <Navbar style={{background:"#762C6B"}} light expand="md">
      <NavbarBrand><span className="text-white"><strong>Day By Day:    </strong> {sessionStorage.getItem('name')}</span></NavbarBrand>
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem style={{background:"#762C6B"}}>
            <NavLink href="#" onClick={() => props.onShow(1)}><h3><Badge style={{background:"#F69C38"}} className="text-white" pill>Dashboard</Badge></h3></NavLink>
          </NavItem>
          <NavItem style={{background:"#762C6B"}}>
            <NavLink href="#" onClick={() => props.onShow(2)}><h3><Badge style={{background:"#935BF7"}} className="text-white" pill>My Notes</Badge></h3></NavLink>
          </NavItem>
          <NavItem style={{background:"#762C6B"}}>
            <GoogleLogout
              clientId={config.clientID}
              buttonText="Sign Out"
              theme='light'
              onLogoutSuccess={props.onLogout}
            />
          </NavItem>
        </Nav>
      </Collapse>
  </Navbar>
  );
}