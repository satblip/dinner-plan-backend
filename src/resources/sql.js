import config from 'config';
import Sequelize from 'sequelize';

let logging = false;
if (process.env.LOG_LEVEL === 'debug') {
  logging = console.log;
}

export const sql = new Sequelize(
  config.pg.db,
  config.pg.user,
  config.pg.password,
  {
    dialect: 'postgres',
    host: config.pg.host,
    logging
  }
);
