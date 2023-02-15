import { NavFixed } from "../components/NavFixed/Index";
import { Pagamentos } from "../components/Pagamento/Index"
import { Footer } from "../components/Footer/Index";

function Pagamento() {
  return (
    <div>
      <NavFixed />
      <Pagamentos />
      <Footer />
    </div>
  );
}

export default Pagamento;