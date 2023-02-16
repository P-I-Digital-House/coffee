import "../Header/header.css";
import Icon from "../../assets/logo.svg";
import IconXicara from "../../assets/icon-xicara.svg";
import IconCarrinho from "../../assets/icon-carrinho.svg";
import IconUser from "../../assets/user-1.png";
import Search from "../../assets/search.png";
import { useContext, useEffect, useState } from "react";
import Destaque1 from "../../assets/destaque_1.jpg";
import Destaque2 from "../../assets/destaque_2.jpg";
import Destaque3 from "../../assets/destaque_3.jpg";
import Destaque4 from "../../assets/destaque_4.jpg";
import { NavMenu } from "../NavMenu/Index";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CardProduto } from "../CardProduto/Index";
import { getCookie, setCookie } from "react-use-cookie";
import { LoginContext } from "../../contexts/LoginContext";
import { SignOut, Gear } from "phosphor-react";
import { useNavigate } from "react-router-dom";


export function Header() {
  const { totalQuantityCart } = useContext(CartContext)
  const { getUserCookie, logout, isAdmin } = useContext(LoginContext)
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     const headerCarrossel = document.getElementById("containerheader");
  //     headerCarrossel.style.animation = "updown 5s";
  //   }, 10000);

  //   // Mudar a imagem do carrossel a cada 6 segundos
  //   let contador = 1;
  //   const backgroundImages = [Destaque1, Destaque2, Destaque3, Destaque4];
  //   setInterval(() => {
  //     const carrossel = document.getElementById("containerheader");
  //     //   carrossel.style.background = backgroundImages[contador];
  //     if(carrossel) {
  //       carrossel.style.backgroundPosition = "center";
  //       carrossel.style.backgroundRepeat = "no-repeat";
  //       carrossel.style.backgroundSize = "cover";
  //       carrossel.style.backgroundImage = `linear-gradient(#000000 , #ffffff00 50%), url(${backgroundImages[contador]})`;
  //     }
  //     if (contador == 3) {
  //       contador = 0;
  //     } else contador++;
  //   }, 6000);
  // }, []);

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <>
    <div className="bannerPromo">
      <p>APROVEITE DESCONTOS DE ATÉ 20%</p>
    </div>
    <div className="containerheader" id="containerheader">
      <div className="header">
        <div className="menu-busca">
          <NavMenu pageWrapId={'root'} />
          <div className="busca">
            <input type="text" name="busca" id="busca" onChange={handleSearch}/>
            <a href={"/busca/"+search} >
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
        {isAdmin ? <a onClick={()=>navigate("/admin/users")}><Gear size={32} weight="bold" cursor={"pointer"}/></a> : ""}
          <Link to={getUserCookie() ? "/usuario" : "/login"} style={{display: "flex", alignItems: "flex-end", gap: ".5rem"}}>
            <span style={{fontSize: '.85rem', whiteSpace: "nowrap"}}>{getUserCookie() ? "Olá, "+getUserCookie()+"!" : ""}</span>
            <img src={IconUser} alt="" className="icon-user" />
          </Link>
          <Link to="/produtos">
            <img src={IconXicara} alt="" className="icon" />
          </Link>
          <Link to="/carrinho" style={{position: "relative"}}>
            <img src={IconCarrinho} alt="" className="icon" />
            <div className="rounded-circle">{totalQuantityCart}</div>
          </Link>
          <a onClick={()=>{logout(); navigate("/")}}><SignOut size={32} weight="bold" cursor={"pointer"}/></a>
        </div>
      </div>
      
      <div className="banner">
        <h2>A MELHOR<br /> ASSINATURA DE <i>CAFÉ</i><br /> DO BRASIL</h2>
        <CardProduto
                  key={1}
                  titulo={"CAFÉ GOURMET ESPECIAL"}
                  qtdd={"250g"}
                  preco={29.9}
                  img={"../../src/assets/embalagem-cafe-1.png"}
                  id={10}
                />
      </div>
      <div className="busca-2">
        <input type="text" name="busca-2" id="busca-2" />
        <a href="#">
          <img src={Search} alt="" className="img-busca-2" />
        </a>
      </div>
    </div>
    </>
  );
}
