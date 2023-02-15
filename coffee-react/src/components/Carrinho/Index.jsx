import "./carrinho.css";
import Coffee from "../../assets/embalagem-cafe-1.png";
import { XCircle } from "phosphor-react";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Carrinho() {
  const [isOpenFrete, setIsOpenFrete ] = useState(false);
  const [listFrete, setListFrete ] = useState([]);
  const [desconto, setDesconto ] = useState(0);
  const [cupom, setCupom ] = useState("");
  const [ radioFrete, setRadioFrete ] = useState(0);
  const [errorCupom, setErrorCupom] = useState("")
  const [disabledBtnCupom, setDisabledBtnCupom] = useState(false)

  const {cart,  handleRemoveItemFromCart, subtotalCart} = useContext(CartContext)

  function handleFrete() {
    setListFrete([{nome: 'Frete 1', valor: 19}, {nome: 'Frete 2', valor: 25},{nome: 'Frete 3', valor: 32}])
    if(listFrete != null){
      setIsOpenFrete(true)
    }
  }

  function handleCupom() {
    if(cupom != "" && cupom == "TESTE" && subtotalCart>=20){
      setDesconto(20)
      setErrorCupom("")
      setDisabledBtnCupom(true)
    } else setErrorCupom("Cupom inválido")
  }

  function handleChangeFrete(e) {
    const { nodeName, value } = e.target;
    if (nodeName === 'INPUT') {
      setRadioFrete(parseFloat(value));
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
        {cart.map((cartItem, index) => {
          return (
            <tr key={index}>
              <th><img className="imgProduct" src={cartItem.picture} /></th>
              <th><strong>{cartItem.pname}</strong></th>
              <th>
                <p>{cartItem.quantity}</p>
              </th>
              <th><p>R$ {(cartItem.price*cartItem.quantity).toFixed(2)}</p></th>
              <th><p>
                <button className="btnRemove" onClick={()=>handleRemoveItemFromCart(index, cartItem.price, cartItem.quantity)}><XCircle size={40} color="#f20707" /></button>
              </p></th>
          </tr>  
        )
        })}
              
        <tr>
          <th></th>
          <th></th>
          <th>Subtotal</th>
          <th>R$ {subtotalCart.toFixed(2)}</th>
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
            <input className="inputInfo" onChange={handleChangeCupom} disabled={disabledBtnCupom} />
            <button className="btnShipping" onClick={()=>handleCupom()} disabled={disabledBtnCupom}>OK</button>
          </div>
          <p className="errorCupom">{errorCupom}</p>
        </div>
      </div>

      <div className="shippingTotal">
        <table>
          <tr>
            <th className="headerTotal">Subtotal</th>
            <th>R$ {subtotalCart.toFixed(2)}</th>
          </tr>
          <tr>
            <th className="headerTotal">Frete</th>
            <th>R$ {radioFrete.toFixed(2)}</th>
          </tr>
          <tr>
            <th className="headerTotal">Desconto</th>
            <th style={{color: '#c14d13'}}>- R$ {desconto.toFixed(2)}</th>
          </tr>
          <tr className="tableTotal">
            <th className="headerTotal">TOTAL</th>
            <th>R$ {(parseFloat(subtotalCart)+parseFloat(radioFrete)-parseFloat(desconto)).toFixed(2)}</th>
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
