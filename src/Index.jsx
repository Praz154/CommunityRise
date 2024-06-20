import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import SignUp from "./SignUp.jsx";
import Register from "./Register.jsx";

function Index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Index;
