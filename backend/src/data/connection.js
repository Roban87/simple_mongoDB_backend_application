import { MongoClient } from 'mongodb';
import config from '../config';

const uri = `mongodb+srv://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}?retryWrites=true&w=majority`;

export const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 5,
});
