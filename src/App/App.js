import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import { Posts } from '../Posts/Posts';

import axios from 'axios';

export default () => {
    useEffect(() => {
        const getToken = async () => {
            const res = await axios.get('/api/csrf', { withCredentials: true });
            const csrfToken = res.data.csrfToken;
            
            axios.defaults.headers.post['csrf-token'] = csrfToken;
        }

        getToken();
    }, []);

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </div>
    )
};