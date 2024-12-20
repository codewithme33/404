import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <Container>
        <p>
          <strong>Contact Us:</strong> diya.sang7@gmail.com | Phone: +977 9815095333
        </p>
        <p>
          <small>
            Disclaimer: MediDiagnose provides probable diseases based on symptoms
            but is not a substitute for professional medical advice.
          </small>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
