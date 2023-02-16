import { useContext, useEffect, useState } from "react";
import api from "../../../api";
import moment from "moment";
import { Pencil, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie, } from "react-use-cookie";
import "../Adm/adm.css";
import { CartContext } from "../../contexts/CartContext";
import { LoginContext } from "../../contexts/LoginContext";

export function AdmPage() {
  const navigate = useNavigate();
  const {isAdmin} = useContext(LoginContext)

  const [dados, setDados] = useState([]);

  async function getUsers() {    
    if (!isAdmin) {
      alert("Página apenas para administradores")
      navigate("/");
    }

    const user = getCookie("user");
    const token = getCookie("token");
    if (user != "" && user != null) {
      const { id } = JSON.parse(user);
      const response = await api.get(`/users`
    , {
        headers: { Authorization: `${token}` },
      });
      try {
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
  }, [onRemove]);

  async function onRemove(item) {
    var r = confirm("Você tem certeza que quer deletar a conta?");
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
    <div className="container3">
      <h2>Meus Usuários Cadastrados</h2>
      <table className="table">
        <thead>
          <tr className="tableTr">
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
        <tbody className="tableBody">
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
                <button className="btnUsers" onClick={() => onRemove(item)}>
                  <Trash size={30} color="#ee1b1b" />
                </button>
              </td>
              <td>
                <button className="btnUsers" onClick={() => update(item)}>
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
