import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Spacial/firebase_init';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Register = () => {
    const [newUserEmail,userNewEmail,loadingNewEmail,errorNewEmail,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [profileUpdate, updating, updateError] = useUpdateProfile(auth);

    const [loginGoogle, userLoginGoogle, loadingLoginGoogle, errLoginGoogle] = useSignInWithGoogle(auth);
    
    //Path Declare
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    if (userNewEmail ||userLoginGoogle ||updating) {
        navigate(from, { replace: true });
    }
    //Spinner
    let spinner;
    if (loadingNewEmail || loadingLoginGoogle) {
        spinner = <div class="d-flex align-items-center text-info">
        <strong>Loading...</strong>
        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
    }
    //Error
    let errorMassage
    if (errorNewEmail|| updateError || errLoginGoogle) {
        errorMassage = <small className='text-danger border border-primary p-2 mt-5'>
            {errorNewEmail?.message} 
            {updateError?.message} 
            {errLoginGoogle?.message} 
            </small>
    }
    const registerForm= async (event)=>{
        event.preventDefault()
        const name=event.target.name.value
        const email=event.target.email.value
        const pass=event.target.pass.value
        await newUserEmail(email,pass)
        await profileUpdate({ displayName: name });
        
    }
    return (
        <div>
            <div className='p-4 bg-info'>
                </div>
                <div className='container'>{spinner}</div>
                <ToastContainer/>
                <Form onSubmit={registerForm} className='w-25 m-auto'>
                    
                    <h2 className='mb-3 mt-3'>Please Register Here</h2>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" name='name' placeholder="Enter Your Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="email" name='email' placeholder="Enter Your Email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="password" name='pass' placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="password" name='Confirm-pass' placeholder="Confirm Password" required/>
                    </Form.Group>
                    <small>If you have an account, please <NavLink to="/login">Login Here</NavLink></small><br />
                    <Button className='mt-3' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
               
                <div className='text-center mt-3 mb-3'>
                <small><button onClick={() => loginGoogle()}>Login With Google</button></small><br /><br />
                    {errorMassage}
                </div>
        </div>
    );
};

export default Register;