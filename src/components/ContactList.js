import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactListItem from './ContactListItem';
import phoneSelectors from '../redux/phone/phoneSelectors';

const ContactList = ({ contacts }) => {
  if (contacts.length > 0) {
    return (
      <ul>
        {contacts.map(({ id }) => (
          <ContactListItem key={id} id={id} />
        ))}
      </ul>
    );
  } else return null;
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: phoneSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
