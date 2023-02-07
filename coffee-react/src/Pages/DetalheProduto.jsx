import { DetalheProduto } from "../components/DetalheProduto/Index";
import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";
import {useParams } from 'react-router-dom';

export function DetalheProdutos() {
  const { id } = useParams();
  return (
    <div>
      <NavFixed />
      <DetalheProduto id={id} />
      <Footer />
    </div>
  );
}
