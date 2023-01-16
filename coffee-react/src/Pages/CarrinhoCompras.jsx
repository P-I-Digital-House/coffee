import { Carrinho } from "../components/Carrinho/Index";
import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";

export function CarrinhoCompras() {
  return (
    <div>
      <NavFixed />
      <Carrinho />
      <Footer />
    </div>
  );
}
