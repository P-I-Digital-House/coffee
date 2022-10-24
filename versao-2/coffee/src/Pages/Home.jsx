import { Footer } from "../components/Footer/Index";
import { Header } from "../components/Header/Index";
import { Main } from "../components/Main/Index";
import { Assinatura } from "../components/Assinaturas/Index";

function Home() {
  return (
    <div>
      <Header />
      <Assinatura />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
