import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import '../../styles.css';


import { Row, Col, Card, CardTitle, Badge, CardBody,
Table, Alert, Button, Nav, NavItem, NavLink, TabContent,
TabPane, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { BsChat, BsUpload } from "react-icons/bs";

import { getMyNotes, deleteNote } from "../../utils/apicalls.js";
import { getDateInStrFormat } from "../../utils/utils.js";

import AddNote from './AddNote';
import EditNote from './EditNote';

export default function MyNoteList(props){

  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(<Alert color="danger">Seleccione editar un Note de la lista</Alert>);
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
      setEdit(<Alert color="warning">Seleccione editar un note de la lista</Alert>);
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
        <Col xs="7">
          <CardTitle tag="center"><Alert color="info"><strong>Mis Notes </strong><Badge pill>{notes.length}</Badge></Alert></CardTitle>
          <Table>
            <tbody>
              { notes.map((note, index) => {
                return(<div>
                  <div>
                  <Row>
                    <Col>
                      <Card>
                        <CardBody>
                          <Row><Col><strong><img src={note.image} alt="Img"/> {note.user}</strong></Col>
                               <Col align="right">
                                  <Button outline onClick={() => handleShowEdit(note)}><FaEdit /></Button>
                                  {' '}
                                  <Button outline onClick={() => askForDelete(note)}><FaTrashAlt /></Button>
                                </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col>
                              {note.message}
                            </Col>
                          </Row>
                          <Row>
                            <Col align="right">
                              <small>{getDateInStrFormat(new Date(note.publicationdate))}</small>
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
        <Col xs="5">
          <Nav tabs>
            <NavItem>
              <NavLink href="#" className={classnames({ active: activeTab === '1' })} onClick={() => toggleTab('1')}>
                Añadir
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={classnames({ active: activeTab === '2' })} onClick={() => toggleTab('2')}>
                Editar
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
    </div>
  );
}