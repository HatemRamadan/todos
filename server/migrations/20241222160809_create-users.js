
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id');
        table.string('name').notNullable().unique();
        table.string('email').notNullable().unique();
        // TODO: add `role` column to users and use the role to give access rules to todos and ability to assigning todos to other users
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};