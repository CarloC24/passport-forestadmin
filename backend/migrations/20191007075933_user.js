exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
