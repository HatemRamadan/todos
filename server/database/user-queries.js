const knex = require("./connection.js");


async function create(name, email) {
    const results = await knex('users').insert({ email, name }).returning('*');
    return results[0];
}

async function all() {
    return knex('users');
}

module.exports = {
    create,
    all
}