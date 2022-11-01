import { useState, useEffect } from 'react'
import { CardProduto } from "../CardProduto/Index";
import { api_url } from '../../../../coffee-api/api';
import '../Produtos/produtos.css'


export function Produtos() {
    const [produtos, setProdutos] = useState([]);
    
      useEffect(() => {
        fetch(api_url+'produtos/')
        .then((response) => response.json())
          .then((json) => setProdutos(json));
      }, [])
    

    return (
        <div className="container-produtos">
      <h2>
        ["<span className="detalhe-produtos">produtos</span>"];
      </h2>
      <div className="txt-center section-cafe">
        <div className="box-produtos">
        {produtos.map((item) => (
                <CardProduto
                  key={item.id}
                  img={item.img}
                  titulo={item.nameProduct}
                  qtdd={item.quantity}
                  preco={item.price}
                />
              ))}
        </div>
        <a href="#">
          <button className="btn-mais">"ver_mais"</button>
        </a>
      </div>
    </div>
    );
}