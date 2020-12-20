import React from 'react';
import { connect } from 'react-redux';

import { authSelectors } from '../redux/auth';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const AppBar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    <Navigation />

    <div style={styles.container}>
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
