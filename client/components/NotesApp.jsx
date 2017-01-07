import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadNotes, createNote, deleteNote } from '../actions';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import './NotesApp.css';

@connect(mapStateToProps, { loadNotes, createNote, deleteNote })
export default class NotesApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };

        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    componentWillMount() {
        this.props.loadNotes();
    }
    componentDidUpdate() {
        this.props.loadNotes();
    }
    //
    // componentDidMount() {
    //     const savedNotes = JSON.parse(localStorage.getItem('notes'));
    //
    //     if (savedNotes) {
    //         this.setState({ notes: savedNotes });
    //     }
    // }
    //
    // componentDidUpdate() {
    //     const notes = JSON.stringify(this.state.notes);
    //
    //     localStorage.setItem('notes', notes);
    // }
    //
    // handleNoteDelete(noteId) {
    //     this.setState({
    //         notes: this.state.notes.filter(note => note.id !== noteId)
    //     });
    // }
    //
    // handleNoteAdd(newNote) {
    //     this.setState({
    //         notes: [newNote, ...this.state.notes]
    //     });
    // }
    handleNoteDelete(noteId) {
        this.props.deleteNote(noteId);
    }

    handleNoteAdd(newNote) {
        //console.log(newNote);
        this.props.createNote(newNote);
    }

    render() {
        return (
            <div className="app">
                <h2 className="app__header">NotesApp</h2>

                <NoteEditor onNoteAdd={this.handleNoteAdd} />

                <NotesGrid
                    notes={this.props.notes}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
  //console.log(state);
  return {
    notes: state.notes.notes,
    loading: state.notes.isFetching
  };
}
