import loginCartoon from '../../assets/noodleGuy.jpg'

const LoginFormPage = () => {




    return ( 
        <>
            <div className="login-form-container">
                <form className="login-form">
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