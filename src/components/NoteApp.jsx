import React from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils/index';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  }

  render() {
    return (
      <>
        <NoteHeader />
        <NoteBody
          addNote={this.onAddNoteEventHandler}
          onDelete={this.onDeleteHandler}
          notes={this.state.notes}
        />
      </>
    );
  }
}

export default ContactApp;
