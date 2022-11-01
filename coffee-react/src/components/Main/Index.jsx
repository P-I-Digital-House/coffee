import "../Main/main.css";
import { CardProduto } from "../CardProduto/Index";
import { useState } from "react";
import { useEffect } from "react";
import { api_url } from '../../../../coffee-api/api';

export function Main() {
  const [cafes, setCafes] = useState([]);
  const [xicaras, setXicaras] = useState([]);
  const [acessorios, setAcessorios] = useState([]);

  useEffect(() => {
    fetch(api_url+'produtos/categoria/cafe')
    .then((response) => response.json())
      .then((json) => setCafes(json));
  }, [])

  useEffect(() => {
    fetch(api_url+'produtos/categoria/xicara')
    .then((response) => response.json())
      .then((json) => setXicaras(json));
  }, [])

  useEffect(() => {
    fetch(api_url+'produtos/categoria/acessorio')
    .then((response) => response.json())
      .then((json) => setAcessorios(json));
  }, [])

  return (
    <div className="container">
      <h2>
        ["<span className="detalhe-produtos">produtos</span>"];
      </h2>
      <div className="txt-center section-cafe">
        <h3 className="subtitulo">cafés;</h3>
        <div className="box-produtos">
        {cafes.map((item) => (
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
