import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/Pages/Home";
import Cadastro from "../src/Pages/Cadastro";
import Login from "../src/Pages/Login";
import Produtos from "../src/Pages/Produto.jsx";
import Usuario from "../src/Pages/Usuario";
import "../src/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetalheProdutos } from "./Pages/DetalheProduto";
import { CarrinhoCompras } from "./Pages/CarrinhoCompras";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
  return(
    <CartProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/login/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/carrinho" element={<CarrinhoCompras />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/detalhe-produto/:id" element={<DetalheProdutos />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
