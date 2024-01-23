import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addContact } from './../../redux/actions';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = data => {
    dispatch(addContact({ ...data, id: nanoid() }));
    reset();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
        <label>
          Name: <input type="text" {...register('name', { required: true })} />
        </label>
        <label>
          Number:{' '}
          <input type="tel" {...register('number', { required: true })} />
        </label>
        <button>Add</button>
      </form>
    </>
  );
};
