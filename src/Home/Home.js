import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Todos from '../todos/Todos';
import store from '../todos/TodoStore';

export const Home = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    return (
        <div className='home'>
            <h1>Todos App</h1>
            {user && <div>Hello {user.name}</div>}
            {user && <Todos store={store} />}
            {!user && (
                <div>
                    <button onClick={() => navigate('/login')}>Log in</button>
                    <button onClick={() => navigate('/signup')}>Sign Up</button>
                </div>
            )}
            {user && <button onClick={logout}>Log out</button>}
        </div>
    );
}