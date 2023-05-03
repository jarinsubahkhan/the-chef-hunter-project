import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useState } from 'react';

const Register = () => {

    const [regError, setRegError] = useState('');

    const {createUser} = useContext(AuthContext);

    const handleRegister = event => {



        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            setRegError("password not valid need 6 character ");
            return;
          }

          if(!email || email === ''){
            setRegError('cannot be blank!')
            return;
          }

        //   if( !password || password === ''){
        //     setRegError('cannot be blank!')
        //   }

        console.log(name, email, password, photo)
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            setRegError('')
            setPassError('')
            // event.target.reset();
        })
        .catch(error =>{
            console.log(error.message);
            // setRegError(error.message);
            
        })
    }

    return (
      <div className='container mt-5'>
        <h2>Please Register</h2>
        <Form onSubmit={handleRegister} className='mx-form'>
        <Form.Group className="mb-3 w-50" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter name" required />
         
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email"  />
         
        </Form.Group>
  
        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password"/>
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formBasicPhoto">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Photo Url" required/>
        </Form.Group>
       
        <Button variant="dark" type="submit">
          Register
        </Button>
        <br />
<p className='mt-2'>Already have an account ? <Link to="/login">Login</Link></p>
<p className='text-danger'>{regError}</p>

      </Form>
      </div>
    );
};

export default Register;