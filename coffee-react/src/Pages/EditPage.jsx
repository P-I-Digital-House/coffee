import { Footer } from "../components/Footer/Index";
import { NavFixed } from "../components/NavFixed/Index";
import { EditUser } from "../components/Edit/Index";
import { useParams } from "react-router-dom";

export function EditPage() {
  const { id } = useParams();
  return (
    <div>
      <NavFixed />
      <EditUser id={id} />
      <Footer />
    </div>
  );
}
