import React, { useState, useEffect } from 'react';
import { Card, CardTitle, Label, Button, Form, FormGroup, Input } from 'reactstrap';

import { putExistingNote } from "../../utils/apicalls.js";

export default function EditNote(props){

  const [message, setMessage] = useState(props.note.message);

  const editNote = (e) => {
    e.preventDefault();
    //Update note in database with put api call
    putExistingNote(props.note._id, message)
      .then((res) => checkPUTNote(res));
  }

  /*AÑADIR METODO PARA LLAMAR A LA APICALLS CON METODO DE UPVOTES*/

  //Check the response from the server
  const checkPUTNote = (res) => {
    if (res === "OK"){
      //TODO Show Modal when a the note is updated
      props.updateMyNotes();
    }else{
      //TODO Show Modal when an error updating the note occurs
    }
  }

  useEffect(() =>{
    setMessage(props.note.message);
  },[props.note]);

  return (
    <div>
      <Card body style={{background: "#211E2B", color:"white", border:"#505B7E"}}>
        <CardTitle tag="h5">Edit Note</CardTitle>
        <Form>
          <FormGroup>
            <Label for="aDescripcion">Message</Label>
            <Input style={{height: '200px'}} type="textarea" name="message" id="aDescripcion" placeholder="Introduce a message" value={message} onChange={(e) => setMessage(e.target.value)}/>
          </FormGroup>
            <Button color="info" onClick={editNote}>Update</Button>
        </Form>
      </Card>
    </div>
  );
}