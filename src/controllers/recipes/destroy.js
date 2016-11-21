import models from '../../models';
const log = require('saga-logger').create({ module: module.id });

const destroy = params =>
  models.recipe.destroy({ where: params })
    .then(nbDeletedRows => ({ nbDeletedRows }));

export default log.logify(destroy, 'RECIPE_DESTROY');
