import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { XCircle } from "phosphor-react";

export function CarrinhoOne() {
    const {cart, handleAddItemToCart, handleRemoveItemFromCart, subtotalCart, totalQuantityCart,  handleFrete, handleChangeFrete, handleCupom, handleChangeCupom, isOpenFrete, listFrete, cupom, desconto,radioFrete, errorCupom, disabledBtnCupom, page, setPage, setIsOpenFrete} = useContext(CartContext)


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
                        <th><p>R$ {(cartItem.price * cartItem.quantity).toFixed(2)}</p></th>
                        <th><p>
                            <button className="btnRemove" onClick={() => handleRemoveItemFromCart(index, cartItem.price, cartItem.quantity)}><XCircle size={40} color="#f20707" /></button>
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
                    <button className="btnShipping" onClick={() => handleFrete()}>CALCULAR</button>
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
                <button className="btnPayments" onClick={()=>{setIsOpenFrete(false);
            setPage(page + 1);
            document.getElementById("shoppingCart").focus();}}>
                    FINALIZAR COMPRA
                </button>
            </a>
        </div>

    </div>)
}