import React from 'react';
import ButtonDelete from './ButtonDelete';
import ButtonArchive from './ButtonArchive';
import ButtonActive from './ButtonActive';

function NoteItemAction({ id, archived, onDelete, onArchive, onActive }) {
  return (
    <div className='note-item__action'>
      <ButtonDelete id={id} onDelete={onDelete} />
      {archived ? (
        <ButtonActive id={id} onActive={onActive} />
      ) : (
        <ButtonArchive id={id} onArchive={onArchive} />
      )}
    </div>
  );
}

export default NoteItemAction;
