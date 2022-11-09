import { useState, useEffect } from "react";
import { CardProduto } from "../CardProduto/Index";
import api from "../../../api";
import "../Produtos/produtos.css";
import { useNavigate } from "react-router-dom";

export function Produtos() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {

    console.log(localStorage.getItem("token"));

    if(localStorage.getItem("token") != ""){
      const response = await api.get("/produtos", {

      headers: { Authorization: `${localStorage.getItem("token")}` },
    });

    setProdutos(response.data);
    }else{
      navigate("/login/cadastro");
    }
    
  }

  return (
    <div className="container-produtos">
      <h2>
        ["<span className="detalhe-produtos">produtos</span>"];
      </h2>
      <div className="txt-center">
        <div className="box-produtos">
          {produtos.map((item) => (
            <CardProduto
              key={item.id}
              img={item.img}
              titulo={item.nameProduct}
              qtdd={item.quantity}
              preco={item.price}
            />
          ))}
        </div>
        <a href="#">
          <button className="btn-mais">"ver_mais"</button>
        </a>
      </div>
    </div>
  );
}
