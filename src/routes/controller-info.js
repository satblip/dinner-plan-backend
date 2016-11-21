import _ from 'lodash';
const controllers = require('fs').readdirSync(`${__dirname}/../controllers`);
const controllerMethodsMapping = {
  POST: 'create',
  GET: 'read',
  PUT: 'update',
  DELETE: 'destroy'
};

export default ({ method, path, query, body }) => {
  const [controller, id, attr] = path.slice(1).split('/');

  if (controllers.indexOf(`${controller}.js`) === -1) {
    return new Error('CONTROLLER_NOT_FOUND');
  }

  const controllerFunction =
    require(`../controllers/${controller}`)[controllerMethodsMapping[method]];

  if (!_.isFunction(controllerFunction)) {
    return new Error('METHOD_NOT_FOUND_IN_CONTROLLER');
  }

  return { controllerFunction, args: Object.assign({id, attr}, query, body) };
};
