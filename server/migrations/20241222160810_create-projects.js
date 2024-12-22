
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
        table.increments('id');
        table.string('title').notNullable();
        table.string('description');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects');
};