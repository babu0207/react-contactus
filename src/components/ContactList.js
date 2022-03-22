import React from 'react';
import ContactItem from './ContactItem';

const ContactList = (props) => {
  const renderList = props.contacts.map((contact) => {
    return (
      // <div className="row">
      //   <div className="col">{contact.name}</div>
      //   <div className="col">{contact.email}</div>
      // </div>
      <ContactItem contact={contact}></ContactItem>
    );
  });
  return (
    <div className="container">
      <div className="row">ContactList</div>
      {renderList}
    </div>
  );
};
export default ContactList;
