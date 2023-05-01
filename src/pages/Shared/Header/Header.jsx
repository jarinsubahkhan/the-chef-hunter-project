import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    return (
        <>
      <Navbar className='navbar-bg'>
        <Container>
          <Navbar.Brand href="#home">Cuisinett</Navbar.Brand>
          <Nav className="ms-auto gap-4 text-black">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;