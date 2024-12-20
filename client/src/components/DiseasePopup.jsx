import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DiseasePopup({ disease, onClose, onViewTreatment }) {
  return (
    <Modal show onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{disease.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{disease.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onViewTreatment}>
          View Treatment
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DiseasePopup;
