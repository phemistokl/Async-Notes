import React, { Component } from 'react';

import './Note.css';

export default class Note extends Component {
    render() {
        const {
            color,
            children,
            onDelete
        } = this.props;

        return (
            <div className="note" style={{ backgroundColor: color }}>
                <span className="note__delete-icon" onClick={onDelete}> × </span>
                {children}
            </div>
        );
    }
}
