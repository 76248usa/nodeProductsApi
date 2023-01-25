const express = require('express');
const router = express.Router();
//const getAllProducts = require('../controllers/products');
//const getAllProductsStatic = require('../controllers/products');

const {getAllProducts, getAllProductsStatic} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)

module.exports = router;