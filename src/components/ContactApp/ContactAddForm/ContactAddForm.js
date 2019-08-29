import React from 'react';
import ContactEditForm from '../Shared/ContactEditForm/ContactEditForm';
import useToggleState from '../../../hooks/useToggleState';
import './ContactAddForm.css';

const ContactAddForm = props => {
  const [isAdding, toggleIsAdding] = useToggleState();

  const randomPic =
    props.pictures[Math.floor(Math.random() * props.pictures.length)];

  const initialVals = {
    title: '',
    name: '',
    address: '',
    companyName: '',
    companyStreet: '',
    companyCity: '',
    companyPhone: ''
  };

  const handleAdd = () => {
    toggleIsAdding();
  };

  return (
    <div className='col-xl-4'>
      {isAdding ? (
        <ContactEditForm
          fromContactAddForm
          initialVals={initialVals}
          addContact={props.addContact}
          toggleIsAdding={toggleIsAdding}
          picture={randomPic}
        />
      ) : (
        <div className='row' style={{ paddingTop: '40px' }}>
          <span style={{ margin: 'auto' }}>
            <span className='circle' onClick={handleAdd}>
              ＋
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactAddForm;