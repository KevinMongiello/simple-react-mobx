import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import { Posts } from '../Posts/Posts';

export default () => (
    <div>
        Hello
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    </div>
);