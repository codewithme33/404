import React, { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms: input }), // Pass the symptoms as input
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from the server.");
      }

      const data = await response.json();
      setResult(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Could not fetch results. Please try again.");
      setResult(null);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Search for Your Symptoms</h2>
      <input
        type="text"
        placeholder="Enter symptoms separated by commas"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "10px",
          width: "70%",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        Search
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>You might be suffering from:</h3>
          <p><strong>{result.disease}</strong></p>
          <h4>Recommended Treatment:</h4>
          <p>{result.treatment}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
