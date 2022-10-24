import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/Pages/Home";
import Cadastro from "../src/Pages/Cadastro";
import Login from "../src/Pages/Login";
import "../src/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
