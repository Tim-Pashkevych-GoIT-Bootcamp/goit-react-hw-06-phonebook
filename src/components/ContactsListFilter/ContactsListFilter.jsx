import { useDispatch } from 'react-redux';
import { changeFilter } from './../../redux/actions';

export const ContactsListFilter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Contacts</h2>
      <form>
        <label>
          Find contacts by name:{' '}
          <input
            type="text"
            name="filter"
            onChange={event => dispatch(changeFilter(event.target.value))}
          />
        </label>
      </form>
    </>
  );
};
