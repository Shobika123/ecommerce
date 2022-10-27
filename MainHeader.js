import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/home'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/products'>
              Store
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/contactus'>
              ContactUs
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/login'>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;