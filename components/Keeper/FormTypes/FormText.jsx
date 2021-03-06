import utilService from '../../../services/utilService.js';
import eventBus from '../../../services/eventBusService.js'

export default class FormText extends React.Component {
  state = {
    text: {
      id: '',
      type: '',
      info: {
        txt: '',
      },
      style: { backgroundColor: '#' },
    },
  };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => {
      return {
        text: {
          id: utilService.makeId(),
          type: 'NoteText',
          isPinned: false,
          info: {
            ...prevState.text.info,
            [field]: value,
          },
          style: { backgroundColor: '#0031a2' },
        },
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.info.txt === '') {
      eventBus.emit('show-msg', {
        txt: 'Error',
        body: 'Please fill in the field',
      });
      return;
    }
    this.props.onSaveText(this.state.text);
    this.setState({
      text: {
        id: utilService.makeId(),
        type: 'NoteText',
        info: {
          txt: '',
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
            name='txt'
            type='text'
            className='form-control'
            placeholder='Enter Text'
            value={this.state.text.info.txt}
            onChange={this.onChange}
          />
          <button
            className='btn btn-dark mt-1'
            style={{ height: '40px', marginRight: '35px' }}
            onClick={() => {
              eventBus.emit('show-msg', {
                txt: 'Text note created Successfully',
                body: '',
              });
            }}
          >
            Add Note
          </button>
        </div>
      </form>
    );
  }
}
