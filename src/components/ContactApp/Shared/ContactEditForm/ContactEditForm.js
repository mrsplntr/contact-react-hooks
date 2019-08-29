import React from 'react';
import useInputsState from '../../../../hooks/useInputsState';
import ContactEditFormDetails from './ContactEditFormDetails/ContactEditFormDetails';
import uuid from 'uuid/v4';
import './ContactEditForm.css';

const ContactEditForm = props => {
  const [values, handleChange] = useInputsState(props.initialVals);

  const handleCancel = () => {
    if (props.fromContactAddForm) props.toggleIsAdding();
    if (props.fromContact) props.toggleIsEditing();
  };

  const handleSave = e => {
    if (props.fromContactAddForm) handleAdd(e);
    if (props.fromContact) handleEdit(e);
  }

  const contactForm = {
    picture: props.picture,
    title: values.title,
    name: values.name,
    address: values.address,
    company: {
      name: values.companyName,
      street: values.companyStreet,
      city: values.companyCity,
      phone: values.companyPhone
    }
  };

  const handleEdit = e => {
    const editedContact = { ...contactForm, id: props.id };
    props.editContact(props.id, editedContact);
    props.toggleIsEditing();
  };

  const handleAdd = e => {
    const newContact = { ...contactForm, id: uuid() };
    props.addContact(newContact);
    props.toggleIsAdding();
  };

  return (
    <ContactEditFormDetails
      {...props}
      values={values}
      handleChange={handleChange}
      handleCancel={handleCancel}
      handleSave={handleSave}
    />
  );
};

export default ContactEditForm;