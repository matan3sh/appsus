const MailSideMenu = ({
  showInbox,
  showSent,
  showImportant,
  showTrash,
  displayInbox,
  displaySent,
  displayImportant,
  displayTrash,
  unReadLength,
}) => {
  return (
    <div className='list-group'>
      <a
        className={`list-group-item ${showInbox ? 'active' : ''} pointer`}
        onClick={() => displayInbox()}
      >
        <i className='fas fa-inbox'></i> Inbox{' '}
        {unReadLength > 0 ? (
          <span className='badge badge-primary'>{unReadLength} New</span>
        ) : (
          ''
        )}
      </a>
      <a
        className={`list-group-item ${showImportant ? 'active' : ''} pointer`}
        onClick={() => displayImportant()}
      >
        <i className='fas fa-star'></i> Important
      </a>
      <a
        className={`list-group-item ${showSent ? 'active' : ''} pointer`}
        onClick={() => displaySent()}
      >
        <i className='fas fa-paper-plane'></i> Sent
      </a>
      <a className='list-group-item'>
        <i className='fas fa-exclamation-circle'></i> Spam{' '}
        <span className='badge badge-danger'>154 New</span>
      </a>
      <a
        className={`list-group-item ${showTrash ? 'active' : ''} pointer`}
        onClick={() => displayTrash()}
      >
        <i className='fas fa-trash'></i> Trash
      </a>
    </div>
  );
};

export default MailSideMenu;
