import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Header = () => {

const {user} = useContext(AuthContext);

    return (
        <>
      <Navbar className='navbar-bg'>
        <Container>
          <Navbar.Brand className='fw-bolder fs-3' href="#home">Cuisinett</Navbar.Brand>
          <Nav className="ms-auto gap-4 text-black text-decoration-none">
            <Link to="/" href="#home">Home</Link>
            <Link href="#blog">Blog</Link>
            <Link className='profile-link' href="">
                 {
                    user.displayName ?
                     <a className='profile-img' href="">Profile</a>
                     : 
                    <Link to="/login" className='login-btn'>
                        <Button variant='dark'>Login</Button>
                    </Link>
                } 
                
                </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;