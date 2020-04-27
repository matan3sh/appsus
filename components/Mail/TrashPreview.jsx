import eventBus from '../../services/eventBusService.js';

const { Link } = ReactRouterDOM;

export default class TrashPreview extends React.Component {
  state = {
    setBack: this.props.mail.preMode ? true : false,
  };
  render() {
    const { mail, setBack, onRemoveMail } = this.props;
    return (
      <div className='list-group-item list-group-item-action'>
        <div className='row'>
          <div className='col-2'>
            <span className='avatar bg-danger'>
              <p>{mail.from.slice(0, 2)}</p>
            </span>
          </div>
          <div className='col-10'>
            <Link to={`/mail/${mail.id}`}>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>{mail.subject}</h5>
                <small>{new Date(mail.sentAt).toDateString()}</small>
              </div>
              <p className='mb-1'>
                {mail.message.length > 60 ? (
                  <span>
                    {mail.message.slice(0, 60)}{' '}
                    <span className='small-font'>...Continue Reading</span>
                  </span>
                ) : (
                  mail.message
                )}
              </p>
            </Link>
            <small>
              <span className='bold-grey'>From:</span> {mail.from}
            </small>
            <small style={{ float: 'right' }}>
              <span
                className='float-right pointer text-danger'
                onClick={() => {
                  eventBus.emit('show-msg', {
                    txt: 'Email Removed Successfully',
                    body: '',
                  });
                  onRemoveMail(mail);
                }}
              >
                <i
                  className='fas fa-calendar-times'
                  style={{ fontSize: '22px' }}
                />
              </span>
              <span
                className='float-right pointer text-success pr-2'
                onClick={() =>
                  this.setState((prevState) => {
                    ({ setBack: !prevState.setBack });
                    setBack(mail);
                  })
                }
              >
                <i className='fas fa-undo' style={{ fontSize: '22px' }} />
              </span>
            </small>
          </div>
        </div>
      </div>
    );
  }
}
