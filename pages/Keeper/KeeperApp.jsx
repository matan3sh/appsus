import keeperService from '../../services/keeperService.js';
import KeeperList from '../../components/Keeper/KeeperList.jsx';
import KeeperForm from '../../components/Keeper/KeeperForm.jsx';

export default class KeeperApp extends React.Component {
  state = {
    notes: null,
    filterBy: null,
    addNoteFlag: false,
    isEditText: null,
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    keeperService
      .query(this.state.filterBy)
      .then((notes) => this.setState({ notes }));
  };

  onUpdateNotes = () => {
    this.setState(({ addNoteFlag }) => ({ addNoteFlag: !addNoteFlag }));
  };

  onDelete = (noteId) => {
    keeperService
      .remove(noteId)
      .then(() => console.log('Note Removed'))
      .catch((err) => console.log(err));
    this.loadNotes();
  };

  render() {
    const { notes } = this.state;
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <KeeperForm onUpdateNotes={this.onUpdateNotes} />
          </div>
          <div className='col-md-2'></div>
        </div>
        <div className='card-columns mt-1'>
          {notes && (
            <KeeperList
              notes={notes}
              onDelete={this.onDelete}
              onUpdateNotes={this.onUpdateNotes}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}
