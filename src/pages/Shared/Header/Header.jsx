import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
      <Navbar className='navbar-bg'>
        <Container>
          <Navbar.Brand href="#home">Cuisinett</Navbar.Brand>
          <Nav className="ms-auto gap-4 text-black">
            <Link to="/" href="#home">Home</Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;