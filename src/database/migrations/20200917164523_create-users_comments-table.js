exports.up = async function(knex) {
  await knex.schema.createTable('users_comments', table => {
    table.increments('id').primary();
    table.text('comment');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))

    table.timestamp('deleted_at');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('users_comments');
};
