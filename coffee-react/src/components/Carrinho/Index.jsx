import "./carrinho.css";
import Coffee from "../../assets/embalagem-cafe-1.png";
import { XCircle } from "phosphor-react";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CarrinhoOne } from "../CarrinhoOne/Index";
import { CarrinhoTwo } from "../CarrinhoTwo/Index";

export function Carrinho() {
  const {page, setPage} = useContext(CartContext)
  return (
    <>
     {(() => {
                switch(page) {
                  case 0: return (<CarrinhoOne></CarrinhoOne>)
                break;
                case 1:
                  return (<CarrinhoTwo></CarrinhoTwo>)
                  break;
                }
            })()}
    </>
  );
}
