import React from 'react';

const ContactDetails = props => {
  return (
    <div className='row rectangle'>
      <div className='col-sm-4'>
        <img
          style={{ padding: '5px 0px 5px 0px' }}
          src={props.picture}
          alt={props.name}
        />{' '}
        <br />
        <div className='posTitle'>{props.title}</div>
      </div>

      <div className='col-sm-8'>
        <span style={{ fontWeight: '700' }}>{props.name}</span> <br />
        <div className='icons location' />
        <span style={{ fontSize: '70%' }}>
          {props.address} <br />
          <span style={{ fontWeight: '700' }}>{props.company.name} </span>
          <p style={{ marginBottom: '0' }}>{props.company.street}</p>
          <p style={{ marginBottom: '0' }}>{props.company.city}</p>
          <p style={{ marginBottom: '0' }}>P: {props.company.phone}</p>
        </span>
        <br />
        <div
          style={{ float: 'right' }}
          title='Delete'
          className='icons trash'
          onClick={props.handleDelete}
        />
        <div
          style={{ float: 'right' }}
          title='Edit'
          className='icons pencil'
          onClick={props.handleEdit}
        />
      </div>
    </div>
  );
};

export default ContactDetails;