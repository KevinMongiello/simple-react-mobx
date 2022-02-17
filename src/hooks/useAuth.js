import React from 'react';
import axios from 'axios';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    const signup = async (newUser, callback) => {
        try {
            const url = 'http://localhost:3000/api/user/register';
            const data = { ...newUser };
            const user = (await axios({
                url,
                method: 'post',
                data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })).data;
            console.log('New User: ' , user);
            callback(user);
        } catch (err) {
            console.log('ERROR:: ', err);
            callback(null);
        }
    };

    const login = async (_user, callback) => {
        try {
            const url = 'http://localhost:3000/api/user/login';
            const data = { ..._user };
            const jwt = (await axios({
                url,
                method: 'post',
                data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })).data;
            console.log('Login User: ' , user);
            callback(user);
        } catch (err) {
            console.log('Login failed... ', err);
            callback(null);
        }
    }

    const signout = async (callback) => {
        // await data.signout();
        // setUser(null);
        callback();
    }

    const value = { user, signup, signout, login };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => React.useContext(AuthContext);

