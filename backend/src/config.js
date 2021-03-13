export default {
  mongodb: {
    host: process.env.MONGODB_HOST,
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE,
    pool: process.env.MONGODB_POOL,
  },
};
