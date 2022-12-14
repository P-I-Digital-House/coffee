import "../Header/header.css";
import Icon from "../../assets/logo.svg";
import IconXicara from "../../assets/icon-xicara.svg";
import IconCarrinho from "../../assets/icon-carrinho.svg";
import IconUser from "../../assets/user-1.png";
import Search from "../../assets/search.png";
import { useEffect } from "react";
import Destaque1 from "../../assets/destaque_1.jpg";
import Destaque2 from "../../assets/destaque_2.jpg";
import Destaque3 from "../../assets/destaque_3.jpg";
import Destaque4 from "../../assets/destaque_4.jpg";
import { NavMenu } from "../NavMenu/Index";
import { Link } from "react-router-dom";

export function Header() {
  useEffect(() => {
    setTimeout(() => {
      const headerCarrossel = document.getElementById("containerheader");
      headerCarrossel.style.animation = "updown 5s";
    }, 10000);

    // Mudar a imagem do carrossel a cada 6 segundos
    let contador = 1;
    const backgroundImages = [Destaque1, Destaque2, Destaque3, Destaque4];
    setInterval(() => {
      console.log(backgroundImages[contador]);
      const carrossel = document.getElementById("containerheader");
      //   carrossel.style.background = backgroundImages[contador];
      if(carrossel) {
        carrossel.style.backgroundPosition = "center";
        carrossel.style.backgroundRepeat = "no-repeat";
        carrossel.style.backgroundSize = "cover";
        carrossel.style.backgroundImage = `linear-gradient(#000000 , #ffffff00 50%), url(${backgroundImages[contador]})`;
      }
      if (contador == 3) {
        contador = 0;
      } else contador++;
    }, 6000);
  }, []);
  return (
    <div className="containerheader" id="containerheader">
      <div className="header">
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
          <a href="#">
            <img src={IconCarrinho} alt="" className="icon" />
          </a>
          <Link to="/login">
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
