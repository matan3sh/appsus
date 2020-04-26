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
    this.setState({ showInbox: true, showSent: false, showImportant: false });
  };

  displaySent = () => {
    this.setState({ showInbox: false, showSent: true, showImportant: false });
  };

  displayImportant = () => {
    this.setState({ showInbox: false, showSent: false, showImportant: true });
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
                displayInbox={this.displayInbox}
                displaySent={this.displaySent}
                displayImportant={this.displayImportant}
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
                  setImportant={this.setImportant}
                  setRead={this.setRead}
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
