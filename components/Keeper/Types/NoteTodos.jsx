import keeperService from '../../../services/keeperService.js';
import EditTodo from '../EditTypes/EditTodo.jsx';

export default class NoteTodos extends React.Component {
  state = {
    editTodo: false,
    done: false,
  };

  toggleTodo = () => {
    this.setState(({ editTodo }) => ({ editTodo: !editTodo }));
    this.props.onUpdateNotes();
  };

  toggleDoneTodo = (i) => {
    if (!this.state.done)
      keeperService.saveDoneTodo(this.props.note, i, Date.now());
    else keeperService.saveDoneTodo(this.props.note, i, null);
    this.setState(({ done }) => ({ done: !done }));
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
          {note.info.todos.map((todo, i) => {
            return (
              <li
                className='list-group-item pointer'
                style={{
                  textDecoration:
                    todo.doneAt !== null ? 'line-through' : 'none',
                }}
                onClick={() => this.toggleDoneTodo(i)}
                key={i}
              >
                <span>{todo.txt}</span>
              </li>
            );
          })}
        </ul>
        <span
          className={
            this.props.note.isPinned
              ? 'float-left text-dark'
              : 'float-left text-secondary '
          }
          onClick={() => {
            this.props.onSave(note);
          }}
        >
          <i className='fas fa-thumbtack pointer'></i>
        </span>
      </div>
    );
  }
}
