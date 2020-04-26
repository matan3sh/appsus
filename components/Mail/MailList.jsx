import InboxPreview from './InboxPreview.jsx';
import SentPreview from './SentPreview.jsx';
import ImportantPreview from './ImportantPreview.jsx';

const MailList = ({
  showInbox,
  showSent,
  showImportant,
  mails,
  setImportant,
  setRead,
}) => {
  if (showInbox) {
    let inboxMails = mails.filter((mail) => mail.inbox);
    return (
      <div className='list-group'>
        {inboxMails.map((mail) => (
          <InboxPreview
            key={mail.id}
            mail={mail}
            setImportant={setImportant}
            setRead={setRead}
          />
        ))}
      </div>
    );
  }
  if (showSent) {
    let sentMails = mails.filter((mail) => mail.sent);
    return (
      <div className='list-group'>
        {sentMails.map((mail) => (
          <SentPreview key={mail.id} mail={mail} />
        ))}
      </div>
    );
  }
  if (showImportant) {
    let importantMails = mails.filter((mail) => mail.important);
    return (
      <div className='list-group'>
        {importantMails.map((mail) => (
          <ImportantPreview key={mail.id} mail={mail} setRead={setRead} />
        ))}
      </div>
    );
  }
};
export default MailList;
