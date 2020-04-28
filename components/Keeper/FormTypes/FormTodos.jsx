import utilService from '../../../services/utilService.js';

export default class FormTodos extends React.Component {
  state = {
    todos: {
      txt: '',
      label: '',
    },
  };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => {
      return {
        todos: {
          ...prevState.todos,
          [field]: value,
        },
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let todos = this.state.todos.txt.split(',');
    let tempObj = [];
    for (let i = 0; i < todos.length; i++) {
      tempObj.push({ txt: todos[i], doneAt: null });
    }
    const todosObj = {
      id: utilService.makeId(),
      type: 'NoteTodos',
      isPinned: false,
      info: {
        label: this.state.todos.label,
        todos: tempObj,
      },
    };
    this.props.onSaveTodos(todosObj);
    this.setState({ todos: { txt: '', label: '' } });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input
            name='label'
            type='text'
            className='form-control'
            placeholder='Enter List Title'
            value={this.state.todos.label}
            onChange={this.onChange}
          />
          <input
            name='txt'
            type='text'
            className='form-control '
            placeholder='Enter Comma Separated List'
            value={this.state.todos.txt}
            onChange={this.onChange}
          />
          <button
            className='btn btn-dark mt-1'
            style={{ height: '40px', marginRight: '35px' }}
          >
            Add Note
          </button>
        </div>
      </form>
    );
  }
}
