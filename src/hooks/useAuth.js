import React from 'react';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    const signup = async (newUser, callback) => {
        // fetch('localhost:3000/register', {
        //     body: {

        //     }
        // })
        callback(user);
    };

    const login = async (user, callback) => {
        // fetch
    }

    const signout = async (callback) => {
        // await data.signout();
        // setUser(null);
        callback();
    }

    const value = { user, signup, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => React.useContext(AuthContext);

