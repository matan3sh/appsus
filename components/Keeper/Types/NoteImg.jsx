import EditImage from '../EditTypes/EditImage.jsx'

export default class NoteImg extends React.Component {
  state = {
    editImg: false,
  }

  toggleImage = () => {
    this.setState(({ editImg }) => ({ editImg: !editImg }));
    this.props.onUpdateNotes();
  }

  render() {
    const { note, onDelete } = this.props;
    if (this.state.editImg)
    return (
      <EditImage
        note ={note}
        toggleImage={this.toggleImage}
        onDelete={onDelete}
        />
    );
    else {
      return (
        <div
          className='card mt-3'
          style={{ maxWidth: '18rem' }}
        >
          <span
            className='float-right text-dark pointer'
            onClick={() => onDelete(note.id)}
          >
            <i className='fas fa-trash-alt'></i>
          </span>
          <span
            className='float-right text-dark pointer mr-2'
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
          <p className='card-text'>{note.info.title}</p>
        </div>
      </div>
      );
    }
  }
}
