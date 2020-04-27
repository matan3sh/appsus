const NoteTodos = ({ note }) => {
  return (
    <div className='card mt-3' style={{ maxWidth: '18rem' }}>
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
