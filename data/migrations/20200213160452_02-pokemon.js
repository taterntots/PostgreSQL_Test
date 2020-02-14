exports.up = function (knex) {
  return knex.schema
    .createTable('pokemon', tbl => {
      tbl.increments();

      tbl.string('name', 128)
        .notNullable()
        .unique();
      tbl.string('type', 128)
        .notNullable();
    })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('pokemon');
}