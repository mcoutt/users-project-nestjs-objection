exports.up = async function(knex) {
  await knex.schema.alterTable('users_comments', table => {
    table
      .integer('profiles_id')
      .unsigned()
      .references('profiles.id');
    table
      .integer('users_id')
      .unsigned()
      .references('users.id');

  });
};

exports.down = async function(knex) {
  await knex.schema.alterTable('users_comments', table => {
    table.dropColumn('profiles_id')
    table.dropColumn('users_id')
  });
};
