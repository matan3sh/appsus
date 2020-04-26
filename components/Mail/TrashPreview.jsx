const { Link } = ReactRouterDOM;

export default class TrashPreview extends React.Component {
  render() {
    const { mail } = this.props;
    return (
      <div className='list-group-item list-group-item-action'>
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
          {/* <div
            className='read-unread-outer pointer mr-2'
            style={{ fontSize: '24px' }}
            onClick={() => {
              this.setState((prevState) => ({
                setTrash: !prevState.setTrash,
              }));

              onDelete(mail, this.state.setTrash);
            }}
          >
            <div
              className='read-unread-inner'
              style={{ width: this.state.setTrash ? '100%' : '0%' }}
            ></div>
          </div> */}
        </small>
      </div>
    );
  }
}
