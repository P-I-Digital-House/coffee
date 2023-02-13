import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function EditUser() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  async function onLoad() {
    console.log(id);
    const { data } = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(data);
  }

  function onChange(value, name) {
    setUser({ ...user, [name]: value });
  }

  async function onSave() {
    await axios.put(`http://localhost:5000/users/${id}`, user);
    alert("Usuário atualizado!")
    navigate("/");
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div >
      <div >
        <div >
          <div >
            <label htmlFor="">Nome </label>{" "}
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "name")}
              value={user.name}
            />
          </div>
          <div >
            <label>CPF</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "cpf")}
              value={user.cpf}
            />
          </div>

          <div >
            <label>Telefone</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "phone")}
              value={user.phone}
            />
          </div>
        </div>
        <div >
          <div >
            <label>Data de Nascimento</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "birthdate")}
              value={user.birthdate}
            />
          </div>

          <div >
            <label>E-mail</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "email")}
              value={user.email}
            />
          </div>
          <div >
            <label>Senha</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "password")}
              value={user.password}
            />
          </div>
        </div>
      </div>
      <div>
        <button onClick={onSave}>
          ATUALIZAR
        </button>
      </div>
    </div>
  );
}
