import "../Assinaturas/assinaturas.css";
import Img1 from "../../assets/bola-xicara-cinza.svg";
import Img2 from "../../assets/bola-xicara-vinho.svg";
import Img3 from "../../assets/bola-xicara-marrom.svg";

export function Assinatura() {
  return (
    <div className="container assinaturas">
      <div>
        <h2>
          <span className="detalhe-assinaturas">[</span>"assinaturas"
          <span className="detalhe-assinaturas">]</span>;
        </h2>
      </div>

      <div className="box-assinaturas">
        <div className="ass-junior">
          <img className="img-assinaturas" src={Img1} />
          <div className="card-assinaturas">
            <div className="card-up">
              <div className="titulo-card-assinaturas">plano = junior</div>
              <p className="descricao-card-assinaturas">
                Lorem ipsum dolor sit amet, consecte adipiscing elit
              </p>
              <a href="#">
                <button className="btn-card-assinaturas">"saiba_mais"</button>
              </a>
            </div>
          </div>
        </div>

        <div className="ass-pleno">
          <img className="img-assinaturas" src={Img2} />
          <div className="card-assinaturas">
            <div className="card-up">
              <div className="titulo-card-assinaturas">plano = pleno </div>
              <p className="descricao-card-assinaturas">
                Lorem ipsum dolor sit amet, consecte adipiscing elit
              </p>
              <a href="#">
                <button className="btn-card-assinaturas">"saiba_mais"</button>
              </a>
            </div>
          </div>
        </div>
        <div className="ass-senior">
          <img className="img-assinaturas" src={Img3} />
          <div className="card-assinaturas">
            <div className="card-up">
              <div className="titulo-card-assinaturas">plano = pleno</div>
              <p className="descricao-card-assinaturas">
                Lorem ipsum dolor sit amet, consecte adipiscing elit
              </p>
              <a href="#">
                <button className="btn-card-assinaturas">"saiba_mais"</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
