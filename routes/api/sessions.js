const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../../controllers/api/sessions');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/sessions
// router.get('/', sessionsCtrl.getAll);
// GET /api/sessions/:id
// router.get('/:exerciseId', sessionsCtrl.getOne)
// POST /api/sessions
router.post('/', sessionsCtrl.create);
// PUT /api/sessions/:id
// router.put('/:exerciseId', sessionsCtrl.update)

module.exports = router;