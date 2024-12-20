import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import Description from './components/Description.jsx';
import Footer from './components/Footer.jsx';
import DiseasePopup from './components/DiseasePopup.jsx';
import TreatmentPopup from './components/TreatmentPopup.jsx';

function App() {
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showTreatmentPopup, setShowTreatmentPopup] = useState(false);

  const handleSearch = (symptoms) => {
    // Simulated response for demonstration. Replace with actual API call logic.
    const dummyResponse = {
      name: "Influenza",
      description: "Influenza is a viral infection that attacks your respiratory system. Symptoms include fever, cough, sore throat, and fatigue. It is commonly referred to as the flu.",
      treatments: [
        "Stay hydrated and rest.",
        "Take over-the-counter medications for fever and pain.",
        "Consult a doctor for antiviral medications if necessary."
      ]
    };
    setDiseaseInfo(dummyResponse);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleViewTreatment = () => {
    setShowTreatmentPopup(true);
  };

  const handleCloseTreatmentPopup = () => {
    setShowTreatmentPopup(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container text-center mt-5">
        <SearchBar onSearch={handleSearch} />
        {showPopup && (
          <DiseasePopup 
            disease={diseaseInfo} 
            onClose={handleClosePopup} 
            onViewTreatment={handleViewTreatment} 
          />
        )}
        {showTreatmentPopup && (
          <TreatmentPopup 
            treatments={diseaseInfo?.treatments || []} 
            onClose={handleCloseTreatmentPopup} 
          />
        )}
        <Description />
      </div>
      <Footer />

    </div>
  );
}

