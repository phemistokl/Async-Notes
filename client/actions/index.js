import api from '../api';

const DEFAULT_COLOR = 'yellow';

export const fetchNotesRequest = () => ({
    type: 'FETCH_NOTES_REQUES'
});

export const fetchNotesSuccess = ({ data }) => ({
    notes: data,
    type: 'FETCH_NOTES_SUCCESS'
});

export const loadNotes = () => dispatch => {
    dispatch(fetchNotesRequest());

    return api.listNotes()
    .then(data => dispatch(fetchNotesSuccess(data)));
}

export const createNote = (note) => dispatch => {
    return api.createNote(note)
    .then(() => loadNotes())
    .catch(err => console.error(err));
}

export const deleteNote = (noteId) => dispatch => {
    return api.deleteNote(noteId)
    .then(() => loadNotes())
    .catch(err => console.error(err));
}
