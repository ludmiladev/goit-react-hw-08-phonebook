import React from 'react';
import { NavLink } from 'react-router-dom';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockIcon from '@material-ui/icons/Lock';

const AuthNav = () => (
  <>
    <NavLink to="/register" className="nav" activeClassName="active-nav">
      <PersonAddIcon />
      <span> Register</span>
    </NavLink>
    <NavLink to="/login" className="nav" activeClassName="active-nav">
      <LockIcon />
      <span>Login</span>
    </NavLink>
  </>
);

export default AuthNav;
