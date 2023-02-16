import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [subtotalCart, setSubtotalCart] = useState(0)
    const [totalQuantityCart, setTotalQuantityCart] = useState(0)
    const [favs, setFavs] = useState([]);
    const [isOpenFrete, setIsOpenFrete ] = useState(false);
    const [listFrete, setListFrete ] = useState([]);
    const [desconto, setDesconto ] = useState(0);
    const [cupom, setCupom ] = useState("");
    const [ radioFrete, setRadioFrete ] = useState(0);
    const [errorCupom, setErrorCupom] = useState("")
    const [disabledBtnCupom, setDisabledBtnCupom] = useState(false)
    const [page, setPage] = useState(0)  

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
        <CartContext.Provider value={{cart, handleAddItemToCart, handleRemoveItemFromCart, subtotalCart, totalQuantityCart, favProduct, favs, handleFrete, handleChangeFrete, handleCupom, handleChangeCupom, isOpenFrete, listFrete, cupom, desconto,radioFrete, errorCupom, disabledBtnCupom, page, setPage}}>{children}</CartContext.Provider>
    )
}