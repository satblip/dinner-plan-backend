import models from '../../models';
const log = require('saga-logger').create({ module: module.id });

const create = (params) => {
  return models.recipe.create(params);
};

export default log.logify(create, 'RECIPE_CREATE');
