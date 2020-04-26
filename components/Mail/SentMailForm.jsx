import utilService from '../../services/utilService.js';
import mailService from '../../services/mailService.js';

export default class SentMailForm extends React.Component {
  state = {
    mail: {
      id: utilService.makeId(),
      subject: '',
      message: '',
      sentAt: Date.now(),
      to: '',
      from: 'me',
      inbox: true,
      sent: true,
      important: false,
      read: false,
    },
  };

  onChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => {
      return {
        mail: {
          ...prevState.mail,
          [field]: value,
        },
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    mailService.sentMail(this.state.mail);
    this.setState({
      mail: {
        id: utilService.makeId(),
        subject: '',
        message: '',
        sendAt: Date.now(),
        to: '',
        from: 'me',
        inbox: true,
        sent: true,
        important: false,
        read: false,
      },
    });
    this.props.closeForm();
  };

  render() {
    return (
      <div className='row form-border mt-4 text-center'>
        <div className='col-11'>
          <h2>Send Email</h2>
        </div>
        <div className='col-1'>
          <button className='btn btn-dark' onClick={this.props.closeForm}>
            X
          </button>
        </div>
        <div className='col-12 mt-5'>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='To:'
                name='to'
                value={this.state.mail.to}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Subject:'
                name='subject'
                value={this.state.mail.subject}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <textarea
                className='form-control'
                placeholder='Message'
                rows='7'
                name='message'
                value={this.state.mail.message}
                onChange={this.onChange}
              />
            </div>
            <button className='btn btn-dark btn-block mb-3'>Send</button>
          </form>
        </div>
      </div>
    );
  }
}
