const { Link } = ReactRouterDOM;

const SentPreview = ({ mail }) => {
  return (
    <Link to={`/mail/${mail.id}`}>
      <div className='list-group-item list-group-item-action'>
        <div className='d-flex w-100 justify-content-between'>
          <h5 className='mb-1'>{mail.subject}</h5>
          <small>{new Date(mail.sentAt).toDateString()}</small>
        </div>
        <p className='mb-1'>{mail.message}</p>
        <small>From: {mail.from}</small>
      </div>
    </Link>
  );
};

export default SentPreview;
