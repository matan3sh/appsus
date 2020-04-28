import EditTodo from '../EditTypes/EditTodo.jsx';

export default class NoteTodos extends React.Component {
  state = {
    editTodo: false,
  };

  toggleTodo = () => {
    this.setState(({ editTodo }) => ({ editTodo: !editTodo }));
    this.props.onUpdateNotes();
  };

  render() {
    const { note, onDelete } = this.props;
    if (this.state.editTodo)
      return (
        <EditTodo
          note={note}
          toggleTodo={this.toggleTodo}
          onDelete={onDelete}
        />
      );

    return (
      <div className='card mt-3' style={{ minWidth: '18rem' }}>
        <span
          className='float-right text-dark pointer'
          onClick={() => onDelete(note.id)}
        >
          <i className='fas fa-trash-alt'></i>
        </span>
        <span
          className='float-right text-dark pointer mr-2'
          onClick={() => this.setState({ editTodo: true })}
        >
          <i className='fas fa-edit'></i>
        </span>
        <div className='card-header text-dark'>{note.info.label}</div>
        <ul className='list-group list-group-flush'>
          {note.info.todos.map((todo, i) => (
            <li className='list-group-item' key={i}>
              {todo.txt}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
