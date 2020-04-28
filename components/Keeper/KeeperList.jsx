import KeeperPreview from './KeeperPreview.jsx';

export default class KeeperList extends React.Component {
  state = {};

  render() {
    const { notes, onDelete, onUpdateNotes, onSave } = this.props;
    return (
      <React.Fragment>
        {notes.map((note) => (
          <div key={note.id} className='col-3'>
            <KeeperPreview
              note={note}
              noteType={note.type}
              onDelete={onDelete}
              onUpdateNotes={onUpdateNotes}
              onSave={onSave}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}
