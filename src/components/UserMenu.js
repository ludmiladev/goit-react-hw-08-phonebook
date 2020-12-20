import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { authSelectors, authOperations } from '../redux/auth';

const styles = {
  marginRight: '10px',
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <>
    <img style={styles} src={avatar} alt="" width="32" />
    <span style={styles}> Welcome, {name}</span>
    <Button
      variant="contained"
      size="small"
      color="secondary"
      onClick={onLogout}
    >
      Logout
    </Button>
  </>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_960_720.png',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
