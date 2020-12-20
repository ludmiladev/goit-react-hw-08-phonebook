import axios from 'axios';

import {
  addContactsError,
  addContactsSuccess,
  addContactsRequest,
  fetchContactsRequest,
  fetchContactsError,
  fetchContactsSuccess,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from './phonebookActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const addContact = ({ name, number }) => async dispatch => {
  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', {
      name,
      number,
    });
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error));
  }
};

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const removeContact = id => async dispatch => {
  dispatch(removeContactsRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(removeContactsSuccess(id));
  } catch (error) {
    dispatch(removeContactsError(error));
  }
};

export default { addContact, fetchContacts, removeContact };
