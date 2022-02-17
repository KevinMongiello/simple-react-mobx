import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styles from './Login.css';

export const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state && location.state.from && location.state.from && location.state.from.pathname || '/';

    const onSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const data = {
            email: form.get('email'),
            password: form.get('password'),
        };
        
        auth.login(
            data,
            (user) => user && navigate(from, { replace: true })
        );
    }

    return (
        <div>
            <form  className={styles.form} onSubmit={onSubmit}>
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
                <button type="submit">Log in</button>
            </form>
            <p>Don't have an account? <Link to={'/signup'}>Sign up</Link></p>
        </div>
    );
}