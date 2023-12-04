import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({
  title,
  createdAt,
  body,
  archived,
  id,
  onDelete,
  onArchive,
  onActive,
}) {
  return (
    <div className='note-item'>
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction
        id={id}
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
        onActive={onActive}
      />
    </div>
  );
}

export default NoteItem;
