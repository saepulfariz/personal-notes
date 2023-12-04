import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function NoteBody({ addNote, notes, onDelete }) {
  return (
    <div className='note-app__body'>
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={notes} onDelete={onDelete} />
      <h2>Arsip</h2>
      <p className='notes-list__empty-message'>Tidak ada catatan</p>
    </div>
  );
}

export default NoteBody;
