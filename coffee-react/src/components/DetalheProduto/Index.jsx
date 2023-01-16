import "./detalheProduto.css";
import Coffee from "../../assets/embalagem-cafe-1.png";
import { Star, Truck } from "phosphor-react";


// { img, title, price, installment }
export function DetalheProduto() {
  return (
      <div className="main">
          <div>
            <img className="imgProduct" src={Coffee} alt="" />
          </div>
          <div className="info">
            <div>
              <h2 className="title">TITULO DO PRODUTO</h2>
            </div>
            <span className="stars">
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
              <Star size={15} color="#dda520" />
            </span>
            <p className="txt">DESCRIÇÃO DO PRODUTO</p>
            <p className="txt">6 UNIDADES</p>
            <p className="txt">R$89,90</p>
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
              <Truck size={30} color="#f5a472" />{" "}
              <input
                className="inputInfo"
                type="number"
                placeholder="CEP de Entrega"
              />
            </div>
          </div>
      </div>
  );
}
