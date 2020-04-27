const NoteImg = ({ note }) => {
  return (
    <div className='card mt-3' style={{ maxWidth: '18rem' }}>
      <img className='card-img-top' src={note.info.url} alt='Card image cap' />
      <div className='card-body'>
        <p className='card-text'>{note.info.title}</p>
      </div>
    </div>
  );
};

export default NoteImg;
