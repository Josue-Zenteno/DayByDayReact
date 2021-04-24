import React, { useState } from 'react';
import {Container, Row, Col } from 'reactstrap';

import HeaderDashboard from './HeaderDashboard';
import MyNoteList from './notes/MyNoteList';
import NoteList from './notes/NoteList';
import VotedNoteList from './notes/VotedNoteList';

export default function Home(props){

  const [show, setShow] = useState(<NoteList />);
  const [votedList, setVotedList] = useState(<VotedNoteList/>);
 
  const handleLogout = () => {
    sessionStorage.clear();
    props.history.push("/");
  }

  const handleOnShow = (option) => {
    if (option === 1){
      setShow(<NoteList />);
      setVotedList(<VotedNoteList/>);
    }else if (option === 2){
      setShow(<MyNoteList />);
      setVotedList(<VotedNoteList/>);
    }
  }

  /*Esta variable de sesion tendrá un valor asignado cuando se ha hecho el login correctamente antes
  sino no va a tener ningún valor por lo que cuando se quiera entrar directamente a /Home nos va a
  redirigir a root*/
  if (sessionStorage.getItem("name") === null){
    props.history.push("/");
  }

  else{
    return (
      <Container>
        <Row>
          <Col><HeaderDashboard onLogout={handleLogout} onShow= {handleOnShow} /></Col>
        </Row>
        <Row>
          <Col>
            {votedList}
          </Col>
          <Col>
            {show}
          </Col>
        </Row>
      </Container>
    );
  }
}