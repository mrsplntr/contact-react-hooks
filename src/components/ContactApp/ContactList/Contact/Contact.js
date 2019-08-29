import React from 'react';
import ContactEditForm from '../../Shared/ContactEditForm/ContactEditForm';
import ContactDetails from './ContactDetails/ContactDetails';
import useToggleState from '../../../../hooks/useToggleState';
import './Contact.css';

const Contact = props => {
  const [isEditing, toggleIsEditing] = useToggleState();

  const initialVals = {
      title: props.title,
      name: props.name,
      address: props.address,
      companyName: props.company.name,
      companyStreet: props.company.street,
      companyCity: props.company.city,
      companyPhone: props.company.phone
  };

  const handleEdit = () => {
    toggleIsEditing();
  };

  const handleDelete = () => {
    props.deleteContact(props.id);
  };

  return (
    <div className='col-xl-4'>
      {isEditing ? (
        <ContactEditForm
          fromContact
          initialVals={initialVals}
          editContact={props.editContact}
          toggleIsEditing={toggleIsEditing}
          picture={props.picture}
          id={props.id}
        />
      ) : (
        <ContactDetails
          {...props}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Contact;