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
          <div className='carousel-item active'>
            <img
              src='https://lh3.googleusercontent.com/proxy/U0MEkkQkGjaoNgcSFeDAfYhIP3nChg2P0Gp9GHplYxFRob89erqhUBlFZAM7aWKI993fstauVL1ry6fbCcrC-DrBd2_lWt1iGMFQ9HwGj69w3A1gGU_ybpReYBo-4rj7xVkjnUrE0xIqSlh798j8UuXz6qmTThkVNj6itA'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Appsus - All Apps In One Place</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
                quae?
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src='https://via.placeholder.com/640x360' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Check Out Our Best Deals</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
                quae?
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://via.placeholder.com/640x360'
              alt='Third slide'
            />
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
