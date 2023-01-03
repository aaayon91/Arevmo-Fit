const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../../controllers/api/exercises');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', exercisesCtrl.create);

module.exports = router;