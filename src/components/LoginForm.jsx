import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const loggedData = {
        username,
        password
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //signup post (once we have server running)
        const API_ENDPOINT = 'http://localhost:3000/';

        try {
            const response = await axios.post(API_ENDPOINT, loggedData);
            
            console.log('responding data =>', response)
            console.log("successful login", response.data);

            //navigate('/GameContainer');
            setLoggedIn(true);

            // if (response.data.success) {
            //     console.log("Successful login", response.data);
            //     setLoggedIn(true);
            // } else {
            //     setLoginError(response.data.message || "Login Failed. Please try again");
            // }
        } catch (err) {
            console.log('Error loggin user in', err);
        }
    };

    useEffect(() => {
        if (loggedIn) {
            navigate('/GameContainer')
        }
    }, [loggedIn]);

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <label>Username : </label>
                <input
                    className="login-input"
                    id="username"
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Write Username'
                    required
                />
                <label>Password  :</label>
                <input id="password"
                    className="login-input"
                    type="password"
                    value={password}
                    placeholder='Write Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button id="loginbutton" type="submit">Log In</button>
            </form>
            <Link to='SignUpForm'>
                Don't have an account?<br />
                Sign up for one!
            </Link>
        </div>
    );
}

export default LoginForm;
