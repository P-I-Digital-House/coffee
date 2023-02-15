import "../NavFixed/navFixed.css";
import Icon from "../../assets/logo.svg";
import IconXicara from "../../assets/icon-xicara.svg";
import IconCarrinho from "../../assets/icon-carrinho.svg";
import IconUser from "../../assets/user-1.png";
import Search from "../../assets/search.png";
import Menu from "../../assets/menu.png";
import { Link } from "react-router-dom";
import { NavMenu } from "../NavMenu/Index";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { SignOut } from "phosphor-react";

export function NavFixed() {
  const { totalQuantityCart } = useContext(CartContext)
  const { getUserCookie, logout } = useContext(LoginContext)
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
          <Link to={getUserCookie() ? "/usuario" : "/login"} style={{display: "flex", alignItems: "flex-end", gap: ".5rem"}}>
            <img src={IconUser} alt="" className="icon-user" />
          </Link>
          <Link to="/produtos">
            <img src={IconXicara} alt="" className="icon" />
          </Link>
          <Link to="/carrinho" style={{position: "relative"}}>
          <img src={IconCarrinho} alt="" className="icon" />
            <div className="rounded-circle">{totalQuantityCart}</div>
          </Link>
          <a onClick={()=>logout()}><SignOut size={32} weight="bold" cursor={"pointer"}/></a>
        </div>
        
      </div>
      <span style={{fontSize: '.85rem', alignSelf: "flex-end", color: "white"}}>{getUserCookie() ? "Olá, "+getUserCookie()+"!" : ""}</span>
      <div className="busca-2">
        <input type="text" name="busca-2" id="busca-2" />
        <a href="#">
          <img src={Search} alt="" className="img-busca-2" />
        </a>
      </div>
    </div>
  );
}