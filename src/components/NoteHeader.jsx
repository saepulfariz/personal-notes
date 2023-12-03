import React from 'react';

function NoteHeader() {
  return (
    <>
      <h1>Notes</h1>
      <div className='note-search'>
        <input type='text' placeholder='Cari catatan' />
      </div>
    </>
  );
}

export default NoteHeader;
