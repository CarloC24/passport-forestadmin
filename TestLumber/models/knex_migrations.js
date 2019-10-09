module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('knex_migrations', {
    name: {
      type: DataTypes.STRING,
    },
    batch: {
      type: DataTypes.INTEGER,
    },
    migrationTime: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'knex_migrations',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

