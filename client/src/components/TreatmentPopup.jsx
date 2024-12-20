import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

function TreatmentPopup({ treatments, onClose }) {
  return (
    <Modal show onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Treatment Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {treatments.map((treatment, index) => (
            <ListGroup.Item key={index}>{treatment}</ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TreatmentPopup;
