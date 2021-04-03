import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardTitle, Badge, CardBody, Table, Alert, Button } from 'reactstrap';

import { BiArrowFromBottom, BiArrowFromTop } from 'react-icons/bi';

import '../../styles.css';
import { getAllNotes } from "../../utils/apicalls.js";
import { getDateInStrFormat } from "../../utils/utils.js";

export default function NoteList(){

  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    getAllNotes().then((notes) => { //este notes != variable de estado notes (esta guarda el resultado de usar getAllNotes)
      setNotes(notes); //Ahora le seteamos a la variable de estado notes lo que hay en la variable notes "local"
    });
  }

  const makeUpVote = () => {
    //TODO add an UpVote
    getNotes()
  }

  const makeDownVote = () => {
    //TODO remove an UpVote and add a DownVote
    getNotes()
  }

  //Este useEffect al no tener parametros es equivalente al ComponentWillMount de tal forma que se ejcutará al ser renderizado
  useEffect(() =>{
    getNotes();
  },[]);

  return (
    <div>
      <CardTitle tag="center"><Alert color="secondary"><strong>Notes  </strong><Badge pill color="secondary">{notes.length}</Badge></Alert></CardTitle>
      <Table>
        <tbody>
          { notes.map((note, index) => {
            return(
              <div>
                  <Row>
                    <Col>
                      <Card>
                        <CardBody>
                          <Row><Col><strong><img src={note.image} alt="Img"/> {note.user}</strong></Col></Row>
                          <br></br>
                          <Row>
                            <Col>
                              {note.message}
                            </Col>
                            <Col align="right">
                              <Button color="secondary" onClick={makeDownVote}><BiArrowFromTop/></Button>
                              <Button color="info" onClick={makeUpVote}><BiArrowFromBottom /></Button>
                            </Col>
                          </Row>
                          <Row>
                            <Col align="left">
                              <small>{getDateInStrFormat(new Date(note.publicationdate))}</small>
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