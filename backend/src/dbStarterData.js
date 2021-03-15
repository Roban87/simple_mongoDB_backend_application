import { client } from './data/connection';

const starterData = [
  {
    _id: '1',
    author: 'J. R. R. Tolkien',
    title: 'Lord of The Rings: The fellowship of the Ring',
    isbn: 1234987650,
  },
  {
    _id: '2',
    author: 'J. R. R. Tolkien',
    title: 'Lord of The Rings: The two towers',
    isbn: 1234987650,
  },
  {
    _id: '3',
    author: 'J. R. R. Tolkien',
    title: 'Lord of The Rings: The return of the king',
    isbn: 1234987650,
  },
  {
    _id: '4',
    author: 'J. R. R. Tolkien',
    title: 'The Hobbit',
    isbn: 1234987650,
  },
  {
    _id: '5',
    author: 'Lev Grossman',
    title: 'The Magicians',
    isbn: 1234987650,
  },
  {
    _id: '6',
    author: 'Brandon Sanderson',
    title: 'Elantris',
    isbn: 1234987650,
  },
  {
    _id: '7',
    author: 'Alina Wheeler',
    title: 'Designing Brand Identity: An Essential Guide for the Whole Branding Team',
    isbn: 1234987650,
  },
  {
    _id: '8',
    author: 'Chip Kidd',
    title: 'Go: A Kidd\'s Guide to Graphic Design',
    isbn: 1234987650,
  },
  {
    _id: '9',
    author: 'Chip Kidd',
    title: 'Judge This',
    isbn: 1234987650,
  },
  {
    _id: '10',
    author: 'Chip Kidd',
    title: 'Batman: Death by Design',
    isbn: 1234987650,
  },
];

const populateDb = async () => {
  try {
    await client.connect();
    await client.db('gamma_digital').collection('records').insertMany(starterData);
  } catch (error) {
    throw { status: 500, message: error };
  }
};

populateDb()
  .then(() => {
    console.log('The database filled up with starter data!');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    console.log('Couldn`t fill the database!');
    process.exit(1);
  });
