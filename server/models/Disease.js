const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
      name: String,
      symptoms: [String],
      treatment: String,
    });
    const Disease = mongoose.model('Disease', DiseaseSchema);
    
    
    
    
    
    