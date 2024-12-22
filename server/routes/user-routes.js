const _ = require('lodash');
const users = require('../database/user-queries');


// TODO: check if email already exists and send a proper error message
async function createUser(req, res) {
  const created = await users.create(req.body.name, req.body.email);
  return res.send(created);
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
    createUser: { method: createUser, errorMessage: "Could not create user" },
}

for (let route in toExport) {
    toExport[route] = addErrorReporting(toExport[route].method, toExport[route].errorMessage);
}

module.exports = toExport;
