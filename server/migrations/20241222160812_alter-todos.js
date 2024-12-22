
exports.up = function(knex) {
    return knex.schema.alterTable('todos', function(table) {
        table.integer('project').unsigned().references('id').inTable('projects');
        table.integer('assignee').unsigned().references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('todos', function(table) {
        table.dropColumn('project');
        table.dropColumn('assignee');
    });
};
