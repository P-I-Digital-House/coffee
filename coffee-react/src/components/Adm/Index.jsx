import { useEffect, useState } from "react";
import api from "../../../api";
import moment from "moment";
import { Pencil, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie, } from "react-use-cookie";
import "../Adm/adm.css";

export function AdmPage() {
  const navigate = useNavigate();

  const [dados, setDados] = useState([]);

  async function getUsers() {
    const user = getCookie("user");
    const token = getCookie("token");
    if (user != "" && user != null) {
      const { id } = JSON.parse(user);
      const response = await api.get(`/users`, {
        headers: { Authorization: `${token}` },
      });
      try {
        console.log(response.data)
        setDados(response.data);
      } catch (error) {
        alert("Ocorreu um erro, verifique os dados!");
      }
    } else {
      alert('Você nao está logado')
      navigate("/login")
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function onRemove(item) {
    var r = confirm("Você tem certeza que quer deletar sua conta?");
    if (r == true) {
      const user = getCookie("user");
      const token = getCookie("token");
      // if(user){
      const { id } = JSON.parse(user);
      try {
        await api.delete(`/users/${item.id}`,
          {
            headers: { Authorization: `${token}` },
          });
        setCookie("user", "")
        setCookie("token", "")
        navigate("/admin/users");
      } catch {
        alert("Ocorreu um erro, tente mais tarde!");
      }
      // }

    }
  }
  async function update(user) {
    navigate(`/admin/users/edit/${user.id}`);
  }

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Apagar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.uname}</td>
              <td>{item.document}</td>
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
                <button onClick={() => update()}>
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
