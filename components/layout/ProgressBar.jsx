const ProgressBar = () => {
  return (
    <div className='progress mt-3'>
      <div
        className='progress-bar progress-bar-striped progress-bar-animated'
        role='progressbar'
        aria-valuenow='75'
        aria-valuemin='0'
        aria-valuemax='100'
        style={{ width: '75%' }}
      >
        7.5GB of 10GB Used (75%)
      </div>
    </div>
  );
};

export default ProgressBar;
