import "../Footer/footer.css";
import Facebook from "../../assets/bola-facebook.svg";
import Instagram from "../../assets/bola-instagram.svg";
import WhastApp from "../../assets/bola-whatsapp.svg";

export function Footer() {
  return (
    <div className="links">
      <div className="categorias">
        <span>["categorias"]</span>
        <ul>
          <li>
            <a href="#">cafés especiais</a>
          </li>
          <li>
            <a href="#">acessórios</a>
          </li>
          <li>
            <a href="#">xícaras</a>
          </li>
          <li>
            <a href="#">cold brew</a>
          </li>
          <li>
            <a href="#">kits e presentes</a>
          </li>
        </ul>
      </div>
      <div className="conteudo">
        <span>["conteúdo"]</span>
        <ul>
          <li>
            <a href="#">fale conosco</a>
          </li>
          <li>
            <a href="#">política de privacidade</a>
          </li>
          <li>
            <a href="#">trocas e devoluções</a>
          </li>
        </ul>
      </div>
      <div className="redes">
        <a href="#">
          <img src={Facebook} alt="" />
        </a>
        <a href="#">
          <img src={Instagram} alt="" />
        </a>
        <a href="#">
          <img src={WhastApp} alt="" />
        </a>
      </div>
    </div>
  );
}
