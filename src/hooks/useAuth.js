import React from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    React.useEffect(getJwt, []);

    const signup = async (newUser, callback) => {
        try {
            const url = '/api/user/register';
            const data = { ...newUser };
            const user = (await axios({
                url,
                method: 'post',
                data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })).data;
            callback(user);
        } catch (err) {
            callback(null);
        }
    };

    const login = async (user, callback) => {
        try {
            const url = '/api/user/login';
            const jwt = (await axios({
                url,
                method: 'post',
                data: user,
                headers: {
                    'Content-Type': 'application/json',
                }
            })).data.token;
            receiveJwt(jwt, callback);
        } catch (err) {
            console.log('Login failed... ', err);
            callback(null);
        }
    }
    
    const logout = async () => {
        const url = '/api/user/logout';
        const { data } = (await axios({ url }))
        setUser(null);
    }

    function receiveJwt(jwt, cb) {
        const decoded = jwt_decode(jwt);
        setUser(decoded);
        cb && typeof cb === 'function' && cb(decoded);
    }

    async function getJwt () {
        const { data } = (await axios('/api/user/jwt'));
        if (data) {
            receiveJwt(data.token);
        }
    }

    const value = { user, signup, logout, login };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => React.useContext(AuthContext);

