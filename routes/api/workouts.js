const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', workoutsCtrl.create);

module.exports = router;
