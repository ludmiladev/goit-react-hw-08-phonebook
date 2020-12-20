import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactEditor from '../components/ContactEditor';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import phoneOperations from '../redux/phone/phoneOperations';
// import phoneSelectors from '../redux/phone/phoneSelectors';
// import { authSelectors } from '../redux/auth';

class Contacts extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <ContactEditor />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

const mapDispatchToProps = {
  onFetchContacts: phoneOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(Contacts);
