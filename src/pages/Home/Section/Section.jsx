import React from 'react';
import { Container } from 'react-bootstrap';
import './Section.css';


const Section = () => {
    return (
       
    <Container>
         <div className="restaurant">
        <h1>Welcome to Our Restaurant</h1>
        <p>We strive to provide a warm and welcoming atmosphere for our customers.</p>

        <div className="content-wrapper mb-5 d-flex justify-content-evenly mt-5">
          <div className="menu">
            <h2 className='text-center'>Menu</h2>
            <ul className='mt-4'>
              <li>Appetizers</li>
              <li>Main courses</li>
              <li>Desserts</li>
            </ul>
          </div>
          <div className="reviews">
            <h2 className='text-center'>Reviews</h2>
            <p className='ms-4 mt-4'>Here are some reviews from our happy customers:</p>
            <ul>
              <li>"The food was amazing and the service was top-notch!"</li>
              <li>"I highly recommend this restaurant to anyone looking for a great dining experience."</li>
              <li>"The atmosphere was cozy and inviting, and the staff made me feel right at home."</li>
            </ul>
          </div>
        </div>
        <div className="reservations mb-5">
            <h2>Reservations</h2>
            <p>To make a reservation, please call us at (123) 456-7890 or use our online reservation system.</p>
          </div>
        </div>
        <div className="containers mt-5">
        <h2>About Us</h2>
        <div className="about-info">
          <div className="about-chefs">
            <h3>Meet Our Chefs</h3>
            <p>Our team of expert chefs have years of experience in the culinary industry. They use only the freshest and highest quality ingredients to create delicious and innovative dishes that will tantalize your taste buds.</p>
            <ul>
              <li>Chef John Smith - Specializes in French cuisine</li>
              <li>Chef Anne-Sophie - Expert in french dishes</li>
              <li>Chef Marco Pierre White  - Masters in french desert</li>
            </ul>
          </div>
          <div className="about-cleanliness">
            <h3>Cleanliness is Our Top Priority</h3>
            <p>We take cleanliness very seriously and ensure that our restaurant is always spotless. Our staff is trained to follow strict hygiene and sanitation protocols to ensure the safety and well-being of our customers.</p>
            <ul>
              <li>All surfaces are sanitized regularly</li>
              <li>Hand sanitizer is available throughout the restaurant</li>
              <li>Our staff wears gloves and masks while handling food</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>   
    );
};

export default Section;