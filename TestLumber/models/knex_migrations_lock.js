module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('knex_migrations_lock', {
    index: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: Sequelize.literal('nextval(knex_migrations_lock_index_seq::regclass)'),
    },
    isLocked: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'knex_migrations_lock',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

