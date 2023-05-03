import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src="https://i.ibb.co/pwV2v0N/1551659700811.jpg" alt="404 error" />
      <Link to="/">Go back to home page</Link>      
        </div>
    );
};

export default NotFound;