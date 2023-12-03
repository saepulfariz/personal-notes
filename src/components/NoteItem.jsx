import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({ title, createdAt, body, id }) {
  return (
    <div className='note-item'>
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction id={id} />
    </div>
  );
}

export default NoteItem;
