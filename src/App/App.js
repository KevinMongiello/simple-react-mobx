import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";

export default () => (
    <div>
        Hello
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
);