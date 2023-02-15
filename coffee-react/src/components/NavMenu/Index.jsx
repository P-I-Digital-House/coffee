import MenuPic from "../../assets/menu.png";
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import "./navmenu.css"

export function NavMenu() {
    return (
      <Menu>
        <h3 className="label">Minha conta</h3>
        <Link className="menu-item" to="/usuario">
        Dados Pessoais
      </Link>
      <Link className="menu-item" to="/">
        Meus Pedidos
      </Link>
      <Link className="menu-item" to="/endereco">
        Endereço
      </Link>
      <Link className="menu-item" to="/pagamento">
        Métodos de Pagamento
      </Link>
      <Link className="menu-item" to="/">
        Configurações
      </Link>
      <Link className="menu-item" to="/">
        Favoritos
      </Link>
      <Link className="menu-item" to="/">
      Política de Privacidade
      </Link>
      </Menu>
    );
  }
  