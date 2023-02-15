
import { Star, Truck } from "phosphor-react";
import api from '../../../api';
import { useState, useEffect } from 'react';
import { CardProduto } from "../CardProduto/Index";

export const BuscaProduto = ({search}) => {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {
    try {
      const buildPage = await api.get("products/search/"+search);
      console.log(buildPage.data)
      setDados(buildPage.data);

    } catch (e) {
      console.error(e);
    }
    
  }
  return (
    <div className="container-produtos" style={{paddingBottom: "150px"}}>
      <h2>
        <p>Resultados para: "{search}"</p>
      </h2>
      <div className="txt-center">
        <div className="box-produtos">
          {dados.length != 0 ?
          dados.map((item) => (
            <CardProduto
              key={item.id}
              img={item.picture}
              titulo={item.pname}
              qtdd={item.pquantity}
              preco={item.price}
            />
          )) : "Nenhum resultado"
          }
        </div>
      </div>
    </div>
  );
}
