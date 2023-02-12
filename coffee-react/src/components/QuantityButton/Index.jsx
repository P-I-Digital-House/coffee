import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import "../QuantityButton/quantitybutton.css";

export function QuantityButton(props) {
    const [value, setValue] = useState(1);

    const handlePlus = () => setValue(value + 1);

    const handleMinus = () => setValue(value - 1);

    useEffect(()=>{
      props.setQuantity(value)
    }, [value])
  
  return (
    <div className="quantity-button">
      <button onClick={handleMinus} disabled={value === 1}> - </button>
      <button disabled>{value}</button>
      <button onClick={handlePlus}> + </button>
    </div>
  );
}
