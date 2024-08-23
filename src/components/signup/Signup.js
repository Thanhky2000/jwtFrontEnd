import React from 'react';
import '../signup/Signup.scss';

const Signup = (props) => {
    return (
        <div className='login-container mt-5'>
           <div className='container d-flex justify-content-center'>
            <div className='row'>
            <div className='login-form col-sm-12'>
                <div className='brand'>
                <div className='brand-content gap-3'>
                    <h2>
                        My Portfolio
                    </h2>
                    <button className='btn btn-primary'  type='submit'>Log in with Facebook</button>
                    <hr/>
                    <input className='form-control'  type='text' placeholder='Mobile Number or Email'></input>
                    <input className='form-control'  type='text' placeholder='Full Name'></input>
                    <input className='form-control'  type='text' placeholder='Username'></input>
                    <input className='form-control' type='password' placeholder="Password"></input>
                   <button className='btn my-5 btn-blues'  type='submit'>Sign up</button>
                </div>
                </div>
            </div>
            <div className='bottom-content mt-5'>
                    <span>Have an account?  
                       <a href='/login'>Login</a>
                    </span>
            </div>
            </div>
           </div>
        </div>
    );
}

export default Signup;