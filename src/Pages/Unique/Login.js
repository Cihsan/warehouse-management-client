import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
const Login = () => {
    return (
        <div className=''>
            <div className='p-4 bg-info'>
            </div>
            <Form className='w-25 m-auto'>
                <h2 className='mb-3 mt-3'>Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <small>If you don't have an account, please <NavLink to="/login">Register Here</NavLink></small>
                <Button className='mt-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;