import "../Main/main.css";
import { CardProduto } from "../CardProduto/Index";
import { useState } from "react";
import { useEffect } from "react";

export function Main() {
  const [products, setProducts] = useState([]);
  const [xicaras, setXicaras] = useState([]);
  const [acessorios, setAcessorios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products/cafes')
    .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [products])

  useEffect(() => {
    fetch('http://localhost:5000/products/xicaras')
    .then((response) => response.json())
      .then((json) => setXicaras(json));
  }, [xicaras])

  useEffect(() => {
    fetch('http://localhost:5000/products/acessorios')
    .then((response) => response.json())
      .then((json) => setAcessorios(json));
  }, [acessorios])

  return (
    <div className="container">
      <h2>
        ["<span className="detalhe-produtos">produtos</span>"];
      </h2>
      <div className="txt-center section-cafe">
        <h3 className="subtitulo">cafés;</h3>
        <div className="box-produtos">
        {products.map((item) => (
                <CardProduto
                  key={item.id}
                  titulo={item.productName}
                  qtdd={item.quantity}
                  preco={item.price}
                  img={item.img}
                />
              ))}
          
        </div>
        <a href="#">
          <button className="btn-mais">"ver_mais"</button>
        </a>
      </div>
      <div className="txt-center section-cafe">
        <h3 className="subtitulo">xícaras;</h3>
        <div className="box-produtos">
        {xicaras.map((item) => (
                <CardProduto
                  key={item.id}
                  titulo={item.productName}
                  qtdd={item.quantity}
                  preco={item.price}
                  img={item.img}
                />
              ))}
        </div>
        <a href="#">
          <button className="btn-mais">"ver_mais"</button>
        </a>
      </div>
      <div className="txt-center section-cafe">
        <h3 className="subtitulo">acessórios;</h3>
        <div className="box-produtos">
        {acessorios.map((item) => (
                <CardProduto
                  key={item.id}
                  titulo={item.productName}
                  qtdd={item.quantity}
                  preco={item.price}
                  img={item.img}
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
