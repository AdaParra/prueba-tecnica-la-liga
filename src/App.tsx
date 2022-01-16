import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "pages/Login";
import Users from "pages/Users";
import Home from "pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
