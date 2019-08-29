import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactAddForm from './ContactAddForm/ContactAddForm';

import useContactState from '../../hooks/useContactState';
import ContactData from '../../Assets/ContactData';

import './ContactApp.css';

const ContactApp = () => {
  const {
    contacts,
    addContact,
    editContact,
    deleteContact
  } = useContactState(ContactData);
  const pictures = ContactData.map(c => c.picture);

  return (
    <div className='frameSpace'>
      <div className='row' id='contacts'>
        <ContactList
          contacts={contacts}
          editContact={editContact}
          deleteContact={deleteContact}
        />
        <ContactAddForm addContact={addContact} pictures={pictures} />
      </div>
    </div>
  );
};

export default ContactApp;