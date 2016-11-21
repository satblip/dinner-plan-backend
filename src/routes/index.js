import BPromise from 'bluebird';
import _ from 'lodash';
import getControllerInfo from './controller-info';
const log = require('saga-logger').create({ module: module.id });

export default app => {
  app.all('/*', (req, res) => {
    const meta = _.pick(req, ['method', 'path', 'query', 'body']);
    const controllerInfo = getControllerInfo(req);

    if (_.isError(controllerInfo)) {
      log.debug('API_ERROR', controllerInfo, meta);
      return res.status(405).send('ROUTE_NOT_SUPPORTED');
    }

    const { controllerFunction, args } = controllerInfo;
    BPromise.resolve(controllerFunction(args)).then(data => {
      log.debug('API_SUCCESS', data, meta);
      res.send(data);
    }).catch(err => {
      log.error('API_ERROR', err, meta);
      res.status(500).send(err.message);
    });
  });
};
