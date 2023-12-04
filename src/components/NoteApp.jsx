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
  }

  render() {
    return (
      <>
        <NoteHeader />
        <NoteBody notes={this.state.notes} />
      </>
    );
  }
}

export default ContactApp;
