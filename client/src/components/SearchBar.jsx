import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function SearchBar() {
  const [symptoms, setSymptoms] = useState('');

  const handleSearch = () => {
    if (symptoms.trim()) {
      alert(`Searching for probable diseases with symptoms: ${symptoms}`);
      // Redirect to the treatment page logic can go here
    } else {
      alert('Please enter symptoms');
    }
  };

  return (
    <div>
      <Form className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Enter symptoms you are facing..."
          className="me-2"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>Search</Button>
      </Form>
    </div>
  );
}

export default SearchBar;

