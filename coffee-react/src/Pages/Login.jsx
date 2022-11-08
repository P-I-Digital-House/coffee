import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";
import { LoginUsuario } from "../components/Login/Index";
import "../components/Login/login.css";
import React, { useContext } from "react";
import { Context } from "../context/AuthContext";

function Login() {
  const { authenticated, handleLogin } = useContext(Context);
  console.debug('Login', authenticated);
  return (
    <div>
      <NavFixed />
      <LoginUsuario />
      <Footer />
    </div>
  );
}

export default Login;
