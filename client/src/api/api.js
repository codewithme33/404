import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/diseases';

export const fetchDiseaseData = async (symptoms) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/predict`, { symptoms });
    return response.data; 
  } catch (error) {
    console.error('Error fetching disease data:', error);
    throw error;
  }
};
