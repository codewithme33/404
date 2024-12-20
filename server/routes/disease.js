const express = require('express');
const router = express.Router();
const diseaseController = require('../controllers/disease.js'); 

router.post('/findDisease', diseaseController.findDiseaseBySymptoms);

module.exports = router;