import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from './../../redux/selectors';
import { removeContact } from './../../redux/actions';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul>
        {filteredContacts.length > 0 &&
          filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => dispatch(removeContact(contact.id))}>
                delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};
