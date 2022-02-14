import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state && location.state.from && location.state.from.pathname

    const onSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const data = {
            email: form.get('email'),
            password: form.get('password'),
        };
        auth.login(
            data,
            () =>navigate(from, { replace: true })
        );
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Email: <input type='text' name='email' />
                </label>
                <label>
                    Password: <input type='password' name='password' />
                </label>
            </form>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
    );
}