import { useState, useEffect } from "react";
import { CardProduto } from "../CardProduto/Index";
import api from "../../../api";
import "../Produtos/produtos.css";
import { useNavigate } from "react-router-dom";
import { getCookie } from "react-use-cookie";

export function Produtos() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {

    const token = getCookie("token");

    if(token != ""){
      setProdutos(JSON.parse(localStorage.getItem("favs")));
      
    }else{
      alert("Você Precisa estar logado para acessar essa página.");
      navigate("/login");
    }
    
  }

  return (
    <div className="container-produtos">
      <h2>
        ["<span className="detalhe-produtos">Seus favoritos</span>"];
      </h2>
      <div className="txt-center">
        <div className="box-produtos">
          { produtos ? produtos.map((item) => (
            <CardProduto
              key={item.id}
              img={item.img}
              titulo={item.titulo}
              qtdd={item.qtdd}
              preco={item.preco}
              id={item.id}
            />
          ))
        :
        "Nenhum produto nos seus favoritos"}
        </div>
        <a href="#">
          <button className="btn-mais">"ver_mais"</button>
        </a>
      </div>
    </div>
  );
}
