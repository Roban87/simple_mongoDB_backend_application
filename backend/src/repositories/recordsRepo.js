import { client } from '../data/connection';
import config from '../config';

export const recordsRepo = {

  getRecordById: async (id) => {
    try {
      await client.connect();
      const cursor = client.db(config.mongodb.database).collection('records').find({ _id: id }).limit(1);
      const result = await cursor.toArray();
      return result;
    } catch (error) {
      throw { status: 500, message: error };
    }
  },

  getAllRecords: async () => {
    try {
      await client.connect();
      const cursor = client.db(config.mongodb.database).collection('records').find({}, { sort: { _id: 1 } });
      const result = await cursor.toArray();
      return result;
    } catch (error) {
      throw { status: 500, message: error };
    }
  },

  postRecord: async (data) => {
    try {
      await client.connect();
      const result = client.db(config.mongodb.database).collection('records').insertOne(data);
      return result;
    } catch (error) {
      throw { status: 500, message: error };
    }
  },

  deleteRecordById: async (id) => {
    try {
      await client.connect();
      const result = client.db(config.mongodb.database).collection('records').deleteOne({ _id: id });
      return result;
    } catch (error) {
      throw { status: 500, message: error };
    }
  },

};
