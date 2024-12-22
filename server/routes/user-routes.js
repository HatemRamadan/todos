const _ = require('lodash');
const users = require('../database/user-queries.js');

async function getAllUsers(req, res) {
  const allEntries = await users.all();
  return res.send(allEntries);
}

// TODO: Check if email already exists 
async function createUser(req, res) {
  const newUser = await users.create(req.body.email, req.body.name);
  return res.status(201).send(newUser);
}

function addErrorReporting(func, message) {
    return async function(req, res) {
        try {
            return await func(req, res);
        } catch(err) {
            console.log(`${message} caused by: ${err}`);

            // Not always 500, but for simplicity's sake.
            res.status(500).send(`Opps! ${message}.`);
        } 
    }
}

const toExport = {
    getAllUsers: { method: getAllUsers, errorMessage: "Could not fetch all users" },
    createUser: { method: createUser, errorMessage: "Could not create user" }
}

for (let route in toExport) {
    toExport[route] = addErrorReporting(toExport[route].method, toExport[route].errorMessage);
}

module.exports = toExport;
