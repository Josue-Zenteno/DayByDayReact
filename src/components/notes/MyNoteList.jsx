import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import '../../styles.css';


import { Row, Col, Card, CardTitle, Badge, CardBody,
Table, Alert, Button, Nav, NavItem, NavLink, TabContent,
TabPane, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { FaTrashAlt, FaUserCircle, FaPenAlt } from 'react-icons/fa';

import { getMyNotes, deleteNote } from "../../utils/apicalls.js";
import { getDateInStrFormat } from "../../utils/utils.js";

import AddNote from './AddNote';
import EditNote from './EditNote';

export default function MyNoteList(props){

  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(<Alert color="danger">Choose a Note from the list</Alert>);
  const [activeTab, setActiveTab] = useState('1');
  const [showDeleteModal, setShowDeleteModal] = useState(null);

  const getNotes = () => {
      getMyNotes(sessionStorage.getItem('email')).then((notes) => {
          setNotes(notes);
      });
  }

  const toggleTab = (tab) => {
    if (activeTab !== tab)
      setActiveTab(tab);
  }

  const handleUpdateMyNotes = () => {
    getNotes();
  }

  const askForDelete = (note) => {
    setShowDeleteModal(
      <Modal isOpen="true" className={props.className}>
        <ModalHeader>Eliminar note</ModalHeader>
        <ModalBody>
          Se va a eliminar el note:<br/><small><strong>{note.message}</strong></small>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => deleteNoteSel(note)}>Eliminar</Button>{' '}
          <Button color="secondary" onClick={() => setShowDeleteModal(null)}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    );
  }

  //Deleting selected note
  const deleteNoteSel = (note) => {
    deleteNote(note._id)
      .then((res) => checkDELETENote(res));
  }

  //Check the response from server
  const checkDELETENote = (res) => {
    //if ok, remove modal and reset edit component
    if (res === "OK"){
      setShowDeleteModal(null);
      setEdit(<Alert>Choose a Note from the list</Alert>);
      handleUpdateMyNotes();
    }else{
      //TODO Show a modal when error from server
    }
  }

  const handleShowEdit = (note) => {
    setEdit(<EditNote note= {note} updateMyNotes = {handleUpdateMyNotes} />);
  }

  useEffect(() =>{
    getNotes();
  },[]);

  return(
    <div>
      {showDeleteModal}
      <Row>
        <Col>
          <CardTitle tag="center"><Alert style={{background: "#592151", color:"white", border:"#592151"}}><strong>Profile   </strong><FaUserCircle/></Alert></CardTitle>
        </Col>
      </Row>
      <Row>
          <Col>
            <Card style={{background:"#2A478B", color: "white"}}>
              <CardBody>
                <Row>
                  <Col>
                    <strong><img src={sessionStorage.getItem('image')} alt="Img"/> {sessionStorage.getItem('name')}</strong>
                  </Col>
                </Row>
                </CardBody>
            </Card>
          </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <CardTitle tag="center"><Alert style={{background: "#592151", color:"white", border:"#592151"}}><strong>My Notes </strong><Badge pill>{notes.length}</Badge></Alert></CardTitle>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav tabs>
            <NavItem style={{background: "#211E2B", color:"white", border:"#592151"}}>
              <NavLink href="#" className={classnames({ active: activeTab === '1' })} onClick={() => toggleTab('1')}>
                Add
              </NavLink>
            </NavItem>
            <NavItem style={{background: "#211E2B", color:"white", border:"#592151"}}>
              <NavLink href="#" className={classnames({ active: activeTab === '2' })} onClick={() => toggleTab('2')}>
                Edit
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <AddNote updateMyNotes = {handleUpdateMyNotes}/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  {edit}
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Table>
            <tbody>
              { notes.map((note, index) => {
                return(<div>
                  <div>
                  <Row>
                    <Col>
                      <Card  style={{background: "#353044", color:"white"}}>
                        <CardBody>
                          <Row><Col><strong><img src={note.image} alt="Img"/> {note.user}</strong></Col>
                               <Col align="right">
                                  <Button style={{background:"#F69C38", color: "white"}} outline onClick={() => handleShowEdit(note)}><FaPenAlt/></Button>
                                  {' '}
                                  <Button style={{background:"#F45873", color: "white"}} outline onClick={() => askForDelete(note)}><FaTrashAlt /></Button>
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
              </div>
                </div>)
              })}
            </tbody>
          </Table>
        </Col>
        </Row>
    </div>
  );
}