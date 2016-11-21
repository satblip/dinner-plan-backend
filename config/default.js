module.exports = {
  app: {
    port: process.env.APP_PORT
  },
  pg: {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    db: process.env.PG_DB
  }
};
