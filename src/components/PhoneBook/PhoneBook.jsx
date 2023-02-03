import { useState, useEffect } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title } from './PhoneBook.styled';

const LS_KEY = 'contacts';

const PhoneBook = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LS_KEY)) ?? []
  );

  const [filter, SetFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handlerSubmit = newContacts => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContacts.name.toLowerCase()
      )
    ) {
      alert(`${newContacts.name} is already in contacts`);
      return;
    }
    setContacts([newContacts, ...contacts]);
  };

  const onFilter = element => {
    SetFilter(element.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <PhoneBookForm onSubmit={handlerSubmit} />

      <Title>Contacts</Title>
      <Filter value={filter} onFilter={onFilter} />
      <ContactList deleteContact={deleteContact} contacts={filterContacts} />
    </Container>
  );
};

export default PhoneBook;
