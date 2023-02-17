import { Pedidos } from "../components/Pedidos/Index";
import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";

export function MeusPedidos() {
  return (
    <div>
      <NavFixed />
      <Pedidos />
      <Footer />
    </div>
  );
}