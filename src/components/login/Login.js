import React from 'react';
import '../login/Login.scss';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Login = (props) => {
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
                </div>
            </div>
            <div className='bottom-content mt-5'>
                    <span>Don't have an account? 
                    <NavLink to='/signup'>Login</NavLink>
                    </span>
            </div>
            </div>
           </div>
        </div>
    );
}

export default Login;