import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser  } from '../api';
import './Login.css';

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({
        email: 'bob@email.com',
        password: 'p123'
    });
    const [status, setStatus] = React.useState('idle');
    const [error, setError] = React.useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    function handleSumbit(e) {
        e.preventDefault();
        setStatus('submitting')
        loginUser(loginFormData)
            .then(res => {
                setError(null);
                localStorage.setItem("loggedin", true)
                if(res && res.user) {
                    localStorage.setItem("user", JSON.stringify(res.user))
                }
                const pathFrom = location?.state?.pathFrom || '/host';
                navigate(pathFrom, { replace: true });
            })
            .catch(err => setError(err))
            .finally(() => {
                setStatus('idle');
            })
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className='login-container'>
            {location?.state?.message && <h3 className='login-error'>{location.state.message}</h3>}
            <h1 className='login-header'>Sign in to your account</h1>
            {error?.message && <h3 className='login-error'>{error.message}</h3>}
            <form className='login-form' onSubmit={handleSumbit}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    onChange={handleChange}
                />
                <button disabled={status === 'submitting'}>
                    {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </form>
        </div>
    )
}
