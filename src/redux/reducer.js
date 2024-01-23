import { ADD_CONTACT, CHANGE_FILTER, REMOVE_CONTACT } from './constants';

const initialState = { contacts: [], filter: '' };

export const conatctsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case CHANGE_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
