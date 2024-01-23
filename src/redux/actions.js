import { ADD_CONTACT, CHANGE_FILTER, REMOVE_CONTACT } from './constants';

export const addContact = payload => {
  return { type: ADD_CONTACT, payload };
};

export const removeContact = payload => {
  return { type: REMOVE_CONTACT, payload };
};

export const changeFilter = payload => {
  return { type: CHANGE_FILTER, payload };
};
