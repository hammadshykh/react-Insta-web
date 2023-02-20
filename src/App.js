import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import SignUp from "./components/Sign-up/SignUp";
import SignIn from "./components/Sign-in/SignIn";
import Login from "./components/Login/Login";
import InstaPage from "./components/InstaPage/InstaPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/InstaPage" element={<InstaPage />} />
      </Routes>
    </div>
  );
};

export default App;
