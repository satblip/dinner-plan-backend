import models from '../../models';
const log = require('saga-logger').create({ module: module.id });

const read = ({ id }) => {
  if (id) {
    return models.recipe.findById(id);
  }

  return models.recipe.findAll({
    attributes: ['id', 'name', 'season']
  });
};

export default log.logify(read, 'RECIPE_READ');
