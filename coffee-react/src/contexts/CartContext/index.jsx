import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [subtotalCart, setSubtotalCart] = useState(0)
    const [totalQuantityCart, setTotalQuantityCart] = useState(0)
    const [favs, setFavs] = useState([]);

    function favProduct (img, titulo, qtdd, preco, id) {
      setFavs([...favs, {"id": id, "titulo": titulo, "qtdd": qtdd, "preco": preco, "img": img}])
      localStorage.setItem("favs", JSON.stringify([...favs, {"id": id, "titulo": titulo, "qtdd": qtdd, "preco": preco, "img": img}]));
    }

  function handleAddItemToCart(pname, picture, price, quantity){
    const itemObject = {pname, picture, price, quantity}    
    setCart([...cart, itemObject])
    setSubtotalCart(subtotalCart+(price*quantity))
    setTotalQuantityCart(totalQuantityCart+quantity)
  }

  function handleRemoveItemFromCart (clickedItemIndex, price, quantity) {
    const filterCart = cart.filter((cartItem) => cart.indexOf(cartItem) !== clickedItemIndex)
    setCart(filterCart)
    setSubtotalCart(subtotalCart - (price*quantity))
    setTotalQuantityCart(totalQuantityCart-quantity)
  }

    return (
        <CartContext.Provider value={{cart, handleAddItemToCart, handleRemoveItemFromCart, subtotalCart, totalQuantityCart, favProduct, favs}}>{children}</CartContext.Provider>
    )
}