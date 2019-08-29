import React from 'react';

const ContactEditFormDetails = props => {

  return (
    <div className='row rectangle'>
      <div className='col-sm-4'>
        <img
          style={{ padding: '5px 0px 5px 0px' }}
          src={props.picture}
          alt='firstPic'
        />{' '}
        <br />
        <div className='posTitle'>
          <input
            autoFocus
            type='text'
            name='title'
            placeholder='Title'
            value={props.values.title}
            onChange={props.handleChange}
          />
        </div>
      </div>

      <div className='col-sm-8'>
        <span style={{ fontWeight: '700' }}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={props.values.name}
            onChange={props.handleChange}
          />
        </span>{' '}
        <br />
        {/* <div className='icons location' /> */}
        <span style={{ fontSize: '70%' }}>
          <input
            type='text'
            name='address'
            placeholder='Address'
            value={props.values.address}
            onChange={props.handleChange}
          />
          <br />
          <span style={{ fontWeight: '700' }}>
            <input
              type='text'
              name='companyName'
              placeholder='Company name'
              value={props.values.companyName}
              onChange={props.handleChange}
            />{' '}
          </span>
          <p style={{ marginBottom: '0' }}>
            <input
              type='text'
              name='companyStreet'
              placeholder='Company street'
              value={props.values.companyStreet}
              onChange={props.handleChange}
            />
          </p>
          <p style={{ marginBottom: '0' }}>
            <input
              type='text'
              name='companyCity'
              placeholder='Company city'
              value={props.values.companyCity}
              onChange={props.handleChange}
            />
          </p>
          <p style={{ marginBottom: '0' }}>
            {/* P:{' '} */}
            <input
              type='text'
              name='companyPhone'
              placeholder='Company phone'
              value={props.values.companyPhone}
              onChange={props.handleChange}
            />
          </p>
        </span>
        <br />
        <div
          style={{ float: 'right' }}
          title='Exit'
          className='icons cancel'
          onClick={props.handleCancel}
        />
        <div
          style={{ float: 'right' }}
          title='Save'
          className='icons save'
          onClick={props.handleSave}
        />
      </div>
    </div>
  );
};

export default ContactEditFormDetails;