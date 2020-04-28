import keeperService from '../../../services/keeperService.js';

export default class EditImage extends React.Component {
  state = {
    url: this.props.note.info.url,
    title: this.props.note.info.title,
  };

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
    const noteObj = {
      id: this.props.note.id,
      type: this.props.note.type,
      isPinned: this.props.note.isPinned,
      info: {
        url: this.state.url,
        title: this.state.title,
      },
    };
    keeperService.update(noteObj);
    this.props.toggleImage();
  };

  render() {
    const { onDelete, note } = this.props;
    return (
      <div
        className='card bg-secondary border-primary mb-3 mt-3'
        style={{ minWidth: '18rem' }}
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
            onClick={this.props.toggleImage}
          />
        </span>
        <div className='card-body text-light'>
          <h5 className='card-title'></h5>
          <p className='card-text'>
            <input
              type='text'
              className='form-control'
              placeholder='https://www...'
              name='url'
              value={this.state.url}
              onChange={this.onChange}
            />
            <input
              type='text'
              className='form-control'
              placeholder=''
              name='title'
              value={this.state.title}
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
