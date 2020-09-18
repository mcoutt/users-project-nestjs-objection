exports.up = async function(knex) {
  await knex.schema.alterTable('users', table => {
    table
      .integer('profiles_id')
      .unsigned()
      .references('profiles.id');
    // table.foreign('profileId').references('id').inTable('users');
    // table.integer('profileId').references('profiles.id');
  });
};

exports.down = async function(knex) {
  await knex.schema.alterTable('users', table => {
    table.dropColumn('profiles_id')
  });
};
