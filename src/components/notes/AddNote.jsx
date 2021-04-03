import React, { useState } from 'react';
import { Card, CardTitle, Label, Button, Form, FormGroup, Input } from 'reactstrap';

import { postNewNote } from "../../utils/apicalls.js";

export default function AddNote(props){

  const [message, setMessage] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    //Save note in database with post api call
    postNewNote(sessionStorage.getItem('email'),sessionStorage.getItem('name'), sessionStorage.getItem('image'), message)
      .then((res) => checkPOSTNewNote(res));
  }

  //Check the response from the server
  const checkPOSTNewNote = (res) => {
    if (res === "OK"){
      //TODO Show Modal when a new note is added
      props.updateMyNotes();
    }else{
      //TODO Show Modal when an error adding a new note occurs
    }
  }

  return (
    <div>
      <Card body>
        <CardTitle tag="h5">Añadir un nuevo Note</CardTitle>
        <Form>
          <FormGroup>
            <Label for="aMensaje">Mensaje</Label>
            <Input style={{height: '200px'}} type="textarea" name="message" value={message} id="aMensaje" placeholder="Introduce un mensaje" onChange={(e) => setMessage(e.target.value)}/>
          </FormGroup>
          <Button color="info" onClick={addNote}>Añadir</Button>
        </Form>
      </Card>
    </div>
  );
}