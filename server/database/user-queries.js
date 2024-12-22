const knex = require("./connection.js");

async function all() {
    return knex('users');
}

async function create(email, name) {
    const results = await knex('users').insert({ email, name }).returning('*');
    return results[0];
}

module.exports = {
    all,
    create,
}