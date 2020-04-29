const About = () => {
  return (
    <div className='row'>
      <div className='col-6'>
        <section class='card-about mt-5'>
          <img src='assets/img/about/matan.jpeg' alt='' />
          <div>
            <p className='text-left'>
              My name is <strong>Matan Shaviro </strong> I am a Software
              Engineer Graduate (B.Sc) Throughout my working experience, I've
              always been on the technical side and I really love it. I have a
              passion for high tech, an analytical mindset, and creative ability
              to pay attention to detail.
            </p>
            <div>
              <a
                className='btn btn-dark m-1'
                href='https://github.com/matan3sh'
                target='_blank'
              >
                <i className='fab fa-github' /> Github
              </a>
              <a
                className='btn btn-primary m-2'
                href='https://www.linkedin.com/in/matan-shaviro-990b0272/'
                target='_blank'
              >
                <i className='fab fa-linkedin' /> Linkedin
              </a>
              <a
                className='btn btn-info'
                href='https://www.facebook.com/matan.shaviro'
                target='_blank'
              >
                <i className='fab fa-facebook' /> Facebook
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className='col-6'>
        <section class='card-about mt-5'>
          <img src='assets/img/about/max.jpg' alt='' />
          <div>
            <p className='text-left'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              quos ipsum molestias illum aspernatur odit velit exercitationem?
              Aperiam exercitationem officiis ex quidem esse autem! Adipisci
              fuga animi harum labore consequuntur ullam deserunt natus maxime
              dolore?
            </p>
            <div>
              <a
                className='btn btn-dark m-1'
                href='https://github.com/MaxDBam'
                target='_blank'
              >
                <i className='fab fa-github' /> Github
              </a>
              <a
                className='btn btn-primary m-2'
                href='https://www.linkedin.com/in/matan-shaviro-990b0272/'
                target='_blank'
              >
                <i className='fab fa-linkedin' /> Linkedin
              </a>
              <a
                className='btn btn-info'
                href='https://www.facebook.com/max.dubovsky'
                target='_blank'
              >
                <i className='fab fa-facebook' /> Facebook
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
