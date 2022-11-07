import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";
import { CadastroUsuario } from "../components/Cadastro/Index";
import "../components/Cadastro/cadastro.css";

function Cadastro() {
  return (
    <div>
      <NavFixed />
      <CadastroUsuario />
      <Footer />
    </div>
  );
}

export default Cadastro;
