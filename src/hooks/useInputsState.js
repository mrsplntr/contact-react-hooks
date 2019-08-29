import { useState } from 'react';

export default initialVals => {
  const [values, setValues] = useState(initialVals);

  const handleChange = e => {
    e.persist();
    if (e.target.name === 'companyPhone') {
      if (e.target.value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g)) {
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value
        }));
      } else {
        e.target.placeholder =
          'Invalid Phone, put only: number, (), +';
        setValues(values => ({
          ...values,
          [e.target.name]: ''
        }));
      }
    } 

    if (e.target.name !== 'companyPhone') {
      setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
      }));
    }
  };

  return [values, handleChange];
};
