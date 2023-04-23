import React, {useState} from 'react'
import loginCartoon from '../../assets/noodleGuy.jpg'
import * as sessionActions from '../../store/session';
import {useDispatch, useSelector} from 'react-redux'
import './index.scss';
import { Redirect, NavLink } from 'react-router-dom';


const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/'/>; // change to grab cart items 

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ email, password }))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    const handleDemo = e => {
        e.preventDefault()
        return dispatch(sessionActions.login({ email: "demo@user.io", password: "password" }))
    }

    return ( 
        <>
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 id='login-header'>Log In</h1>
                    <div id='login-email'> 
                        <input 
                            id='login-email'
                            type='text' 
                            placeholder='email'
                            required
                            onChange={e => setEmail(e.target.value)}
                            />
                    </div>
                    <div id='login-password'>
                        <input 
                            id='login-password' 
                            type='password' 
                            placeholder='password'
                            required
                            onChange={e => setPassword(e.target.value)}
                            />
                    </div>
                    <div id='login-errors'>
                        {errors.map((error, idx) => <div key={idx}>{error}</div>)}
                    </div>
                    <div id='login-button' onClick={handleSubmit}>
                        <button>Log In</button>
                    </div>
                    <div id='demo-login' onClick={handleDemo}>
                        <button>Log in as demo user</button>
                    </div>
                    <div id='signup-link'>
                        <NavLink to='/signup'>Need to create an account?</NavLink>
                    </div>
                </form>
            </div>
            <img id='login-cartoon' src={loginCartoon} alt="noodle-guy" />
        </>
    )
}

export default LoginFormPage