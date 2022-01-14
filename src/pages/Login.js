import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import './Login.css';
// import lo from "../images/login.jpg";
import { auth } from '../firebase';


const Login = () => {

    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

//firebase login...
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            navigate('/')
        })
        .catch(error => alert(error.message))

    }

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{

            if (auth) {
                navigate('/home')
            }
        })
        .catch(error =>alert(error.message))

        //firebase register...


    }


    return (
        <div className='Login'>
        <Link to='/'>
            {/* <img className='Login_logo' src={lo}
            alt='' /> */}

            </Link>

            <div className='Login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value ={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type ='submit' onClick={signIn}
                    className='Login_signInButton'>Sign In</button>
                </form>
                <p>By signing-in you agree to the C-T-E Conditions of use.
                Please see Our Privacy Notice,Our Cookies Notice
                and our Interest-Based Ads Notice.</p>

                <button onClick={register}
                className='login_registerButton'> create your C-T-E Account</button>
            </div>
        </div>
    )
}

export default Login
