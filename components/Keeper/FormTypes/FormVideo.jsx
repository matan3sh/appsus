import utilService from '../../../services/utilService.js';
import eventBus from '../../../services/eventBusService.js';

export default class FormVideo extends React.Component {
  state = {
    video: {
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
        video: {
          id: utilService.makeId(),
          type: 'NoteVideo',
          info: {
            ...prevState.video.info,
            [field]: value,
          },
          style: { backgroundColor: '#0046a5' },
        },
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.video.info.url === '' || this.state.video.info.title === '') {
      eventBus.emit('show-msg', {
        txt: 'Error',
        body: 'Please fill in all fields',
      });
      return;
    }
    this.props.onSaveVideo(this.state.video);
    this.setState({
      video: {
        id: utilService.makeId(),
        type: 'NoteVideo',
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
            placeholder='Enter Video Title'
            value={this.state.video.info.title}
            onChange={this.onChange}
          />
          <input
            name='url'
            type='text'
            className='form-control '
            placeholder='Enter Video URL (youtube.com/embed/...)'
            value={this.state.video.info.url}
            onChange={this.onChange}
          />
          <button
            className='btn btn-dark mt-1'
            style={{ height: '40px', marginRight: '35px' }}
            onClick={() => {
              eventBus.emit('show-msg', {
                txt: 'Video note created Successfully',
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
