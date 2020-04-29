import mailService from '../../services/mailService.js';
import ReplayList from '../../components/Mail/Replay/ReplayList.jsx';

const { Link } = ReactRouterDOM;

export default class MailDetails extends React.Component {
  state = {
    mail: null,
    replayForm: false,
    success: false,
  };

  componentDidMount() {
    this.loadMail();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.mailId !== this.props.match.params.mailId) {
      this.loadMail();
    }
  }

  loadMail = () => {
    const id = this.props.match.params.mailId;
    mailService.getById(id).then((mail) => {
      this.setState({ mail });
    });
    this.prevNext = mailService.getNextPrevMail(id);
  };

  toggleReplayForm = () => {
    this.setState(({ replayForm }) => ({ replayForm: !replayForm }));
  };

  onSentSuccess = () => {
    this.setState({ success: true });
  };

  render() {
    const { mail, replayForm } = this.state;
    const Loading = <p>Loading...</p>;
    return !mail ? (
      Loading
    ) : (
      <React.Fragment>
        <div className='row'>
          <div className='col-2'>
            <button
              className='btn btn-primary mt-3'
              onClick={() => this.props.history.goBack()}
            >
              Previous Page
            </button>
          </div>
          <div className='col-10 text-right mt-3'>
            <Link to={`/mail/${this.prevNext.prevId}`}>
              <button className='btn btn-dark'>Previous Maill</button>
            </Link>{' '}
            <Link to={`/mail/${this.prevNext.nextId}`}>
              <button className='btn btn-dark'>Next Mail</button>
            </Link>{' '}
          </div>
        </div>
        <div className='card text-center mt-3'>
          <div className='card-header'>
            <p className='float-left'>
              <i className='fas fa-envelope-open' />
              <span className='grey'> Subject:</span>{' '}
              <span className='bold-grey'>{mail.subject}</span>{' '}
            </p>
            {mail.inbox && (
              <i className='badge badge-primary float-right'>Inbox</i>
            )}
            {mail.sent && (
              <i className='badge badge-success float-right'>Sent</i>
            )}
            {mail.important && (
              <i className='badge badge-warning float-right mr-3'>Important </i>
            )}
            {mail.trash && (
              <i className='badge badge-danger float-right mr-3'>Trash </i>
            )}
            <h5 className='card-title float-right grey mr-3'>
              From {mail.from} in {new Date(mail.sentAt).toDateString()}
            </h5>
          </div>
          <div className='card-body text-left'>
            <p className='card-text'>{mail.message}</p>
          </div>
          <div
            className='card-footer text-muted text-left pointer'
            onClick={this.toggleReplayForm}
          >
            {mail.inbox && <i className='fas fa-reply fa-2x' />}
          </div>
        </div>
        <ReplayList
          replays={mail.replays}
          mail={mail}
          replayForm={replayForm}
          toggleReplayForm={this.toggleReplayForm}
        />
      </React.Fragment>
    );
  }
}
