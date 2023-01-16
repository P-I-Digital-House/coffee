import "./carrinho.css";
import Coffee from "../../assets/embalagem-cafe-1.png";
import { XCircle } from "phosphor-react";

export function Carrinho() {
  return (
    <div className="shoppingCart">
      <div className="title"></div>
      <h1>Detalhes do Produto</h1>
      <hr />
      <div className="infoProduct">
        <div className="product">
          <img className="imgProduct" src={Coffee} />
        </div>
        <div className="product">
          <strong>Cerveja Aegis Beer</strong>
        </div>
        <div className="product">
          <p>2</p>
        </div>
        <div className="product">
          <p>R$ 9,90</p>
        </div>
        <div className="product">
          <p>
            <XCircle size={40} color="#f20707" />
          </p>
        </div>
      </div>
      <h2>Entrega</h2>
      <div className="shipping">
        <div className="shippingDetails">
          <p>CALCULAR FRETE</p>
          <div className="infoProduct">
            <div className="product">
              <input className="inputInfo" type="number" />
            </div>
            <div className="product">
              <button className="btnPortal" type="submit">
                CALCULAR
              </button>
            </div>
          </div>
          <p>CUPOM DE DESCONTO</p>
          <div className="infoProduct">
            <div className="product">
              <input className="inputInfo" type="number" />
            </div>
            <div className="product">
              <button className="btnPortal" type="submit">
                VERIFICAR
              </button>
            </div>
          </div>
        </div>
        <div className="shippingDetails">
          <p>SUBTOTAL</p>
          <div className="infoProduct">
            <div className="product">
              <p>R$21,80</p>
            </div>
          </div>
        </div>
      </div>

      <a href="/finished" className="btnPayments">
        <button className="btnPortal" type="submit">
          FINALIZAR COMPRA
        </button>
      </a>
    </div>
  );
}
