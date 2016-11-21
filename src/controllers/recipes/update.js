import read from './read';
const log = require('saga-logger').create({ module: module.id });

const update = ({ id, ...params }) => {
  return read({ id })
    .then(recipeModel => recipeModel.set(params).save());
};

export default log.logify(update, 'RECIPE_UPDATE');
