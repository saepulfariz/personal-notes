import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function NoteBody({ addNote, notes, onDelete, onArchive, onActive }) {
  const activeNotes = notes.filter((note) => note.archived === false);
  const archiveNotes = notes.filter((note) => note.archived === true);

  return (
    <div className='note-app__body'>
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={activeNotes}
        onDelete={onDelete}
        onArchive={onArchive}
        onActive={onActive}
      />
      <h2>Arsip</h2>
      <NoteList
        notes={archiveNotes}
        onDelete={onDelete}
        onArchive={onArchive}
        onActive={onActive}
      />
    </div>
  );
}

export default NoteBody;
