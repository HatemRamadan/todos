
exports.up = function(knex) {
    return knex.schema.alterTable('todos', function(table) {
        table.integer('assignee')
            .references('id')
            .inTable('users')
            .onDelete('SET NULL');
        table.integer('project')
            .references('id')
            .inTable('projects') 
            .onDelete('SET NULL');
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('todos', function(table) {
        table.dropColumn('assignee');
        table.dropColumn('project');
    });
};