import InboxPreview from './InboxPreview.jsx';
import SentPreview from './SentPreview.jsx';
import ImportantPreview from './ImportantPreview.jsx';
import TrashPreview from './TrashPreview.jsx';

const MailList = ({
  showInbox,
  showSent,
  showImportant,
  showTrash,
  mails,
  setImportant,
  setRead,
  setTrash,
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
            setTrash={setTrash}
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
          <SentPreview key={mail.id} mail={mail} setTrash={setTrash} />
        ))}
      </div>
    );
  }
  if (showImportant) {
    let importantMails = mails.filter((mail) => mail.important);
    return (
      <div className='list-group'>
        {importantMails.map((mail) => (
          <ImportantPreview
            key={mail.id}
            mail={mail}
            setRead={setRead}
            setTrash={setTrash}
          />
        ))}
      </div>
    );
  }
  if (showTrash) {
    let trashMails = mails.filter((mail) => mail.trash);
    return (
      <div className='list-group'>
        {trashMails.map((mail) => (
          <TrashPreview key={mail.id} mail={mail} />
        ))}
      </div>
    );
  }
};
export default MailList;
