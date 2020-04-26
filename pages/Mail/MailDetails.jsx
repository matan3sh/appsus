import mailService from '../../services/mailService.js';

const { Link } = ReactRouterDOM;

export default class MailDetails extends React.Component {
  state = {
    mail: null,
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
    console.log(this.prevNext);
  };

  render() {
    const { mail } = this.state;
    const Loading = <p>Loading...</p>;
    return !mail ? (
      Loading
    ) : (
      <React.Fragment>
        <button
          className='btn btn-primary mt-3'
          onClick={() => this.props.history.goBack()}
        >
          Previous Page
        </button>
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
            <h5 className='card-title float-right grey mr-3'>
              From {mail.from} in {new Date(mail.sentAt).toDateString()}
            </h5>
          </div>
          <div className='card-body text-left'>
            <p className='card-text'>{mail.message}</p>
          </div>
          <div className='card-footer text-muted'>
            <Link to={`/mail/${this.prevNext.prevId}`}>
              <button className='btn btn-dark'>Previous Maill</button>
            </Link>{' '}
            <Link to={`/mail/${this.prevNext.nextId}`}>
              <button className='btn btn-dark'>Next Mail</button>
            </Link>{' '}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
