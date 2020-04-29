import eventBus from '../../../services/eventBusService.js';
import mailService from '../../../services/mailService.js';
import utilService from '../../../services/utilService.js';

export default class ReplayForm extends React.Component {
  state = { message: '' };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.message === '') {
      eventBus.emit('show-msg', {
        txt: 'Error',
        body: 'You Cant Send an Empty Message',
      });
      return;
    }
    let replayObj = {
      id: utilService.makeId(),
      from: 'me',
      to: this.props.mail.from,
      sentAt: Date.now(),
      message: this.state.message,
    };
    if (!this.props.mail.replays) this.props.mail.replays = [];
    this.props.mail.replays.unshift(replayObj);
    let newMail = {
      id: utilService.makeId(),
      subject: `RE: ${this.props.mail.subject}`,
      message: this.state.message,
      from: 'me',
      to: 'me',
      sentAt: Date.now(),
      inbox: true,
      sent: true,
      important: false,
      read: false,
      trash: false,
      preMode: '',
    };
    mailService.save(this.props.mail);
    mailService.sentMail(newMail);
    eventBus.emit('show-msg', {
      txt: 'Success',
      body: 'Replay Sent',
    });
    this.props.toggleReplayForm();
  };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => {
      return {
        ...prevState.message,
        [field]: value,
      };
    });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ padding: '10px', border: '#ccc 1px dotted' }}
      >
        <div className='form-group'>
          <div className='badge badge-dark'>
            Replay to: {this.props.mail.from}
          </div>
          <small id='emailHelp' className='form-text text-muted'>
            Subject: {this.props.mail.subject}
          </small>
        </div>
        <div className='form-group'>
          <textarea
            className='form-control'
            placeholder='Message'
            rows='7'
            name='message'
            value={this.state.message}
            onChange={this.onChange}
          />
        </div>
        <button type='submit' className='btn btn-dark btn-block'>
          Sent
        </button>
      </form>
    );
  }
}
