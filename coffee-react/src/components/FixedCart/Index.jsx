import { useContext, useEffect, useRef, useState } from "react";
import { ShoppingCart } from "phosphor-react";
import "../FixedCart/fixedCart.css"
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function FixedCart() {
    const { totalQuantityCart } = useContext(CartContext)
  
  return (
    <Link to="/carrinho" style={{position: "relative"}}>
        <button className="fixed-button wobble">
            <ShoppingCart size={30} ></ShoppingCart>
            <div className="rounded-circle">{totalQuantityCart}</div>
        </button>
    </Link>
  );
}