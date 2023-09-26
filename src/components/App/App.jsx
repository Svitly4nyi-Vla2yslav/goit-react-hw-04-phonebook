import { useState, useEffect } from 'react';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import './App.css'

export function App() {
  const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState]
  }

  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');


  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId))

  }

  const handleAddContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);

  };


  const changeFilter = (event) => {
    setFilter(event.currentTarget.value)
  }

  const findContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter),)
  }

  return (
    <div>
      <h1 className='Phonebook__title'>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} contacts={contacts} />
      <h2 className='Phonebook__title'>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={findContact()} onDeleteContact={deleteContact} />
    </div>
  );
}


