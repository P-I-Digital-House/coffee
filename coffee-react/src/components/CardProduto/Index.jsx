import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import "../CardProduto/cardProduto.css";
import { ShoppingCart } from "phosphor-react";
import { QuantityButton } from "../QuantityButton/Index";

export function CardProduto({ img, titulo, qtdd, preco, id }) {
  const { handleAddItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="card-produtos">
      <a href={"/detalhe-produto/" + id} style={{textDecoration: "none"}}>
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
