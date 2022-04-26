import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function LoginRoute({ component: Component}) {
    const navigate = useNavigate();
    const userId = JSON.parse(window.localStorage.getItem('userData'))?.idUser;
    if (!userId) {
        navigate('/login');
        return ;
    }
    return <Component />;
};