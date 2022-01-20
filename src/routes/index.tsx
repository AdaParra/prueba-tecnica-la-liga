import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "pages/Login";
import Users from "pages/Users";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

function PrivateRoute({ children }) {
    const auth = localStorage.getItem('token');
    return auth ? children : <Navigate to="/login" />;
  }

export default function RouteConfiguration() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                path="/users"
                element={
                    <PrivateRoute>
                    <Users />
                    </PrivateRoute>
                }
                />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
