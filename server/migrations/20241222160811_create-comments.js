
exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table) {
        table.increments('id');
        table.string('content').notNullable();
        table.integer('todo')
            .references('id')
            .inTable('todos')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
