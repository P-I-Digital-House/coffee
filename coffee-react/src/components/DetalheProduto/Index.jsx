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
            <p className="txt">{dados.pdescription}</p>
            <p className="txt">6 UNIDADES</p>
            <p className="txt"><b>R$89,90</b></p>
            <a href="#">
              <button className="btnPortal" type="submit">
                ADICIONAR
              </button>
            </a>
            <a href="/carrinho">
              <button className="btnPortal" type="submit">
                IR PARA CARRINHO
              </button>
            </a>
            <hr className="line" />
            <div className="zipCode">
              <label className="details">CALCULE O VALOR DE FRETE</label>
              <div className="input-frete">
                <Truck size={30} color="#f5a472" />{" "}
                <input
                  className="inputInfo"
                  type="number"
                  placeholder="CEP de Entrega"
                />
              </div>
            </div>
          </div>
      </div>
  );
}
