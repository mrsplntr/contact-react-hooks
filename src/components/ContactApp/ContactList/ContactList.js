import React from 'react';
import Contact from './Contact/Contact';

const ContactList = props => {
  return (
    <>
      {props.contacts.map(c => (
        <Contact
          key={c.id}
          {...c}
          editContact={props.editContact}
          deleteContact={props.deleteContact}
        />
      ))}
    </>
  );
};

export default ContactList;