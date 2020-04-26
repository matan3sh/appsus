const { NavLink } = ReactRouterDOM;

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>
        <i className={icon} /> {title}
      </a>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink
              activeClassName='nav-active'
              exact
              to='/'
              className='nav-link'
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              activeClassName='nav-active'
              exact
              to='/mail'
              className='nav-link'
            >
              Mail
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              activeClassName='nav-active'
              exact
              to='/keeper'
              className='nav-link'
            >
              Kepeer
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              activeClassName='nav-active'
              exact
              to='/about'
              className='nav-link'
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Appsus',
  icon: 'fas fa-chess-knight',
};

export default Navbar;
