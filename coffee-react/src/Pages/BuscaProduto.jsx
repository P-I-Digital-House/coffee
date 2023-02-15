import { BuscaProduto } from "../components/BuscaProduto/Index";
import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";
import {useParams } from 'react-router-dom';

export function BuscaProdutos() {
  const { search } = useParams();
  return (
    <div>
      <NavFixed />
      <BuscaProduto search={search} />
      <Footer />
    </div>
  );
}