import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import { getAuthenticationToken } from "../storage/localStorage";

function PrivateRoute({ children }) {
  const tokenExists = getAuthenticationToken();
  return tokenExists ? children : <Navigate to="/login" />;
}

export default function RouteConfiguration() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
