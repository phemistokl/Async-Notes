import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteNote } from '../actions';

import Masonry from 'react-masonry-component';

import Note from './Note.jsx';

import './NotesGrid.css';

@connect(mapStateToProps, { deleteNote })
export default class NotesGrid extends Component {
    render() {

        const masonryOptions = {
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        return (
            <Masonry
                className='grid'
                options={masonryOptions}
            >
                {
                    this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            color={note.color}
                            onDelete={() => this.props.deleteNote(note.id)}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
}

function mapStateToProps(state) {
  return {
    notes: state
  };
}
