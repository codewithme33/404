const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  symptoms: [{ type: String }],         
  treatment: { type: String }           
});

const Disease = mongoose.model('Disease', DiseaseSchema);
module.exports = Disease;
