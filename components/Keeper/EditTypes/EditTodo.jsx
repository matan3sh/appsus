import keeperService from '../../../services/keeperService.js';

export default class EditTodo extends React.Component {
  state = {
    txt: this.props.note.info.txt,
    label: this.props.note.info.label,
  };

  componentDidMount() {
    let str = '';
    this.props.note.info.todos.forEach((todo) => (str += todo.txt));
    let txt = str.split(' ').join(',');
    this.setState({ txt });
  }

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => {
      return {
        ...prevState.txt,
        [field]: value,
      };
    });
  };

  onUpdate = () => {
    let todos = this.state.txt.split(',');
    const newTodos = todos.map((todo) => {
      return { txt: todo, createdAt: null };
    });
    const noteObj = {
      id: this.props.note.id,
      type: this.props.note.type,
      isPinned: this.props.note.isPinned,
      info: {
        label: this.state.label,
        todos: newTodos,
      },
    };
    keeperService.update(noteObj);
    this.props.toggleTodo();
  };

  render() {
    const { onDelete, note } = this.props;
    return (
      <div
        className='card bg-secondary border-primary mb-3 mt-3'
        style={{ maxWidth: '18rem' }}
      >
        <span
          className='float-right text-light pointer'
          onClick={() => onDelete(note.id)}
        >
          <i className='fas fa-trash-alt'></i>
        </span>
        <span className='float-right text-light pointer mr-2'>
          <i
            className='fas fa-arrow-alt-circle-left'
            onClick={this.props.toggleTodo}
          />
        </span>
        <div className='card-body text-light'>
          <h5 className='card-title'></h5>
          <p className='card-text'>
            <input
              type='text'
              className='form-control'
              placeholder=''
              name='label'
              value={this.state.label}
              onChange={this.onChange}
            />
            <input
              type='text'
              className='form-control'
              placeholder=''
              name='txt'
              value={this.state.txt || ''}
              onChange={this.onChange}
            />
            <button className='btn btn-light text-dark' onClick={this.onUpdate}>
              Update
            </button>
          </p>
        </div>
      </div>
    );
  }
}
