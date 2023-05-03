import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation } from "react-router";
const Login = () => {

    const {signUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';

const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signUser(email, password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from, {replace : true})
    })
    .catch(error => {
        console.log(error);
    })
}

    return (
        <div className='container mt-5'>
            <h2>Please Login</h2>
       <Form onSubmit={handleLogin} className='mx-form'>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
     
      <Button variant="dark" type="submit">
        Login
      </Button>
 <div className='mt-2'>
 <Button  variant='light'>Google Sign-in</Button>
<Button className='ms-2' variant='light'>GitHub Sign-in</Button>
<br />
<p className='mt-2'>Don't have an account yet? <Link to="/register">Register</Link></p>

 </div>
    </Form>      
        </div>
    );
};

export default Login;