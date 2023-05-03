import './index.scss';
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from '../../store/session';
import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import signupCartoon from '../../assets/noodleGuy.jpg'

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.signup({ name, email, password }))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) {
                    const errorMessages = data.errors.map((error) => error.msg);
                    setErrors(errorMessages);
                } else if (data) {
                    setErrors(data);
                } else {
                    setErrors(res.statusText);
                }
        });
    }

    return (
        <>
            <div id="signup-form-container">
                <form id="signup-form" onSubmit={handleSubmit}>
                    <h1 id='signup-header'>CREATE ACCOUNT</h1>
                    <div className='signup-input'>
                        <input
                            type='text'
                            placeholder='NAME'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='signup-input'>
                        <input
                            type='text'
                            placeholder='EMAIL ADDRESS'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='signup-input'>
                        <input
                            type='password'
                            placeholder='PASSWORD'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div id='signup-errors'>
                        {errors.map((error, idx) => <div key={idx}>{error}</div>)}
                    </div>
                    <div id='signup-button'>
                        <button type='submit'>SIGN UP</button>
                    </div>
                    <div id='signup-link'>
                        <NavLink to='/login'>ALREADY HAVE AN ACCOUNT?</NavLink>
                    </div>
                </form>
            </div>
            <img id='signup-cartoon' src={signupCartoon} alt="noodle-guy" />
        </>
    )
}

export default SignupFormPage;