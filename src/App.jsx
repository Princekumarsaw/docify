import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";

const App = () => {
  return (
       <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/SignUp" element={<SingUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
