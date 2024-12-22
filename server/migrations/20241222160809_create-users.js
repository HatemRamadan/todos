
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id');
        table.string('email').notNullable().unique();
        table.string('name');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};