const NoteText = ({ note }) => {
  return (
    <div
      className='card bg-primary border-primary mb-3 mt-3'
      style={{ maxWidth: '18rem' }}
    >
      <div className='card-header'></div>
      <div className='card-body text-light'>
        <h5 className='card-title'></h5>
        <p className='card-text'>{note.info.txt}</p>
      </div>
    </div>
  );
};

export default NoteText;
