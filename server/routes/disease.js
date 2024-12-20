const express = require('express');
const { predictDisease } = require('../controllers/disease.js');
const router = express.Router();

router.post('/predict', predictDisease);  


module.exports = router;
