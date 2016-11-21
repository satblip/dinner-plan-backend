import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { sql } from '../resources/sql';

const models = {};

fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach(file => {
    const model = sql.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sql;
models.Sequelize = Sequelize;

export default models;
