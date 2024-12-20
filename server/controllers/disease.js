const axios = require('axios');
const Disease = require('../models/Disease');

const predictDisease = async (req, res) => {
  try {
    const { symptoms } = req.body;

    
    const response = await axios.post('http://127.0.0.1:5000/predict', { symptoms });

    const { disease, treatment } = response.data;
    res.status(200).json({ disease, treatment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {predictDisease};
