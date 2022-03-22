import React, { useState, useEffect } from 'react';
import './../style.css';
import Header from './Header';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const updateContact = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
    console.log(contacts);
  };
  // useEffect(() => {
  //   const c = JSON.parse(localStorage.getItem('contacts'));
  //   if (c) setContacts(c);
  // }, [contacts]);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div class="container">
      <div className="row">
        <Header></Header>
      </div>
      <div className="row">
        <ContactForm addcontacts={updateContact}></ContactForm>
        <ContactList contacts={contacts}></ContactList>
      </div>
    </div>
  );
}
