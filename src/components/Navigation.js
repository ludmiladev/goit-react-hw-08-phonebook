import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';

import { authSelectors } from '../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className="nav" activeClassName="active-nav">
      <HomeIcon /> <span>Home</span>
    </NavLink>

    {isAuthenticated && (
      <NavLink to="/contacts" className="nav" activeClassName="active-nav">
        <PeopleIcon /> <span>Contacts</span>
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
