import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Spacial/firebase_init';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RiErrorWarningFill } from 'react-icons/ri';

const Register = () => {
    const [newUserEmail, userNewEmail, loadingNewEmail, errorNewEmail,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [profileUpdate, updating, updateError] = useUpdateProfile(auth);
    //Path Declare
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    if (userNewEmail || updating) {
        navigate(from, { replace: true });
    }
    //Spinner
    let spinner;
    if (loadingNewEmail) {
        spinner = <div class="d-flex align-items-center text-info">
            <strong>Loading...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    }
    //Error
    let errorMassage
    if (errorNewEmail || updateError) {
        errorMassage = <div class="alert alert-warning" role="alert">
            <RiErrorWarningFill />
            {errorNewEmail?.message}
            {updateError?.message}
        </div>
    }
    const registerForm = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const pass = event.target.pass.value
        await newUserEmail(email, pass)
        await profileUpdate({ displayName: name });

    }
    return (
        <div className='container'>
            {spinner}
            <ToastContainer />
            <div className='row col row-cols-md-3 justify-content-center'>
                <Form onSubmit={registerForm}>
                    <span className='mb-3 mt-3 border-bottom  h4 pb-2'>Please Register Here</span>
                    <Form.Group className="mb-3 mt-4 cards" >
                        <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3 cards" >
                        <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3 cards" >
                        <Form.Control type="password" name='pass' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 cards" >
                        <Form.Control type="password" name='Confirm-pass' placeholder="Confirm Password" required />
                    </Form.Group>
                    <span>If you have an account, please <NavLink to="/login">Login Here</NavLink></span><br />
                    <Button className='mt-3' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>


            <div className='text-center mt-3 mb-3'>
                {errorMassage}
            </div>
        </div>
    );
};

export default Register;