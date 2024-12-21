import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Description from '../components/Description';
import SearchBar from '../components/SearchBar';
import ResultDisplay from '../components/ResultDisplay';
import Footer from '../components/Footer';
import { fetchDiseaseData } from '../api/api';

const LandingPage = () => {
  const [disease, setDisease] = useState('');
  const [treatment, setTreatment] = useState('');

  const handleSearch = async (symptoms) => {
    try {
      const data = await fetchDiseaseData(symptoms);
      setDisease(data.disease);
      setTreatment(data.treatment);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const scrollToSearchBar = () => {
    document.querySelector('.search-bar').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Description onCheckSymptomsClick={scrollToSearchBar} />
      <SearchBar onSearch={handleSearch} />
      <ResultDisplay disease={disease} treatment={treatment} />
      <Footer />
    </div>
  );
};

export default LandingPage;
