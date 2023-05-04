import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';


const Header = () => {

const {user, logOut} = useContext(AuthContext);

const handleLogout = () => {
    logOut()
    .then()
    .catch(error => console.log(error));
}

    return (
        <>
      <Navbar className='navbar-bg'>
        <Container>
          <Navbar.Brand className='fw-bolder fs-3' href="#home">Cuisinett</Navbar.Brand>
          <Nav className="ms-auto gap-4 text-black text-decoration-none">
            <ActiveLink to="/" href="#home">Home</ActiveLink>
            <ActiveLink to="/blog" href="#blog">Blog</ActiveLink>
            <ActiveLink className='profile-link' href="">
                 {
                    user ?
                     <a onClick={handleLogout} className='profile-img' href="">Profile</a> 
                     : 
                    <Link to="/login" className='login-btn'>
                        <Button variant='dark'>Login</Button>
                    </Link>
                } 
                
                </ActiveLink>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;