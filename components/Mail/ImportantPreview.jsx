const { Link } = ReactRouterDOM;

export default class ImportantPreview extends React.Component {
  state = {
    setRead: this.props.mail.read ? true : false,
    setTrash: this.props.mail.trash ? true : false,
  };
  render() {
    const { mail, setRead, setTrash } = this.props;
    return (
      <div className='list-group-item list-group-item-action'>
        <span
          className='float-right pointer'
          onClick={() => {
            this.setState((prevState) => ({
              setTrash: !prevState.setTrash,
            }));

            setTrash(mail, this.state.setTrash);
          }}
        >
          X
        </span>
        <div className='row'>
          <div className='col-2'>
            <span class='avatar bg-warning'>
              <p>{mail.from.slice(0, 2)}</p>
            </span>
          </div>
          <div className='col-10'>
            <Link to={`/mail/${mail.id}`}>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>{mail.subject}</h5>
                <small>{new Date(mail.sentAt).toDateString()}</small>
              </div>
              <p className='mb-1'>{mail.message}</p>
            </Link>
            <small>
              <span className='bold-grey'>From:</span> {mail.from}
            </small>
            <small style={{ float: 'right' }}>
              <div
                className='read-unread-outer pointer mr-2'
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
            </small>
          </div>
        </div>
      </div>
    );
  }
}
