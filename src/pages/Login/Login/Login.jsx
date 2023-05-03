import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
const Login = () => {
    return (
        <div className='container mt-5'>
       <Form className='mx-auto'>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="dark" type="submit">
        Submit
      </Button>
 <div className='mt-2'>
 <Button  variant='light'>Google Sign-in</Button>
<Button variant='light'>GitHub Sign-in</Button>
 </div>
    </Form>      
        </div>
    );
};

export default Login;