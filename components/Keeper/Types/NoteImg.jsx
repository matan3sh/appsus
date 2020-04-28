const NoteImg = ({ note, onDelete }) => {
  return (
    <div className='card mt-3' style={{ maxWidth: '18rem' }}>
      <span
        className='float-right text-dark pointer'
        onClick={() => onDelete(note.id)}
      >
        X
      </span>
      <img
        className='card-img-top radius'
        src={note.info.url}
        alt='Card image cap'
      />
      <div className='card-body'>
        <p className='card-text'>{note.info.title}</p>
      </div>
    </div>
  );
};

export default NoteImg;
