import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import './App.css'
export function App() {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  const deleteContact = contactId => {
    setContacts(prevState => ({
      setContacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  const handleAddContact = newContact => {
    setContacts(prevState => [{ ...newContact, id: nanoid() }, ...prevState]);
  };
   
  
  const changeFilter = (event) => {
    setFilter(event.target.value)
  }

  const findContact = (setContacts, setFilter) => {
    return setContacts.filter(contact => contact.name.toLocaleLowerCase().includes(setFilter.normalizedFilter),)
  }

  return (
    <div>
      <h1 className='Phonebook__title'>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} contacts={contacts} />
      <h2 className='Phonebook__title'>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={findContact(contacts, filter)} onDeleteContact={deleteContact} />
    </div>
  );
}


