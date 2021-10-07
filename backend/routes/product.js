const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

router.get('/', productController.getAllProducts);

router.post('/', productController.postProduct);

router.put('/', productController.putProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
