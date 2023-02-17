import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { XCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCookie } from "react-use-cookie";
import "../Pedidos/pedidos.css"
import api from "../../../api";

export function Pedidos() {
    const navigate = useNavigate();
  const [dados, setDados] = useState([]);
  const [produtos, setProdutos] = useState([{}])

  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {
    const user = getCookie("user");
    const token = getCookie("token");
    if(user != "" && user != null){
      const { id } = JSON.parse(user);
      const response = await api.get(`/order/userId/${id}`, {
        headers: { Authorization: `${token}` },
      });
      response.data.map((item) =>{
        getProductOrder(item.id)
      })
    try {
      setDados(response.data);
    } catch (error) {
      alert("Ocorreu um erro, verifique os dados!");
    }
    }else{
      alert('Você nao está logado')
      navigate("/login")
    }    
  }

  async function getProductOrder(orderId){
    const user = getCookie("user");
    const token = getCookie("token");
    if(user != "" && user != null){
        const response2 = await api.get(`/productOrder/orderId/${orderId}`, {
            headers: { Authorization: `${token}` },
        }).then((response2) =>{
            response2.data.map((item) => {
                let ok = {'totalPrice': item.totalPrice,
                'unitPrice': item.unitPrice,
                'quantity': item.quantity,
                'product_id': item.product_id,
                }
            })
        })
            
    }
  }

  useEffect(()=>{
  },[dados])

  async function deleteOrder(orderId){
    const user = getCookie("user");
    const token = getCookie("token");
    if(user != "" && user != null){
      const response = await api.delete(`/order/${orderId}`, {
        headers: { Authorization: `${token}` },
      });
    try {
      alert("Compra cancelada!")
    } catch (error) {
      alert("Ocorreu um erro, verifique os dados!");
    }
    }else{
      alert('Você nao está logado')
      navigate("/login")
    }    
  }

    return (
        <div className="wrapperPedidos">
        <div className="title"></div>
        <h1>Meus Pedidos</h1>
    <div className="meusPedidos">
        
        {dados.map((item) => {
           return (<div className="cardPedido">
            <p>Pedido nº {item.id}</p>
            <p>Feito em: {item.dt_create}</p>
            <table>
                               
                <tr className="tableTotal">
                    <th className="headerTotal">TOTAL</th>
                    <th>R$ {item.totalPrice.toFixed(2)}</th>
                </tr>
            </table>

            <a>
                <button className="btnPayments" onClick={()=>{
                    deleteOrder(item.id)
                }}>
                    CANCELAR COMPRA
                </button>
            </a>
        </div>)
        })}
        
    </div>
    </div>
    )
}