import "./carrinho.css";
import Coffee from "../../assets/embalagem-cafe-1.png";
import { XCircle } from "phosphor-react";
import { useEffect, useState } from "react";

export function Carrinho() {
  const [isOpenFrete, setIsOpenFrete ] = useState(false);
  const [listFrete, setListFrete ] = useState([]);
  const [desconto, setDesconto ] = useState(0);
  const [cupom, setCupom ] = useState("");
  const [ radio, setRadio ] = useState(0);


  function handleFrete() {
    setListFrete([{nome: 'Frete 1', valor: 19}, {nome: 'Frete 2', valor: 25},{nome: 'Frete 3', valor: 32}])
    if(listFrete != null){
      setIsOpenFrete(true)
    }
  }

  function handleCupom() {
    if(cupom != "" && cupom == "TESTE"){
      setDesconto(20)
    }
  }

  function handleChangeFrete(e) {
    const { nodeName, value } = e.target;
    if (nodeName === 'INPUT') {
      setRadio(value);
    }
  }

  function handleChangeCupom(e) {
    setCupom(e.target.value)
  }

  return (
    <div className="shoppingCart">
      <div className="title"></div>
      <h1>CARRINHO</h1>
      <table className="tableCart">
        <tr>
          <th>Produto</th>
          <th></th>
          <th>Quantidade</th>
          <th>Total</th>
          <th></th>
        </tr>
        <tr>
          <th><img className="imgProduct" src={Coffee} /></th>
          <th><strong>Cerveja Aegis Beer</strong></th>
          <th>
            <p>2</p>
          </th>
          <th><p>R$ 9,90</p></th>
          <th><p>
            <XCircle size={40} color="#f20707" />
          </p></th>
        </tr>        
        <tr>
          <th><img className="imgProduct" src={Coffee} /></th>
          <th><strong>Cerveja Aegis Beer</strong></th>
          <th><p>2</p></th>
          <th><p>R$ 9,90</p></th>
          <th><p>
            <XCircle size={40} color="#f20707" />
          </p></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>Subtotal</th>
          <th>R$ 28,21</th>
          <th></th>
        </tr>
      </table>

      <h2>Entrega</h2>

      <div className="shipping">
        <div>
          <p>CALCULAR FRETE</p>
          <div className="shippingDetails">
            <input className="inputInfo" />
            <button className="btnShipping" onClick={()=>handleFrete()}>CALCULAR</button>
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
        
        <div>
          <p>CUPOM DE DESCONTO</p>
          <div className="shippingDetails">
            <input className="inputInfo" onChange={handleChangeCupom}/>
            <button className="btnShipping" onClick={()=>handleCupom()}>OK</button>
          </div>
        </div>
      </div>

      <div className="shippingTotal">
        <table>
          <tr>
            <th className="headerTotal">Subtotal</th>
            <th>R$ 200,00</th>
          </tr>
          <tr>
            <th className="headerTotal">Frete</th>
            <th>R$ {radio}</th>
          </tr>
          <tr>
            <th className="headerTotal">Desconto</th>
            <th>- R$ {desconto}</th>
          </tr>
          <tr className="tableTotal">
            <th className="headerTotal">TOTAL</th>
            <th>R$ 210,00</th>
          </tr>
        </table>
        
        <a href="/finished" >
        <button className="btnPayments" type="submit">
          FINALIZAR COMPRA
        </button>
      </a>
      </div>
{/* 
      <a href="/finished" className="btnPayments">
        <button className="btnPortal" type="submit">
          FINALIZAR COMPRA
        </button>
      </a> */}
    
    </div>
  );
}
