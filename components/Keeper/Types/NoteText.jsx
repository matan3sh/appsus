import keeperService from '../../../services/keeperService.js';
import ColorPicker from '../Cards/ColorPicker.jsx';
import EditText from '../EditTypes/EditText.jsx';

export default class NoteText extends React.Component {
  state = {
    editText: false,
    openColorPicker: false,
  };

  toggleText = () => {
    this.setState(({ editText }) => ({ editText: !editText }));
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
    if (this.state.editText)
      return (
        <EditText
          note={note}
          toggleText={this.toggleText}
          onDelete={onDelete}
        />
      );
    else {
      return (
        <div
          className={`card mb-3 mt-3`}
          style={{
            maxWidth: '18rem',
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
            onClick={() => this.setState({ editText: true })}
          >
            <i className='fas fa-edit'></i>
          </span>
          <div className='card-body text-light'>
            <h5 className='card-title'></h5>
            <p className='card-text'>{note.info.txt}</p>
          </div>
        </div>
      );
    }
  }
}
