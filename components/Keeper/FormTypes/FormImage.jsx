import utilService from '../../../services/utilService.js';

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
    console.log(123);
    this.props.onSaveImage(this.state.image);
    this.setState({
      image: {
        id: utilService.makeId(),
        type: 'NoteImg',
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
