import { client } from '../data/connection';

export const recordsRepo = {

  getBookById: async (id) => {
    try {
      await client.connect();
      const cursor = client.db('gamma_digital').collection('books').find({ _id: id }).limit(1);
      const result = await cursor.toArray();
      return result;
    } catch (error) {
      throw { status: 500, message: error };
    }
  },

  getAllBooks: async () => {
    try {
      await client.connect();
      const cursor = client.db('gamma_digital').collection('books').find({}, { sort: { _id: 1 } });
      const result = await cursor.toArray();
      return result;
    } catch (error) {
      throw { status: 500, message: error };
    }
  },

  postBook: async (data) => {
    try {
      await client.connect();
      const result = client.db('gamma_digital').collection('books').insertOne(data);
      return result;
    } catch (error) {
      throw { status: 500, message: error };
    }
  },

  deleteBookById: async (id) => {
    try {
      await client.connect();
      const result = client.db('gamma_digital').collection('books').deleteOne({ _id: id });
      return result;
    } catch (error) {
      throw { status: 500, message: error };
    }
  },

};
