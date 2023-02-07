import "../Main/main.css";
import { CardProduto } from "../CardProduto/Index";
import { useState } from "react";
import { useEffect } from "react";
import api from '../../../api';

export function Main() {
  const [cafes, setCafes] = useState([]);
  const [xicaras, setXicaras] = useState([]);
  const [acessorios, setAcessorios] = useState([]);


  useEffect(() => {
    buildPage();
  }, []);


  async function buildPage(){
    try {
      const buildCafe = await api.get("products/category/cafe");
      setCafes(buildCafe.data);

      const buildXicara = await api.get("products/category/xicara");
      setXicaras(buildXicara.data);

      const buildAcessorios = await api.get("products/category/acessorio");
      setAcessorios(buildAcessorios.data);

    } catch (e) {
      console.error(e);
    }
  }

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
                  titulo={item.pname}
                  qtdd={item.quantity}
                  preco={item.price}
                  img={item.picture}
                  id={item.id}
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
                  titulo={item.pname}
                  qtdd={item.quantity}
                  preco={item.price}
                  img={item.picture}
                  id={item.id}
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
                  titulo={item.pname}
                  qtdd={item.quantity}
                  preco={item.price}
                  img={item.picture}
                  id={item.id}
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
