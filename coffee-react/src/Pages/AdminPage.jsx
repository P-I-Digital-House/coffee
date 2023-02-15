import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";
import { AdmPage } from "../components/Adm/Index";

function AdminPage() {
  return (
    <div>
      <NavFixed />
      <AdmPage />
      <Footer />
    </div>
  );
}

export default AdminPage;