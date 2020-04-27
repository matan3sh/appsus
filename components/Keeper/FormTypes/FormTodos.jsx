<<<<<<< HEAD
import utilService from '../../../services/utilService.js';
=======
import utilService from '../../../services/utilService.js'
>>>>>>> 89749fd4febef13c017163b7598f606829ee2d96

export default class FormTodos extends React.Component {
  state = {
    todos: {
      id: '',
      type: '',
      info: {
        label: '',
<<<<<<< HEAD
        todos: [{ txt: '', doneAt: '' }],
=======
        todos: [
          { txt: '', doneAt: ''} 
        ] 
>>>>>>> 89749fd4febef13c017163b7598f606829ee2d96
      },
      style: { backgroundColor: '#' },
    },
  };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => {
      return {
        todos: {
          id: utilService.makeId(),
          type: 'NoteTodos',
          info: {
            ...prevState.todos.info,
            [field]: value,
<<<<<<< HEAD
            todos: [
              {
                ...prevState.todos.info,
                [field]: value,
              },
            ],
          },
=======
            todos: [{

              ...prevState.todos.info,
              [field]: value,
            }
            ]
          }, 
>>>>>>> 89749fd4febef13c017163b7598f606829ee2d96
          style: { backgroundColor: '#0031a2' },
        },
      };
    });
  };

<<<<<<< HEAD
=======

>>>>>>> 89749fd4febef13c017163b7598f606829ee2d96
  onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(789);
    this.props.onSaveTodos(this.state.todos);
    this.setState({
      todos: {
        id: utilService.makeId(),
        type: 'NoteTodos',
        info: {
          label: '',
<<<<<<< HEAD
          todos: [{ txt: '', doneAt: '' }],
=======
          todos: [
            { txt: '', doneAt: ''} 
          ] 
>>>>>>> 89749fd4febef13c017163b7598f606829ee2d96
        },
        style: { backgroundColor: '' },
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input
            name='label'
            type='text'
            className='form-control'
            placeholder='Add Label'
            value={this.state.todos.info.todos.label}
            onChange={this.onChange}
          />
          <input
            name='txt'
            type='text'
            className='form-control '
            placeholder='Add Todo'
            value={this.state.todos.info.todos.txt}
            onChange={this.onChange}
          />
          <button
            className='btn btn-dark '
            style={{ height: '40px', marginRight: '35px' }}
          >
            Add Note
          </button>
        </div>
      </form>
    );
  }
}
