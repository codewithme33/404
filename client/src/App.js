import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    try {
      setError("");
      setPrediction(null); // Clear previous result

      const response = await axios.post("http://localhost:3000/predict", {
        symptoms,
        userId: "sampleUser123", // Replace with actual user ID if necessary
      });

      setPrediction(response.data);
    } catch (err) {
      setError("Unable to make a prediction. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>Disease Prediction</h1>

      <div className="form">
        <textarea
          rows="4"
          placeholder="Enter symptoms separated by spaces (e.g., fever headache nausea)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        ></textarea>
        <button onClick={handlePredict}>Predict</button>
      </div>

      {error && <div className="error">{error}</div>}

      {prediction && (
        <div className="result">
          <h2>Prediction Result</h2>
          <p><strong>Disease:</strong> {prediction.disease}</p>
          <p><strong>Treatment:</strong> {prediction.treatment}</p>
        </div>
      )}
    </div>
  );
}

export default App;
