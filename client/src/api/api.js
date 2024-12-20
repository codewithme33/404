import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/predict';

export const fetchDiseaseData = async (symptoms) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/predict`, { symptoms });
    return response.data; // The response contains disease name and treatment
  } catch (error) {
    console.error('Error fetching disease data:', error);
    throw error;
  }
};
