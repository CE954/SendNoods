import React, {useState} from 'react'
import loginCartoon from '../../assets/noodleGuy.jpg'
import * as sessionActions from '../../store/session';
import {useDispatch, useSelector} from 'react-redux'
import './index.scss';
import { Redirect } from 'react-router-dom';


const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/' />; // change to grab cart items 

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
                            />
                    </div>
                    <div id='login-password'>
                        <input 
                            id='login-password' 
                            type='password' 
                            placeholder='password'
                            required
                            />
                    </div>
                </form>
            </div>
            <img id='login-cartoon' src={loginCartoon} alt="noodle-guy" />
        </>
    )
}

export default LoginFormPage