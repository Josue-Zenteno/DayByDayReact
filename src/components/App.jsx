import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Media, Row, Col, Container, Alert } from 'reactstrap';
import { GoogleLogin } from 'react-google-login';

import config from '../config.js';
import SpicyLogo from '../images/spicy_logo_blanco.png';

import NoteList from './notes/NoteList';
import VotedNoteList from './notes/VotedNoteList';

import '../styles.css';
//Un estilo, para no tener que tener un css
var imgStyle = {
  maxWidth: "85px",
};

export default function App(props){
  //[variable, funcionCambiaVariable] = estadoPorDefecto
  const [loginMessage, setLoginMessage] = useState(null); 

  const responseGoogleSuccess = (googleUser) => {
    //Obtener usuario de google
    var profile = googleUser.getBasicProfile(); 

    //Variables de sesion (sesion terminara cuando se haga logOut)
    sessionStorage.setItem('name', profile.getName()); 
    sessionStorage.setItem('email', profile.getEmail());
    sessionStorage.setItem('image', profile.getImageUrl());
    
    //Una historia es un array de direcciones entonces redireccionamos a /home
    props.history.push("/home");
  }

  const responseGoogleFailure = (response) => {
    //Un estado puede ser lo que nos de la gana, en este caso un componente Alert
    setLoginMessage(<Alert color="danger">Inicio de sesión incorrecto. Inténtelo de nuevo</Alert>);
  }

  return(
    <Container>
      <Row>
        <Col>
          <Navbar style={{background:"#762C6B"}} light expand="md">
          <Media style={imgStyle} object src={SpicyLogo} alt="Bird"/><NavbarBrand><h1 className="text-white">Day By Day</h1></NavbarBrand>
            <Nav className="ml-auto" style={{background:"white"}} navbar>
              <NavItem>
                {loginMessage}
                <GoogleLogin
                  clientId={config.clientID}
                  buttonText="Sign in with Google"
                  theme='light'
                  onSuccess={responseGoogleSuccess}
                  onFailure={responseGoogleFailure}
                />
              </NavItem>
            </Nav>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <VotedNoteList/>
        </Col>
        <Col>
          <NoteList/>
        </Col>
      </Row>
    </Container>
  );
}