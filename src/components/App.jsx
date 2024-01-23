import { ContactsForm, ContactsList, ContactsListFilter } from 'components';

export const App = () => {
  return (
    <>
      <section>
        <ContactsForm />
      </section>
      <section>
        <ContactsListFilter />
      </section>
      <section>
        <ContactsList />
      </section>
    </>
  );
};
