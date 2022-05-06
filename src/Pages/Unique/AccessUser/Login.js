import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Spacial/firebase_init';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [emailPassLogin, emailPassLoginUser, emailPassLoginLoading, emailPassLoginError] = useSignInWithEmailAndPassword(auth);
    const [loginGoogle, userLoginGoogle, loadingLoginGoogle, errLoginGoogle] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    //return coming path
    if (userLoginGoogle || emailPassLoginUser) {
        
        //jwt
        const url='http://localhost:5000/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email:user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => localStorage.setItem("cToken", data.token));
        
        navigate(from, { replace: true });
    }
    //Loading 
    let spinner;
    if (loadingLoginGoogle || emailPassLoginLoading || loading) {
        spinner = <div class="d-flex align-items-center text-info">
            <strong>Loading...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    }
    //Error Handle 
    let errorMassage
    if (errLoginGoogle || emailPassLoginError ||error) {
        errorMassage = <small className='text-danger border border-primary p-2 mt-5'>
            {errLoginGoogle?.message}
            {emailPassLoginError?.message}
            {error?.message}
        </small>
    }

    const refmail = useRef('')
    const loginEmailPass = (event) => {
        const email = refmail.current.value;
        const pass = event.target.pass.value
        console.log(email, pass);
        emailPassLogin(email, pass)
        event.preventDefault()
    }
    // toast
    const resetPass = async (event) => {
        const email = refmail.current.value;
        if (email) {
            toast('Sent email Check Now');
            await sendPasswordResetEmail(email);
        }
        else {
            toast('please enter your email address Only');
        }
    }
    return (
        <div>
            <div className='container'>{spinner}</div>
            <ToastContainer />
            <Form onSubmit={loginEmailPass} className='w-25 m-auto'>
                <span className='mb-3 mt-3 h3 border-bottom h4 pb-2'>Please Login</span>
                <Form.Group className="mb-3 mt-4 cards" controlId="formBasicEmail">
                    <Form.Control type="email" ref={refmail} placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3 cards" controlId="formBasicPassword">
                    <Form.Control type="password" name='pass' placeholder="Password" required />
                </Form.Group>
                <small>If you don't have an account, please <NavLink to="/register">Register Here</NavLink></small>
                <Button className='mt-3' variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            <div className='text-center mt-3 mb-3'>
                <span>Forget Password ?<button class="btn btn-link" onClick={resetPass}>Reset Password</button></span><br /><br />
                <small><button onClick={() => loginGoogle()}>Login With Google</button></small><br /><br />
                {errorMassage}
            </div>
        </div>
    );
};

export default Login;