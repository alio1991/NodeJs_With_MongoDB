const express = require('express');
const getController = require('../controllers/post-ddbb-controller');

const router = express.Router()

//ROUTER CRUD
router.post('/', getController.post);
router.put('/:id', getController.put);
router.delete('/:id', getController.delete);
router.get('/:id', getController.getOne);
router.get('/', getController.get);

module.exports = router
