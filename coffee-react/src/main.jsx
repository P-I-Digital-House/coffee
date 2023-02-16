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
import Pagamento from "../src/Pages/Pagamento"
import Endereco from "../src/Pages/Endereco"
import { CartProvider } from "./contexts/CartContext";
import { AdminPage } from "../src/Pages/AdminPage";
import { EditPage } from "../src/Pages/EditPage";
import { LoginProvider } from "./contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { BuscaProduto } from "./components/BuscaProduto/Index";
import { BuscaProdutos } from "./Pages/BuscaProduto";
import { CompraFinalizada } from "./Pages/CompraFinalizada";



export default function App() {
  return(
    <CartProvider>
      <LoginProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}  />
              <Route path="/login/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/carrinho" element={<CarrinhoCompras />} />
              <Route path="/usuario" element={<Usuario />} />
              <Route path="/detalhe-produto/:id" element={<DetalheProdutos />} />
              <Route path="/busca/:search" element={<BuscaProdutos />} />
              <Route path="/admin/users" element={<AdminPage />} />
              <Route path="/admin/users/edit/:id" element={<EditPage />} />
              <Route path="/pagamento" element={<Pagamento />} />
              <Route path="/endereco" element={<Endereco />} />
              <Route path="/finalizada" element={<CompraFinalizada />} />
            </Routes>
          </BrowserRouter>
        </LoginProvider>
      </CartProvider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);