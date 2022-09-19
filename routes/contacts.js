const express = require('express');
const router = express.Router();

const contacts_Controller = require('../controllers/contacts');

router.get('/:id', contacts_Controller.getSingle);
router.get('/', contacts_Controller.getAll);


module.exports = router;