import { useState, useEffect } from 'react';
import shortid from 'shortid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import s from './App.module.css';

export default function App() {
  const localStorageKey = 'contacts';

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = data => {
    const isContact = contacts.find(({ name }) => name === data.name);

    if (isContact) {
      return window.alert(`Контакт с именем ${data.name} уже существет`);
    } else {
      const contact = {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
      };

      setContacts(prevState => [...prevState, contact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  const changeFilter = ({ target: { value: filter } }) => {
    setFilter(filter);
  };

  const getVisibleContact = () => {
    const normalValueFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValueFilter),
    );
  };

  const visibleContacts = getVisibleContact();

  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <h2 className={s.title}>Телефонная книга</h2>
        <ContactForm onSubmit={handleFormSubmit} />
        <h3 className={s.title}>Контакты</h3>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </header>
    </div>
  );
}
