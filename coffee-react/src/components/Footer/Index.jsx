import "../Footer/footer.css";
import Facebook from "../../assets/bola-facebook.svg";
import Instagram from "../../assets/bola-instagram.svg";
import WhastApp from "../../assets/bola-whatsapp.svg";

import Visa from "../../assets/payments/icon-fast-visa.svg";
// ../assets/payments/icon-fast-visa.svg";
import Master from "../../assets/payments/icon-fast-mastercard.svg";
import Pix from "../../assets/payments/pix.svg";
import Boleto from "../../assets/payments/icon-fast-boleto.svg";
import Android from "../../assets/payments/android.png";
import Apple from "../../assets/payments/apple.png";

export function Footer() {
  return (
    <div className="footer">
      <div>
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
          <span>["redes sociais"]</span>
            <ul>
              <li>
                <a href="#">
                  <img src={Facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={WhastApp} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="info">
            <span>["formas de pagamento"]</span>
            <img className="icon30" src={Visa} alt="" />
            <img className="icon30" src={Master} alt="" />
            <img className="icon30" src={Pix} alt="" />
            <img className="icon30" src={Boleto} alt="" />
          </div>
          <div className="info">
            <span>["applicativo"]</span>
            <a href="https://play.google.com/store/games">
              <img className="icon50" src={Android} alt="" />
            </a>
            <a href="https://www.apple.com/br/app-store/">
              <img className="icon50" src={Apple} alt="" />
            </a>
          </div>
        </div>
        <hr className="line4" />

        <div className="infoShop">
          <p>Coffee S. A. CNPJ: 12.594.529/0001-60</p>
          <p>
            Rua Javascript, 0 - Sala 1 - Programação - CEP 0000-999 - São Paulo
            - SP Telefone: 11 1111-2222
          </p>
          <p>© 2022 Coffee - Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
}
