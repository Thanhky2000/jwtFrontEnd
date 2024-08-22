import React from 'react';
import '../login/Login.scss';

const Login = (props) => {
    return (
        <div className='login-container mt-5'>
           <div className='container'>
            <div className='row'>
            <div className='login-right col-4'></div>
            <div className='login-form col-4'>
                <div className='brand'>
                <div className='brand-content gap-3'>
                    <h2>
                        My Portfolio
                    </h2>
                    <input className='form-control'  type='text' placeholder='Username'></input>
                    <input className='form-control' type='password' placeholder="Password"></input>
                   <button className='btn btn-primary'  type='submit'>Login</button>
                   <hr/>
                   <button className='brand-content-Login-OA'>
                   <i class="bi bi-facebook"></i>
                    Log in with Facebook
                    </button>
                   <button className='brand-content-password'>Forgot password?</button>
                </div>
                <hr/>
                <div className='bottom-content mt-5'>
                    <span>Don't have an account? 
                       <a href='signup'>Sign up</a>
                    </span>
                </div>
                </div>
            </div>
            <div className='login-right col-4 '></div>
            </div>
           </div>
        </div>
    );
}

export default Login;