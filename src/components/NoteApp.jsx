import React from 'react';
import NoteList from './NoteList';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
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
        <div className='note-app__header'>
          <NoteHeader />
        </div>
        <div className='note-app__body'>
          <NoteInput />
          <h2>Catatan Aktif</h2>
          <NoteList notes={this.state.notes} />
          <h2>Arsip</h2>
        </div>
      </>
    );
  }
}

export default ContactApp;
