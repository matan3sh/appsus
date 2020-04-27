const { Link } = ReactRouterDOM;

export default class SentPreview extends React.Component {
  state = {
    setTrash: this.props.mail.trash ? true : false,
  };

  render() {
    const { mail, setTrash } = this.props;
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
            <span className='avatar bg-info'>
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
              <small>
                <span className='bold-grey'>From:</span> {mail.from}
              </small>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
