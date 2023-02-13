import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Pencil, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { Titles } from "../Titles/Index";

export function AdmPage() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  async function getUsers() {
    const { data } = await axios.get("http://localhost:5000/users");
    console.log(data);
    setList(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function onRemove(item) {
    await axios.delete(`http://localhost:5000/users/${item.id}`);

    getUsers();
  }

  async function update(user) {
    navigate(`/admin/users/edit/${user.id}`);
  }

  return (
    <div>
      <Titles title={"Usuários Cadastrados"} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Apagar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.cpf}</td>
              <td>
                {item.birthdate && moment(item.birthdate).format("DD-MM-YYYY")}
              </td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => onRemove(item)}>
                  <Trash size={30} color="#ee1b1b" />
                </button>
              </td>
              <td>
                <button onClick={() => update(item)}>
                  <Pencil size={30} color="#d4a216" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
