const Disease = require("../models/Disease.js"); 
const mongoose = require('mongoose');

module.exports.findDiseaseBySymptoms = async (req, res) => {
    try {
        const { symptoms } = req.body; 

        if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
            return res.status(400).send({ message: 'Symptoms must be provided as an array' });
        }

        const disease = await Disease.findOne({
            symptoms: { $all: symptoms },
        });

        if (!disease) {
            return res.status(404).send({ message: 'No matching disease found for the provided symptoms!' });
        }

        return res.status(200).send({
            message: 'Based on the symptoms described, the condition most likely corresponds to: ',
            diseaseName: disease.name,
            treatment: disease.treatment,
        });
    } catch (error) {
        console.error('Error finding disease:', error);
        return res.status(500).send({ message: 'Internal server error' });
    }
};

