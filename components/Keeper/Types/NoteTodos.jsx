const NoteTodos = ({ note, onDelete }) => {
  return (
    <div className='card mt-3' style={{ maxWidth: '18rem' }}>
      <span
        className='float-right text-dark pointer'
        onClick={() => onDelete(note.id)}
      >
        X
      </span>
      <div className='card-header'>{note.info.label}</div>
      <ul className='list-group list-group-flush'>
        {note.info.todos.map((todo, i) => (
          <li className='list-group-item' key={i}>
            {todo.txt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteTodos;
