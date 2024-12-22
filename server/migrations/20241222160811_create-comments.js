
exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table) {
        table.increments('id');
        table.string('content');
        table.integer('todo').references('todos.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
