import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardTitle, CardBody, Table, Alert, Button, Badge } from 'reactstrap';

import { BiArrowFromBottom, BiArrowFromTop } from 'react-icons/bi';
import { FaFire } from 'react-icons/fa';

import '../../styles.css';
import { getAllNotesVotes, putExistingNoteVote } from "../../utils/apicalls.js";
import { getDateInStrFormat } from "../../utils/utils.js";

export default function NoteList(){

  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    getAllNotesVotes().then((notes) => { //este notes != variable de estado notes (esta guarda el resultado de usar getAllNotes)
      setNotes(notes); //Ahora le seteamos a la variable de estado notes lo que hay en la variable notes "local"
    });
  }

  const upVoteNote = (note) =>{
    putExistingNoteVote(note._id, note.votes+1);
  }

  const downVoteNote = (note) =>{
    putExistingNoteVote(note._id, note.votes-1);
  }

  const makeUpVote = (note) => {
    upVoteNote(note);
  }

  const makeDownVote = (note) => {
    downVoteNote(note);
  }

  useEffect(() =>{
    getNotes();
  },[notes]);

  //Este useEffect al no tener parametros es equivalente al ComponentWillMount de tal forma que se ejcutará al ser renderizado
  useEffect(() =>{
    getNotes();
  },[]);

  return (
    <div>
      <CardTitle tag="center"><Alert style={{background: "#592151", color:"white", border:"#592151"}}><strong>Trending Notes  </strong><FaFire></FaFire></Alert></CardTitle>
      <Table>
        <tbody>
          { notes.map((note, index) => {
            return(
              <div>
                  <Row>
                    <Col>
                      <Card style={{background: "#353044", color:"white"}}>
                        <CardBody>
                          <Row>
                            <Col>
                              <strong><img src={note.image} alt="Img"/> {note.user}</strong>
                            </Col>
                            <Col align="right">
                              <Button color="secondary" onClick={() => makeDownVote(note)}><BiArrowFromTop/></Button>
                              {' '}
                              <Button color="info" onClick={() => makeUpVote(note)}><BiArrowFromBottom /></Button>
                            </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col>
                              {note.message}
                            </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col align="left">
                              <small>{getDateInStrFormat(new Date(note.publicationdate))}</small>
                            </Col>
                            <Col align="right">
                              <Badge color="info" pill>Votes: {note.votes}</Badge>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <br/>
              </div>)
            })}
          </tbody>
        </Table>
      </div>
    );
}