const express = require('express');
const router = express.Router();

const {productsAll} = require('../controllers/service')

router.route("/productsAll").get(productsAll)

module.exports = router;