import { useState, useEffect } from "react";
import { CardProduto } from "../CardProduto/Index";
import api from "../../../api";
import "../Produtos/produtos.css";

export function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {
    console.log(localStorage.getItem("token"));
    const response = await api.get("/produtos", {
      headers: { Authorization: `${localStorage.getItem("token")}` },
    });
    setProdutos(response.data);
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
