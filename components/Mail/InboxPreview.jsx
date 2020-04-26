const { Link } = ReactRouterDOM;

export default class InboxPreview extends React.Component {
  state = {
    isImportant: this.props.mail.important ? true : false,
    setRead: this.props.mail.read ? true : false,
  };
  render() {
    const { mail, setImportant, setRead } = this.props;
    return (
      <div className='list-group-item list-group-item-action'>
        <Link to={`/mail/${mail.id}`}>
          <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-1'>{mail.subject}</h5>
            <small>{new Date(mail.sentAt).toDateString()}</small>
          </div>
          <p className='mb-1'>{mail.message}</p>
          <small>From: {mail.from}</small>
        </Link>
        <small className='pointer' style={{ float: 'right' }}>
          <div
            className='read-unread-outer mr-2'
            style={{ fontSize: '24px' }}
            onClick={() => {
              this.setState((prevState) => ({
                setRead: !prevState.setRead,
              }));

              setRead(mail, this.state.setRead);
            }}
          >
            <div
              className='read-unread-inner'
              style={{ width: this.state.setRead ? '100%' : '0%' }}
            ></div>
          </div>
          <div
            className='stars-outer'
            style={{ fontSize: '24px' }}
            onClick={() => {
              this.setState((prevState) => ({
                isImportant: !prevState.isImportant,
              }));

              setImportant(mail, this.state.isImportant);
            }}
          >
            <div
              className='stars-inner'
              style={{ width: this.state.isImportant ? '100%' : '0%' }}
            ></div>
          </div>
        </small>
      </div>
    );
  }
}
