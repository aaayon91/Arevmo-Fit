const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../../controllers/api/exercises');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/exercises
router.get('/', exercisesCtrl.getAll);
// GET /api/exercises/:id
router.get('/:exerciseId', exercisesCtrl.getOne)
// POST /api/exercises
router.post('/', exercisesCtrl.create);
// PUT /api/exercises/:id
router.put('/:exerciseId', exercisesCtrl.update)

module.exports = router;