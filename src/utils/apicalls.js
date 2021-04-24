import API from './api'

export {
    getAllNotes,
    getAllNotesVotes,
    getMyNotes,
    deleteNote,
    postNewNote,
    putExistingNote,
    putExistingNoteVote
};

function getAllNotes() {
    return API.get('/notes').then(res => res.data);
}

function getAllNotesVotes(){
    return API.get('/notes/votes/').then(res => res.data);
}

function getMyNotes(email){
    return API.get('/notes/all/'+email).then(res => res.data);
}

function deleteNote(idnote) {
    return API.delete('/notes/'+idnote).then(result => result.data);
}

function postNewNote(email, user, image, message) {
    return API.post('/notes', {
      email,
      user,
      image,
      message}).then(result => result.data);
}

function putExistingNote(idnote, message) {
    return API.put('/notes/'+idnote, {
      message}).then(result => result.data);
}

function putExistingNoteVote(idnote, votes) {
    return API.put('/notes/'+idnote, {
      votes}).then(result => result.data);
}