const NoteVideo = ({ note, onDelete }) => {
  return (
    <div className='card mt-3' style={{ maxWidth: '18rem' }}>
      <span
        className='float-right text-dark pointer'
        onClick={() => onDelete(note.id)}
      >
        X
      </span>
      <iframe
        className='card-img-top'
        src={note.info.url}
        alt='Card Video cap'
      />
      <div className='card-body'>
        <p className='card-text'>{note.info.title}</p>
      </div>
    </div>
  );
};

export default NoteVideo;
