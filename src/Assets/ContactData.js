import uuid from 'uuid/v4';

const contactData = [
  {
    id: 1,
    name: 'John Smith',
    title: 'Graphics designer',
    picture: './images/john-smith.jpg',
    address: 'Riviera State 32/106',
    company: {
      name: 'Twitter, Inc.',
      street: '795 Folsom Ave, Suite 600',
      city: 'San Francisco, CA 94107',
      phone: '(123) 456-7890'
    }
  },
  {
    id: 2,
    name: 'Alex Jonathan',
    title: 'CEO',
    picture: './images/alex-jonathan.jpg',
    address: 'Riviera State 32/106',
    company: {
      name: 'Twitter, Inc.',
      street: '795 Folsom Ave, Suite 600',
      city: 'San Francisco, CA 94107',
      phone: '(123) 456-7890'
    }
  },
  {
    id: 3,
    name: 'Monica Smith',
    title: 'Marketing manager',
    picture: './images/monica-smith.jpg',
    address: 'Riviera State 32/106',
    company: {
      name: 'Twitter, Inc.',
      street: '795 Folsom Ave, Suite 600',
      city: 'San Francisco, CA 94107',
      phone: '(123) 456-7890'
    }
  },
  {
    id: 4,
    name: 'Michael Zimber',
    title: 'Sales manager',
    picture: './images/michael-zimber.jpg',
    address: 'Riviera State 32/106',
    company: {
      name: 'Twitter, Inc.',
      street: '795 Folsom Ave, Suite 600',
      city: 'San Francisco, CA 94107',
      phone: '(123) 456-7890'
    }
  },
  {
    id: 5,
    name: 'Sandra Smith',
    title: 'Graphics designer',
    picture: './images/sandra-smith.jpg',
    address: 'Riviera State 32/106',
    company: {
      name: 'Twitter, Inc.',
      street: '795 Folsom Ave, Suite 600',
      city: 'San Francisco, CA 94107',
      phone: '(123) 456-7890'
    }
  },
  {
    id: 6,
    name: 'Janeth Carton',
    title: 'Graphics designer',
    picture: './images/janeth-carton.jpg',
    address: 'Riviera State 32/106',
    company: {
      name: 'Twitter, Inc.',
      street: '795 Folsom Ave, Suite 600',
      city: 'San Francisco, CA 94107',
      phone: '(123) 456-7890'
    }
  },
  {
    id: 7,
    name: 'Alex Jonathan',
    title: 'CEO',
    picture: './images/alex-jonathan.jpg',
    address: 'Riviera State 32/106',
    company: {
      name: 'Twitter, Inc.',
      street: '795 Folsom Ave, Suite 600',
      city: 'San Francisco, CA 94107',
      phone: '(123) 456-7890'
    }
  },
  {
    id: 8,
    name: 'John Smith',
    title: 'Graphics designer',
    picture: './images/john-smith.jpg',
    address: 'Riviera State 32/106',
    company: {
      name: 'Twitter, Inc.',
      street: '795 Folsom Ave, Suite 600',
      city: 'San Francisco, CA 94107',
      phone: '(123) 456-7890'
    }
  }
];

const contactDataWithImagesImport = contactData.map(c => {
  return {
    ...c,
    id: uuid(),
    picture: require('' + c.picture)
  };
});

export default contactDataWithImagesImport;