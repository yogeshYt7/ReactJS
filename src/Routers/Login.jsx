import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let navigate = useNavigate();
    let [username, setusername] = useState('');
    let [password, setpassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        let dbuser = window.localStorage.getItem('username');
        let dbpass = window.localStorage.getItem('password');


        if (dbuser === username && dbpass === password) {
            navigate('/');
            toast.success(`${username} Logged in Successfully`);
        } else {
            toast.error(`${username} Failed or Invalid credentials`);
        }


    };

    return (
        <div>
            <ToastContainer />
            <form>
                <fieldset style={{ textAlign: 'center' }}>
                    <legend>Login Page</legend>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => {
                            setusername(e.target.value);
                        }}
                    />
                    <br />
                    <br />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}
                    />
                    <br />
                    <br />

                    <button onClick={handleLogin}>Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;
