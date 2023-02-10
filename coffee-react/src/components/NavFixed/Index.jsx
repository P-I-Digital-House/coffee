import "../NavFixed/navFixed.css";
import Icon from "../../assets/logo.svg";
import IconXicara from "../../assets/icon-xicara.svg";
import IconCarrinho from "../../assets/icon-carrinho.svg";
import IconUser from "../../assets/user-1.png";
import Search from "../../assets/search.png";
import Menu from "../../assets/menu.png";
import { Link } from "react-router-dom";
import { NavMenu } from "../NavMenu/Index";

export function NavFixed() {
  return (
    <div className="containernav">
      <div className="nav">
        <div className="menu-busca">
        <NavMenu pageWrapId={'root'} />
          <div className="busca">
            <input type="text" name="busca" id="busca" />
            <a href="#">
              <img src={Search} alt="" className="img-busca" />
            </a>
          </div>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={Icon} alt="" className="img-logo" />
          </Link>
        </div>
        <div className="carrinho">
          <Link to="/produtos">
            <img src={IconXicara} alt="" className="icon" />
          </Link>
          <a href="/carrinho">
            <img src={IconCarrinho} alt="" className="icon" />
          </a>
          <Link to="/login/cadastro">
            <img src={IconUser} alt="" className="icon-user" />
          </Link>
        </div>
      </div>
      <div className="busca-2">
        <input type="text" name="busca-2" id="busca-2" />
        <a href="#">
          <img src={Search} alt="" className="img-busca-2" />
        </a>
      </div>
    </div>
  );
}