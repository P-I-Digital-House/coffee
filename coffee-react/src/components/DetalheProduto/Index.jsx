import "./detalheProduto.css";
import Coffee from "../../assets/embalagem-cafe-1.png";
import { Star, Truck } from "phosphor-react";
import api from '../../../api';
import { useState, useEffect } from 'react';


// { img, title, price, installment }
export const DetalheProduto = ({id}) => {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {
    try {
      const buildPage = await api.get("products/"+id);
      setDados(buildPage.data);

    } catch (e) {
      console.error(e);
    }
    
  }
  const [isOpenFrete, setIsOpenFrete ] = useState(false);
  const [listFrete, setListFrete ] = useState([]);
  const [ radio, setRadio ] = useState(0);


  function handleFrete() {
    setListFrete([{nome: 'Frete 1', valor: 19}, {nome: 'Frete 2', valor: 25},{nome: 'Frete 3', valor: 32}])
    if(listFrete != null){
      setIsOpenFrete(true)
    }
  }

  function handleChangeFrete(e) {
    const { nodeName, value } = e.target;
    if (nodeName === 'INPUT') {
      setRadio(value);
    }
  }
  return (
      <div className="main">
          <div>
            <img className="imgProduct" src={dados.picture} alt="" />
          </div>
          <div className="info">
            <div>
              <h2 className="title">{dados.pname}</h2>
            </div>
            <span className="stars">
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
            </span>
            <p>{dados.pdescription}</p>
            <p>{dados.pquantity}</p>
            <p className="detalheValor"><b>R$ {dados.price!=null ? dados.price.toFixed(2) : ""}</b></p>
            <a href="#">
              <button className="btnPortal" type="submit">
                COMPRAR
              </button>
            </a>
            <a href="/carrinho">
              <button className="btnPortal" type="submit">
                IR PARA CARRINHO
              </button>
            </a>
            <hr className="line" />
            <div className="zipCode">
              <label className="details">CALCULAR FRETE</label>
              <div className="input-frete">
                <Truck size={30} color="#f5a472" />{" "}
                <input
                  className="inputInfo"
                  type="number"
                  placeholder="CEP de Entrega"
                />
                <button className="btnShipping" onClick={()=>handleFrete()}>OK</button>
              </div>
            </div>
            <details open={isOpenFrete}>
          <summary>
          </summary>
          <li onChange={handleChangeFrete}>
            {listFrete.map((item, index) => {
              return (
                <ul>
                  <input type="radio" value={item.valor} name="frete" id={"f" + index} /><label for={"f" + index}>{item.nome} - R$ {item.valor}</label>
                </ul>
                );
            })}
          </li>
        </details>
          </div>
      </div>
  );
}
