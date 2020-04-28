export default class Home extends React.Component {
  render() {
    return (
      <div
        id='carouselExampleIndicators'
        className='carousel slide mt-5'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active radius'>
            <img className='img-carousel' src='assets/img/logo.png' alt='...' />
            <div className='carousel-caption d-none d-md-block block-line'>
              <h2 className='bolder'>Appsus - All The Apps In One Place</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
                quae?
              </p>
            </div>
          </div>
          <div className='carousel-item radius'>
            <img
              className='radius img-carousel'
              src='assets/img/1.png'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <div className='on-it radius'>
                <h2 className='bolder'>Check Out Our Best Deals</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dicta, quae?
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    );
  }
}
