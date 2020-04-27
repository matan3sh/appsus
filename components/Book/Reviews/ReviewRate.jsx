const ReviewRate = ({ rate }) => {
  return (
    <div className='book-stars-outer'>
      <div className='book-stars-inner' style={{ width: `${rate}%` }}></div>
    </div>
  );
};

export default ReviewRate;
