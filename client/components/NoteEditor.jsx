import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote } from '../actions';

import './NoteEditor.css';

@connect(undefined, { addNote })
export default class NoteEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleNoteAdd() {
        this.props.addNote(this.state.text);

        //this.props.addNote(newNote);

        this.resetState();
    }

    resetState() {
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <div className="editor">
                <textarea
                    rows={5}
                    placeholder="Enter your note here..."
                    className="editor__textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />

            <button className="editor__button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
}
