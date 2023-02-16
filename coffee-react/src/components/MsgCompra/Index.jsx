import { useEffect, useState } from "react";
import "../MsgCompra/msg.css";

export function Random() {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(()=>{
    function generateRandomNumber() {
      const number = Math.floor(Math.random() * 9999999999999) + 1;
      setRandomNumber(number);
    }

    generateRandomNumber();
  },[]);

  return (
    <div className="form-register">
     <h2>
      {randomNumber && <p>O número aleatório gerado é: {"COFFEE"+randomNumber}</p>}
     </h2>
    </div>
  );
}
