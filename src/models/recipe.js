export default (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipe', {
    name: {
      type: DataTypes.TEXT
    },

    season: {
      type: DataTypes.TEXT
    }
  }, {
    paranoid: true,
    underscored: true
  });

  return Recipe;
};
