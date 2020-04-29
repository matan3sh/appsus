import utilService from '../../../services/utilService.js';
import eventBus from '../../../services/eventBusService.js'

export default class FormImage extends React.Component {
  state = {
    image: {
      id: '',
      type: '',
      info: {
        url: '',
        title: '',
      },
      style: { backgroundColor: '#' },
    },
  };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => {
      return {
        image: {
          id: utilService.makeId(),
          type: 'NoteImg',
          info: {
            ...prevState.image.info,
            [field]: value,
          },
          style: { backgroundColor: '#0071e2' },
        },
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.image.info.url === '' || this.state.image.info.title === '') {
      eventBus.emit('show-msg', {
        txt: 'Error',
        body: 'Please fill in all fields',
      });
      return;
    }
    this.props.onSaveImage(this.state.image);
    this.setState({
      image: {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
          url: '',
          title: '',
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
            name='title'
            type='text'
            className='form-control'
            placeholder='Enter Image Title'
            value={this.state.image.info.title}
            onChange={this.onChange}
          />
          <input
            name='url'
            type='text'
            className='form-control'
            placeholder='Enter Image URL'
            value={this.state.image.info.url}
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
