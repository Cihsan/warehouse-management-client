import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Spacial/firebase_init';
import { ToastContainer, toast } from 'react-toastify';
import { RiErrorWarningFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [emailPassLogin, emailPassLoginUser, emailPassLoginLoading, emailPassLoginError] = useSignInWithEmailAndPassword(auth);
    const [loginGoogle, userLoginGoogle, loadingLoginGoogle, errLoginGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    //return coming path
    if (userLoginGoogle || emailPassLoginUser || user) {
        //jwt
       const url = 'http://localhost:5000/loginSM'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => localStorage.setItem("sToken", data.token));
            navigate(from, { replace: true });

    }
    //Loading 
    let spinner;
    if (loadingLoginGoogle || emailPassLoginLoading || loading ||sending) {
        spinner = <div class="d-flex align-items-center text-info">
            <strong>Loading...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    }
    //Error Handle 
    let errorMassage
    if (errLoginGoogle || emailPassLoginError || error ||errorReset) {
        errorMassage =
            <div class="alert alert-warning" role="alert">
                <RiErrorWarningFill />
                {errLoginGoogle?.message}
                {emailPassLoginError?.message}
                {error?.message}
                {errorReset?.message}
            </div>
    }

    const refmail = useRef('')
    const loginEmailPass = async (event) => {
        const email = refmail.current.value;
        const pass = event.target.pass.value
        console.log(email, pass);
        emailPassLogin(email, pass)
        /* const {data} = await axios.post('http://localhost:5000/login', {email});
        localStorage.setItem('sToken', data.token); */
        event.preventDefault()
        event.target.reset()
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
        <div className='container'>
            {spinner}
            {errorMassage}
            <ToastContainer />
            <div className='row col row-cols-md-3 justify-content-center'>
                <Form onSubmit={loginEmailPass}>
                    <span className='mb-3 mt-3 h3 border-bottom h4 pb-2'>Please Login</span>
                    <Form.Group className="mb-3 mt-4 cards" controlId="formBasicEmail">
                        <Form.Control type="email" ref={refmail} placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3 cards" controlId="formBasicPassword">
                        <Form.Control type="password" name='pass' placeholder="Password" required />
                    </Form.Group>
                    <span className=''>If you don't have an account, please <NavLink to="/register">Register Here</NavLink></span><br />
                    <Button className='mt-3' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <div className='text-center mt-3 mb-3'>
                <span>Forget Password ?<button class="btn btn-link" onClick={resetPass}>Reset Password</button></span><br /><br />
                <small><button className='btn btn-outline-info' onClick={() => loginGoogle()}><FcGoogle></FcGoogle> Login With Google</button></small><br /><br />
            </div>
        </div>
    );
};

export default Login;