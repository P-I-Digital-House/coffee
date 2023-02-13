import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";
import { EditUser } from "../components/Edit/EditUser";

function EditPage() {
  return (
    <div>
      <NavFixed />
      <EditUser />
      <Footer />
    </div>
  );
}

export default EditPage;