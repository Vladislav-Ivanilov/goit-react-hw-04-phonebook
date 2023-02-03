import { Component } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title } from './PhoneBook.styled';

const LS_KEY = 'contacts';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  componentDidMount() {
    const dataNumbers = JSON.parse(localStorage.getItem(LS_KEY));

    if (dataNumbers) {
      this.setState({ contacts: dataNumbers });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  handlerSubmit = data => {
    this.setState(({ contacts }) =>
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
        ? alert(`${data.name} is already in contacts`)
        : { contacts: [data, ...contacts] }
    );
  };

  onFilter = element => {
    const { value } = element.currentTarget;
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(contacts);
    return (
      <Container>
        <Title>Phonebook</Title>
        <PhoneBookForm onSubmit={this.handlerSubmit} />

        <Title>Contacts</Title>
        <Filter value={filter} onFilter={this.onFilter} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={filterContacts}
        />
      </Container>
    );
  }
}

export default PhoneBook;
