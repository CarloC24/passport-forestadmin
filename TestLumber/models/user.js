module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'user',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

