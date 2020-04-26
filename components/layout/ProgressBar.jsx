const ProgressBar = ({ space }) => {
  return (
    <React.Fragment>
      <div className='progress mt-3'>
        <div
          className='progress-bar progress-bar-striped progress-bar-animated'
          role='progressbar'
          aria-valuenow='75'
          aria-valuemin='0'
          aria-valuemax='100'
          style={{ width: `${space.percentage}%` }}
        >
          {space.percentage}%
        </div>
      </div>
      <div className='text-center'>
        <span className='light-grey'>
          {space.current} of 10 ({space.percentage}%) in Used
        </span>
      </div>
    </React.Fragment>
  );
};

export default ProgressBar;
