import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';


const Footer = () => {
    return (
        <footer className='footer-bg'>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className="location">
                <h4>Our Location</h4>
                <p>123 Rue de la Baguette</p>
                <p>Paris, France 75001</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="contact">
                <h4>Contact Us</h4>
                <p>Phone: +33 1 23 45 67 89</p>
                <p>Email: info@frenchrestaurant.com</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="socials">
                <h4 className='ms-4'>Socials</h4>
                <ul className='footer-ul'>
                  <li><i className="fab fa-facebook"></i>Facebook</li>
                  <li><i className="fab fa-instagram"></i>Instagram</li>
                  <li><i className="fab fa-twitter"></i>Twitter</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;