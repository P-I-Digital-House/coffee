import "../Main/main.css";
import { CardProduto } from "../CardProduto/Index";
import p1 from "../../assets/embalagem-cafe-1.png";
import p2 from "../../assets/embalagem-cafe-2.png";
import p3 from "../../assets/embalagem-cafe-3.png";
import x1 from "../../assets/embalagem-cafe-1.png";
import x2 from "../../assets/xicara_2.png";
import x3 from "../../assets/xicara_3.png";
import a1 from "../../assets/acessorio-1.png";
import a2 from "../../assets/acessorio-2.png";
import a3 from "../../assets/acessorio-3.png";

export function Main() {
  return (
    <div className="container">
      <h2>
        ["<span className="detalhe-produtos">produtos</span>"];
      </h2>
      <div className="txt-center section-cafe">
        <h3 className="subtitulo">cafés;</h3>
        <div className="box-produtos">
          <CardProduto
            img={p1}
            titulo="CAFÉ GOURMET ESPECIAL"
            qtdd="340g"
            preco="R$ 100,00"
          />
          <CardProduto
            img={p2}
            titulo="CAFÉ GOURMET ESPECIAL"
            qtdd="340g"
            preco="R$ 100,00"
          />
          <CardProduto
            img={p3}
            titulo="CAFÉ GOURMET ESPECIAL"
            qtdd="340g"
            preco="R$ 100,00"
          />
        </div>
        <a href="#">
          <button className="btn-mais">"ver_mais"</button>
        </a>
      </div>
      <div className="txt-center section-cafe">
        <h3 className="subtitulo">xícaras;</h3>
        <div className="box-produtos">
          <CardProduto
            img={x1}
            titulo="XÍCARA E PIRES MANDALA"
            qtdd="P, M E G"
            preco="R$ 100,00"
          />
          <CardProduto
            img={x2}
            titulo="XÍCARA E PIRES VERMELHO"
            qtdd="P, M E G"
            preco="R$ 100,00"
          />
          <CardProduto
            img={x3}
            titulo="XÍCARA E PIRES BRANCO CLÁSSICO"
            qtdd="P, M E G"
            preco="R$ 100,00"
          />
        </div>
        <a href="#">
          <button className="btn-mais">"ver_mais"</button>
        </a>
      </div>
      <div className="txt-center section-cafe">
        <h3 className="subtitulo">acessórios;</h3>
        <div className="box-produtos">
          <CardProduto
            img={a1}
            titulo="PRENSA FRANCESA"
            qtdd="350ml"
            preco="R$ 50,00"
          />
          <CardProduto
            img={a2}
            titulo="CAFETERIA ITALIANA"
            qtdd="500ml"
            preco="R$ 50,00"
          />
          <CardProduto
            img={a3}
            titulo="KIT COADOR"
            qtdd="1 und"
            preco="R$ 80,00"
          />
        </div>
        <a href="#">
          <button className="btn-mais">"ver_mais"</button>
        </a>
      </div>
    </div>
  );
}
