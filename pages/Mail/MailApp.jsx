import mailService from '../../services/mailService.js';
import ProgressBar from '../../components/layout/ProgressBar.jsx';
import MailSideMenu from '../../components/Mail/layout/MailSideMenu.jsx';
import MailList from '../../components/Mail/MailList.jsx';
import SentMailForm from '../../components/Mail/SentMailForm.jsx';

export default class MailApp extends React.Component {
  state = {
    mails: null,
    showInbox: true,
    showSent: false,
    showImportant: false,
    showSentMailForm: false,
    showTrash: false,
    filterBy: null,
  };

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    mailService
      .query(this.state.filterBy)
      .then((mails) => this.setState({ mails }));
  };

  displayInbox = () => {
    this.setState({
      showInbox: true,
      showSent: false,
      showImportant: false,
      showTrash: false,
    });
  };

  displaySent = () => {
    this.setState({
      showInbox: false,
      showSent: true,
      showImportant: false,
      showTrash: false,
    });
  };

  displayImportant = () => {
    this.setState({
      showInbox: false,
      showSent: false,
      showImportant: true,
      showTrash: false,
    });
  };

  displayTrash = () => {
    this.setState({
      showInbox: false,
      showSent: false,
      showImportant: false,
      showTrash: true,
    });
  };

  setImportant = (mail, isImportant) => {
    mail.important = !isImportant;
    mailService.save(mail);
    this.loadMails();
  };

  setRead = (mail, isRead) => {
    mail.read = !isRead;
    mailService.save(mail);
    this.loadMails();
  };

  setTrash = (mail, isTrash) => {
    mail.trash = !isTrash;
    mail.inbox = false;
    mail.important = false;
    mail.sent = false;
    mailService.save(mail);
    this.loadMails();
  };

  getAvaliableSpace = () => {
    return mailService.getAvaliableSpace();
  };

  closeForm = () => {
    this.setState({ showSentMailForm: false });
  };

  render() {
    const unReadLength = mailService.getUnReadLength();
    const {
      mails,
      showInbox,
      showSent,
      showImportant,
      showTrash,
      showSentMailForm,
    } = this.state;
    return (
      <React.Fragment>
        {showSentMailForm ? (
          <SentMailForm closeForm={this.closeForm} />
        ) : (
          <div className='row mt-5'>
            <div className='col-3'>
              <MailSideMenu
                showInbox={showInbox}
                showSent={showSent}
                showImportant={showImportant}
                showTrash={showTrash}
                displayInbox={this.displayInbox}
                displaySent={this.displaySent}
                displayImportant={this.displayImportant}
                displayTrash={this.displayTrash}
                unReadLength={unReadLength}
              />
              <div className='text-center mt-2'>
                <button
                  className='new-mail-btn'
                  onClick={() => this.setState({ showSentMailForm: true })}
                >
                  <i className='fas fa-plus' /> New Mail
                </button>
              </div>
              <ProgressBar space={this.getAvaliableSpace()} />
            </div>
            <div className='col-9'>
              {mails && (
                <MailList
                  showInbox={showInbox}
                  showSent={showSent}
                  showImportant={showImportant}
                  showTrash={showTrash}
                  setImportant={this.setImportant}
                  setRead={this.setRead}
                  setTrash={this.setTrash}
                  mails={mails}
                />
              )}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
