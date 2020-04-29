const ReplayPreview = ({ replay, mail }) => {
  return (
    <div className='card bg-light text-center mt-3'>
      <div className='card-header'>
        <p className='float-left'>
          <i className='fab fa-replyd fa-2x'></i>
          <span className='grey'> Replay to: </span>{' '}
          <span className='bold-grey'> {replay.to}</span>{' '}
        </p>
        <i className='badge badge-info float-right mr-3'>Replay </i>
        <h5 className='card-title float-right grey mr-3'>
          From {replay.from} in {new Date(replay.sentAt).toDateString()}
        </h5>
      </div>
      <div className='card-body text-left'>
        <p className='card-text'>{replay.message}</p>
        <hr />
        <div className='text-grey' style={{ fontSize: '14px' }}>
          <h4 style={{ fontSize: '16px' }}>
            {' '}
            <span
              style={{ fontWeight: 'bolder', color: '#000', fontSize: '12px' }}
            >
              Subject :
            </span>{' '}
            <span>{mail.subject}</span>
          </h4>
          {mail.message}
        </div>
      </div>
      <div className='card-footer text-muted'></div>
    </div>
  );
};

export default ReplayPreview;
