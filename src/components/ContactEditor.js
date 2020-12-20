import React, { Component } from 'react';
import { connect } from 'react-redux';

import phoneOperations from '../redux/phone/phoneOperations';
// import Snackbars from '../components/Snackbar';
import Alert from '@material-ui/lab/Alert';

class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
    unic: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    const isNotUnicName = this.props.items.find(
      contact => contact.name === value,
    );
    if (isNotUnicName) {
      this.setState({ unic: false });
    } else {
      this.setState({
        [name]: value,
      });
      this.setState({ unic: true });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
  };

  render() {
    const { name, number, unic } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <br />
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          {!unic && (
            <Alert severity="error">This name is already in contacts!</Alert>
          )}
          <label htmlFor="number">
            Number
            <br />
            <input
              type="text"
              value={number}
              onChange={this.handleChange}
              name="number"
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = state => {
  return state.contacts;
};

const mapDispatchToProps = {
  onAddContact: phoneOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditor);
