import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';


const Banner = () => {
    return (
        <Container>
            <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/4jG317v/istockphoto-1408797987-170667a.jpg" alt="istockphoto-1408797987-170667a"
        
          />
          <Carousel.Caption>
            <h3>A Taste of France</h3>
            <p><small>Our French restaurant offers a truly authentic dining experience with classic French dishes like escargots, coq au vin, and bouillabaisse, all made with the freshest ingredients and traditional techniques. Our chef has a passion for French cuisine, and every dish is prepared with the utmost care and attention to detail.</small></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Vv62Ljw/istockphoto-516329534-612x612.jpg" alt="istockphoto-516329534-612x612" 
          />
  
          <Carousel.Caption>
            <h3>Bon Appétit!</h3>
            <p><small>As soon as you step inside our French restaurant, you'll be transported to the streets of Paris with our charming décor and warm ambiance. Our elegant yet cozy dining room features soft lighting, comfortable seating, and a relaxed atmosphere that's perfect for a romantic dinner or a night out with friends.</small></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/p6qcBnz/istockphoto-959584318-612x612.jpg" alt="istockphoto-959584318-612x612"
           
          />
  
          <Carousel.Caption>
            <h3>Mouthwatering Menus</h3>
            <p>
             <small> To complement your meal perfectly, we offer an extensive wine list featuring a variety of French vintages. From crisp white wines to bold reds, our selection has been carefully curated to provide the perfect pairing for every dish. Our knowledgeable staff is always on hand to help you choose the perfect wine to enhance your dining experience.</small>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </Container>
    );
};

export default Banner;