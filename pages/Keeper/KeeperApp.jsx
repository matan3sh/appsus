import keeperService from '../../services/keeperService.js';
import KeeperList from '../../components/Keeper/KeeperList.jsx';
import KeeperForm from '../../components/Keeper/KeeperForm.jsx';

export default class KeeperApp extends React.Component {
  state = {
    notes: null,
    filterBy: null,
    addNoteFlag: false,
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

  render() {
    const { notes } = this.state;
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-md-8'>
            <KeeperForm onUpdateNotes={this.onUpdateNotes} />
          </div>
        </div>
        <div className='row card-columns mt-1'>{notes && <KeeperList notes={notes} />}</div>
      </React.Fragment>
    );
  }
}
