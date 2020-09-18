exports.up = async function(knex) {
  await knex.schema.createTable('profiles', table => {
    table.increments('id').primary();
    table.string('nick_name', 16);
    table.string('first_name', 16);
    table.string('last_name', 16);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('profiles');
};
