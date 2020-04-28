const NoteText = ({ note, onDelete }) => {
  return (
    <div
      className='card bg-primary border-primary mb-3 mt-3'
      style={{ maxWidth: '18rem' }}
    >
      <span
        className='float-right text-light pointer'
        onClick={() => onDelete(note.id)}
      >
        <i className='fas fa-trash-alt'></i>
      </span>
      <span
        className='float-right text-light pointer mr-2'
        onClick={() => console.log(note)}
      >
        <i className='fas fa-edit'></i>
      </span>
      <div className='card-body text-light'>
        <h5 className='card-title'></h5>
        <p className='card-text'>{note.info.txt}</p>
      </div>
    </div>
  );
};

export default NoteText;
