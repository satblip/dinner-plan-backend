import BPromise from 'bluebird';
import config from 'config';

import express from 'express';
import bb from 'express-busboy';
import routes from './routes';

import models from './models';

const log = require('saga-logger').create({ module: module.id });

const loadRouter = new BPromise((resolve, reject) => {
  log.debug('ROUTER_LOADING');
  const app = express();

  bb.extend(app, {
    upload: true
  });

  routes(app);

  app.listen(config.app.port, err => {
    if (err) {
      log.error('ROUTER_LOADING_FAIL', err);
      return reject(err);
    } else {
      log.debug('ROUTER_LOADING_SUCCESS');
      resolve();
    }
  });
});

const loadDatabase = new BPromise((resolve, reject) => {
  log.debug('DATABASE_LOADING');

  models.sequelize.sync()
    .then(() => {
      log.debug('DATABASE_LOADING_SUCCESS');
      resolve();
    }).catch(err => {
      log.error('DATABASE_LOADING_FAIL', err);
      reject(err);
    });
});

export const run = () => BPromise.all([loadRouter, loadDatabase]);
