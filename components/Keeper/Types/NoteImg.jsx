import keeperService from '../../../services/keeperService.js';
import ColorPicker from '../Cards/ColorPicker.jsx';
import EditImage from '../EditTypes/EditImage.jsx';

export default class NoteImg extends React.Component {
  state = {
    editImg: false,
    openColorPicker: false,
  };

  toggleImage = () => {
    this.setState(({ editImg }) => ({ editImg: !editImg }));
    this.props.onUpdateNotes();
  };

  openColorPicker = () => {
    this.setState(({ openColorPicker }) => ({
      openColorPicker: !openColorPicker,
    }));
  };

  changeColor = (color) => {
    let picker = '';
    switch (color) {
      case 'primary':
        picker = '#0275d8';
        break;
      case 'dark':
        picker = '#292b2c';
        break;
      case 'success':
        picker = '#5cb85c';
        break;
      case 'danger':
        picker = '#d9534f';
        break;
      case 'warning':
        picker = '#f0ad4e';
        break;
      case 'info':
        picker = '#5bc0de';
        break;
    }
    keeperService.saveBg(this.props.note, picker);
    this.props.onUpdateNotes();
  };

  render() {
    const { note, onDelete } = this.props;
    if (this.state.editImg)
      return (
        <EditImage
          note={note}
          toggleImage={this.toggleImage}
          onDelete={onDelete}
        />
      );
    else {
      return (
        <div
          className='card mt-3'
          style={{
            minWidth: '18rem',
            backgroundColor: `${note.style.backgroundColor}`,
          }}
        >
          <i
            className='fas fa-palette text-white pointer'
            onClick={this.openColorPicker}
          />
          {this.state.openColorPicker && (
            <ColorPicker changeColor={this.changeColor} />
          )}
          <span
            className='float-right text-light pointer'
            onClick={() => onDelete(note.id)}
          >
            <i className='fas fa-trash-alt'></i>
          </span>
          <span
            className='float-right text-light pointer mr-2'
            onClick={() => this.setState({ editImg: true })}
          >
            <i className='fas fa-edit'></i>
          </span>
          <img
            className='card-img-top radius'
            src={note.info.url}
            alt='Card Image cap'
          />
          <div className='card-body'>
            <p className='card-text text-light'>{note.info.title}</p>
          </div>
        </div>
      );
    }
  }
}
