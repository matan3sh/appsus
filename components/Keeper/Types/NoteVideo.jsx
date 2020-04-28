import EditVideo from '../EditTypes/EditVideo.jsx';

export default class NoteVideo extends React.Component {
  state = { editVideo: false };

  toggleVideo = () => {
    this.setState(({ editVideo }) => ({ editVideo: !editVideo }));
    this.props.onUpdateNotes();
  };

  render() {
    const { note, onDelete } = this.props;
    if (this.state.editVideo)
      return (
        <EditVideo
          note={note}
          toggleVideo={this.toggleVideo}
          onDelete={onDelete}
        />
      );
    return (
      <div className='card mt-3' style={{ maxWidth: '18rem' }}>
        <span
          className='float-right text-dark pointer'
          onClick={() => onDelete(note.id)}
        >
          X
        </span>
        <span
          className='float-right text-dark pointer mr-2'
          onClick={() => this.setState({ editVideo: true })}
        >
          <i className='fas fa-edit'></i>
        </span>
        <iframe
          className='card-img-top'
          src={note.info.url}
          alt='Card Video cap'
        />
        <div className='card-body'>
          <p className='card-text'>{note.info.title}</p>
        </div>
      </div>
    );
  }
}
