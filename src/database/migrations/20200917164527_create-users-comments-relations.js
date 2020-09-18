exports.up = async function(knex) {
  await knex.schema.alterTable('users_comments', table => {
    table
      .integer('profile_id')
      .unsigned()
      .references('profiles.id');
    table
      .integer('users_id')
      .unsigned()
      .references('users.id');

    // table.foreign('profileId').references('id').inTable('users');
    // table.integer('profileId').references('profiles.id');
  });
};

exports.down = async function(knex) {
  await knex.schema.alterTable('users_comments', table => {
    table.dropColumn('profile_id')
    table.dropColumn('users_id')
  });
};
