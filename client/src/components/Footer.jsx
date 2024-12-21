import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <Container>
        <p>
          <small>
            Disclaimer: MediDiagnose provides probable diseases based on symptoms but is not a substitute for professional medical advice. 
    Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. 
    The information provided on this platform is for informational purposes only and should not be relied upon as a sole source for diagnosis or treatment.
    MediDiagnose is not responsible for any actions taken based on the information provided.
          </small>
        </p>
        <p id="contact">
          <strong>Contact Us:</strong> diya.sang7@gmail.com | Phone: +977 9815095444 | 
        </p>
      </Container>
    </footer>
  );
}

export default Footer;