import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import loginStyles from '../Login/Login.css';

export const Signup = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const data = {
            name: form.get('name'),
            email: form.get('email'),
            password: form.get('password'),
        };
        auth.signup(
            data,
            (user) => user && navigate('/login', { replace: true })
        );
    }

    return (
        <div>
            <form className={loginStyles.form} onSubmit={onSubmit}>
                <div>
                    <label>
                        Name: <input type='text' name='name' />
                    </label>
                </div>
                <div>
                    <label>
                        Email: <input type='text' name='email' />
                    </label>
                </div>
                <div>
                    <label>
                        Password: <input type='password' name='password' />
                    </label>
                </div>
                <button type='submit'>Create Account</button>
            </form>
            <p>Have an account? <Link to={'/login'}>Log in</Link></p>
        </div>
    );
}