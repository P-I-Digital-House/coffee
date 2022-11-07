import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";
import { LoginUsuario } from "../components/Login/Index";
import "../components/Login/login.css";

function Login() {
  return (
    <div>
      <NavFixed />
      <LoginUsuario />
      <Footer />
    </div>
  );
}

export default Login;
