import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import "../CardProduto/cardProduto.css";
import { ShoppingCart, Heart } from "phosphor-react";
import { QuantityButton } from "../QuantityButton/Index";
import { useNavigate } from "react-router-dom";

export function CardProduto({ img, titulo, qtdd, preco, id }) {
  const navigate = useNavigate();
  const { handleAddItemToCart, favProduct } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0);
  const [heartWeight, setHeartWeight] = useState("regular");

  useEffect(()=>{
    // const teste = favs.map((item) =>{
    //   if(item.id == id){
    //     return true
    //   }
    // })
    const favoritos = JSON.parse(localStorage.getItem("favs"));
    const isFav = favoritos? favoritos.find(item => item.id == id) : false
    isFav ? setHeartWeight("fill") : ""
    console.log('aqui')
  })

  return (
    <div className="card-produtos">
      <button className="btn-fav" onClick={()=>{favProduct(img, titulo, qtdd, preco, id)}}><Heart size={30} weight={heartWeight}></Heart></button>
      <a onClick={()=>{navigate("/detalhe-produto/" + id)}} style={{textDecoration: "none", cursor: "pointer"}}>
        <img className="img-card-produtos" src={img} alt="" />
        <p className="titulo-card-produtos">{titulo}</p>
      </a>
      <p className="qtdd-card-produtos">{qtdd}</p>
      <p className="preco-card-produtos">R$ {preco.toFixed(2)}</p>
      <div className="buttons">
        <QuantityButton setQuantity={setQuantity} />
        <button className="btn-card-produtos" onClick={() => handleAddItemToCart(titulo, img, preco, quantity)}>
          <ShoppingCart size={20} weight={"bold"} /> Adicionar
        </button>
      </div>
      
      
    </div>
  );
}
