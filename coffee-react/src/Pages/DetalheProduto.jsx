import { DetalheProduto } from "../components/DetalheProduto/Index";
import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";

export function DetalheProdutos() {
  return (
    <div>
      <NavFixed />
      <DetalheProduto />
      <Footer />
    </div>
  );
}
