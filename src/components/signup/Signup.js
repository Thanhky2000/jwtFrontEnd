import React, { useState } from 'react';
import '../signup/Signup.scss';
import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios'; 
import { toast } from 'react-toastify';

const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const isValidate = () => {
        if(!email) {
            toast.error("Please enter your email");
            return false;
        }
        let regX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regX.test(email)) {
            toast.error("deo phai email");
            return false;
        }
        if(!phone) {
            toast.error("Please enter your phone");
            return false;
        }
        if(!userName) {
            toast.error("Please enter your username");
            return false;
        }
        if(!password) {
            toast.error("Please enter your password");
            return false;
        }
        if(password != confirmPassword) {
            toast.error("Your password is not the same");
            return false;
        }
        return true;
    }
    const handleRegister = () => {
        let checkValidate = isValidate();
        let userData = {email, phone, userName, password}
        console.log("check userData >>> = : ", userData);
    }



    return (
        <div className='login-container mt-5'>
           <div className='container d-flex justify-content-center'>
            <div className='row'>
            <div className='login-form col-sm-12'>
                <div className='brand'>
                <div className='brand-content gap-3'>
                    <h2>
                       Register
                    </h2>
                    <button className='btn btn-primary'  type='submit'>Log in with Facebook</button>
                    <hr/>
                    <input className='form-control'  type='text' placeholder='Email'
                        value={email} onChange={(event) => setEmail(event.target.value)}
                    >
                    </input>
                    <input className='form-control'  type='text' placeholder='Mobilephone Number'
                        value={phone} onChange={(event) => setPhone(event.target.value)}
                    ></input>
                    <input className='form-control'  type='text' placeholder='User Name'
                    value={userName} onChange={(event) => setUsername(event.target.value)}
                    ></input>
                    <input className='form-control'  type='password' placeholder='Password'
                        value={password} onChange={(event) => setPassword(event.target.value)}
                    ></input>
                    <input className='form-control' type='password' placeholder="Confirm Password"
                        value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                    ></input>
                   <button className='btn my-5 btn-blues' onClick={() => handleRegister()}>Register</button>
                </div>
                </div>
            </div>
            <div className='bottom-content mt-5'>
                    <span>Have an account?  
                       <Link to='/login'>Login</Link>
                    </span>
            </div>
            </div>
           </div>
        </div>
    );
}

export default Signup;