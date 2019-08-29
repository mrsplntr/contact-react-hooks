import useLocalStorageState from './useLocalStorageState';

export default initialContacts => {
  const [contacts, setContacts] = useLocalStorageState('contacts', initialContacts);

  const addContact = newContact => {
    setContacts(
      [...contacts, newContact]
    );
  }

  const editContact = (contactId, editedContact) => {
    setContacts(
      contacts.map(c =>
        c.id === contactId ? editedContact : c
      )
    );
  };

  const deleteContact = (contactId) => {
    setContacts(
      contacts.filter(c => c.id !== contactId)
    );
  };

  return { contacts, addContact, editContact, deleteContact };
}