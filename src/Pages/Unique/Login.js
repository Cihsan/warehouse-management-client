import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Spacial/firebase_init';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [emailPassLogin, emailPassLoginUser, emailPassLoginLoading, emailPassLoginError] = useSignInWithEmailAndPassword(auth);
    const [loginGoogle, userLoginGoogle, loadingLoginGoogle, errLoginGoogle] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    //return coming path
    if (userLoginGoogle ||emailPassLoginUser) {
        navigate(from, { replace: true });
    }
    //Loading 
    let spinner;
    if (loadingLoginGoogle ||emailPassLoginLoading) {
        spinner = <div class="d-flex align-items-center text-info">
        <strong>Loading...</strong>
        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
    }
    //Error Handle 
    let errorMassage
    if (errLoginGoogle||emailPassLoginError) {
        errorMassage = <small className='text-danger border border-primary p-2 mt-5'>
            {errLoginGoogle?.message} 
            {emailPassLoginError?.message}
            </small>
    }

    const refmail= useRef('')
        const loginEmailPass=(event)=>{
            const email=refmail.current.value;
            const pass=event.target.pass.value
            console.log(email,pass);
            emailPassLogin(email,pass)
            event.preventDefault()
        }
        // toast
        const resetPass = async (event) => {
            const email=refmail.current.value;
            if (email) {
                toast('Sent email Check Now');
                await sendPasswordResetEmail(email);
            }
            else{
                toast('please enter your email address Only');
            }
        }
        return (
            <div>
                <div className='p-4 bg-info'>
                </div>
                <div className='container'>{spinner}</div>
                <ToastContainer/>
                <Form onSubmit={loginEmailPass} className='w-25 m-auto'>
                    
                    <h2 className='mb-3 mt-3'>Please Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" ref={refmail} placeholder="Enter email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='pass' placeholder="Password" required/>
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