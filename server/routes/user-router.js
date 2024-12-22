const express = require('express');
const router = express.Router();
const userRoutes = require('../routes/user-routes');

router.post('/', userRoutes.createUser);

module.exports = router;