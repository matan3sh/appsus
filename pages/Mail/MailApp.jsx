import mailService from '../../services/mailService.js';
import ProgressBar from '../../components/layout/ProgressBar.jsx';
import MailSideMenu from '../../components/Mail/layout/MailSideMenu.jsx';
import MailList from '../../components/Mail/MailList.jsx';
import SentMailForm from '../../components/Mail/SentMailForm.jsx';
import MailFilter from '../../components/Mail/MailFilter.jsx';
import MailFilterBy from '../../components/Mail/MailFilterBy.jsx';

export default class MailApp extends React.Component {
  state = {
    mails: null,
    showInbox: true,
    showSent: false,
    showImportant: false,
    showSentMailForm: false,
    showTrash: false,
    filterBy: null,
    filterByCategory: '',
  };

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    mailService
      .query(this.state.filterBy)
      .then((mails) => this.setState({ mails }));
  };

  loadMailByCategory = () => {
    mailService
      .queryBy(this.state.filterByCategory)
      .then((mails) => this.setState({ mails }));
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, () => this.loadMails());
  };

  onSetFilterByCategory = (filterByCategory) => {
    this.setState({ filterByCategory }, () => this.loadMailByCategory());
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
    if (mail.inbox || mail.important) mail.preMode = 'inbox';
    else if (mail.sent) mail.preMode = 'sent';
    mail.trash = !isTrash;
    mail.inbox = false;
    mail.important = false;
    mail.sent = false;
    mailService.save(mail);
    this.loadMails();
  };

  setBack = (mail) => {
    if (mail.preMode === 'inbox') mail.inbox = true;
    else if (mail.preMode === 'sent') mail.sent = true;
    mail.trash = false;
    mail.preMode = '';
    mailService.save(mail);
    this.loadMails();
  };

  onRemoveMail = (mail) => {
    mailService
      .remove(mail)
      .then(() => {
        console.log('Mail Was Removed Successfuly');
      })
      .catch((err) => console.log(err));
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
              <div className='row'>
                <div className='col-9'>
                  <MailFilter onSetFilter={this.onSetFilter} />
                </div>
                <div className='col-3'>
                  <div className='text-center mt-1'>
                    <button
                      className='btn btn-primary btn-sm'
                      style={{ width: '40px', margin: '0' }}
                      onClick={() => this.setState({ showSentMailForm: true })}
                    >
                      <i className='fas fa-envelope-square' />
                    </button>
                  </div>
                </div>
              </div>
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

              <ProgressBar space={this.getAvaliableSpace()} />
            </div>
            <div className='col-9'>
              <MailFilterBy
                onSetFilterByCategory={this.onSetFilterByCategory}
              />
              {mails && (
                <MailList
                  showInbox={showInbox}
                  showSent={showSent}
                  showImportant={showImportant}
                  showTrash={showTrash}
                  setImportant={this.setImportant}
                  setRead={this.setRead}
                  setTrash={this.setTrash}
                  setBack={this.setBack}
                  onRemoveMail={this.onRemoveMail}
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
