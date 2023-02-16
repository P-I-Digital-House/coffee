import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { XCircle } from "phosphor-react";

export function CarrinhoTwo() {
    const {cart, handleAddItemToCart, handleRemoveItemFromCart, subtotalCart, totalQuantityCart,  handleFrete, handleChangeFrete, handleCupom, handleChangeCupom, isOpenFrete, listFrete, cupom, desconto,radioFrete, errorCupom, disabledBtnCupom, page, setPage} = useContext(CartContext)
    return (
    <div className="shoppingCart">
        <div className="title"></div>
        <h1>CARRINHO</h1>
        <h2>Entrega</h2>

        <div className="shipping">
            <div>
                <p>Logradouro</p>
                <div className="shippingDetails">
                    <input className="inputInfo" />
                </div>
                <p>Numero</p>
                <div className="shippingDetails">
                    <input className="inputInfo" />
                </div>
                <p>Complemento</p>
                <div className="shippingDetails">
                    <input className="inputInfo" />
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
                    <button className="btnShipping" onClick={() => handleCupom()} disabled={disabledBtnCupom}>OK</button>
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
                    <th style={{ color: '#c14d13' }}>- R$ {desconto.toFixed(2)}</th>
                </tr>
                <tr className="tableTotal">
                    <th className="headerTotal">TOTAL</th>
                    <th>R$ {(parseFloat(subtotalCart) + parseFloat(radioFrete) - parseFloat(desconto)).toFixed(2)}</th>
                </tr>
            </table>

            <a>
                <button className="btnPayments" onClick={() => {
                    setPage(page + 1);
                    document.getElementById("shoppingCart").focus();
                }}>
                    FINALIZAR COMPRA
                </button>
            </a>
        </div>

    </div>)
}