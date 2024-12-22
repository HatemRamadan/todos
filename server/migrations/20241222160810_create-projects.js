
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.text('description');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects');
};