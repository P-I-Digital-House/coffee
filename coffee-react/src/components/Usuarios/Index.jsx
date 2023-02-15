import { useState, useEffect } from "react";
import api from "../../../api";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import "../Usuarios/usuarios.css";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie,  } from "react-use-cookie";


const schema = yup.object().shape({
  uname: yup.string().required("Nome obrigatório"),
  document: yup
    .number()
    .test("len", "CPF deve ter 11 dígitos", (val) => {
      if (val === undefined) {
        return true;
      }
      return val.toString().length == 11;
    })
    .required("Documento obrigatório"),
  birthdate: yup.date().required("birthdate obrigatória"),
  phone: yup.string().max(11),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  upassword: yup
    .string()
    .min(8, "Senha deve ter pelo menos 8 dígitos")
    .required("Senha obrigatória"),
});

export function Usuarios() {
  const navigate = useNavigate();

  const [dados, setDados] = useState({
    picture: "",
    uname: "",
    document: 0,
    birthdate: 0,
    phone: "",
    email: "",
    upassword: "",
  });

  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {
    const user = getCookie("user");
    const token = getCookie("token");
    if(user != "" && user != null){
      const { id } = JSON.parse(user);
      const response = await api.get(`/users/${id}`, {
        headers: { Authorization: `${token}` },
      });
    try {
      setDados(response.data);
    } catch (error) {
      alert("Ocorreu um erro, verifique os dados!");
    }
    }else{
      alert('Você nao está logado')
      navigate("/login")
    }
    
  }

  async function deleteUser() {
    var r=confirm("Você tem certeza que quer deletar sua conta?");
    if(r==true){
      const user = getCookie("user");
      const token = getCookie("token");
      if(user){
        const { id } = JSON.parse(user);
        try{
          const response = await api.delete(`/users/${id}`, {
            headers: { Authorization: `${token}` },
          });
          setCookie("user", "")
          setCookie("token", "")
          navigate("/");
        }
        catch (error) {
          alert("Ocorreu um erro, tente mais tarde!");
        }
      }
    }else{

    }
    
  }

  async function updateUser(values) {
    const user = getCookie("user");
    const token = getCookie("token");
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append("uname", values.uname);
    formData.append("document", values.document);
    formData.append("birthdate", values.birthdate);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("upassword", values.upassword);
    formData.append("picture", values.picture);
    formData.append("file", fileField.files[0]);

    if(user){
      const { id } = JSON.parse(user);
    try {
      const response = await api.put(`/users/${id}`, formData, {
        headers: { Authorization: `${token}` },
      });
      alert("Usuário atualizado com sucesso.");
    } catch (error) {
      alert("Usuário não cadastrado.");
    }
  }
}

  return (
    <div className="form-update container-usuarios">
      <h2>
        <span className="detalhe-usuarios">Minha conta</span>
      </h2>{" "}
      <Formik
        validationSchema={schema}
        enableReinitialize="true"
        initialValues={{
          uname: dados.uname,
          document: dados.document,
          birthdate: dados.birthdate,
          phone: dados.phone,
          email: dados.email,
          upassword: dados.upassword,
        }}
        onSubmit={(values) => {
          updateUser(values);
        }}
      >
        {({ touched, errors, isSubmitting, values }) => (
          <Form className="update" encType="multipart/form-data">
            <div className="label">
              <label htmlFor="uname">Nome</label>
              <Field className="main" id="uname" name="uname" type="text" />
              {touched.uname && errors.uname && (
                <div className="error">{errors.uname}</div>
              )}
            </div>
            <div className="label">
              <label htmlFor="document">Documento</label>
              <Field
                className="main"
                id="document"
                name="document"
                type="number"
                disabled={true}
              />
              {touched.document && errors.document && (
                <div className="error">{errors.document}</div>
              )}
            </div>
            <div className="label">
              <label htmlFor="birthdate">Data de Nascimento</label>
              <Field className="main" id="birthdate" name="birthdate" type="date" />
              {touched.birthdate && errors.birthdate && (
                <div className="error">{errors.birthdate}</div>
              )}
            </div>
            <div className="label">
              <label htmlFor="phone">Telefone</label>
              <Field className="main" id="phone" name="phone" type="text" />
              {touched.phone && errors.phone && (
                <div className="error">{errors.phone}</div>
              )}
            </div>
            <div className="label">
              <label htmlFor="email">E-mail</label>
              <Field className="main" id="email" name="email" type="email" />
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div className="label">
              <label htmlFor="upassword">Senha</label>
              <Field
                className="main"
                id="upassword"
                name="upassword"
                type="password"
              />
              {touched.upassword && errors.upassword && (
                <div className="error">{errors.upassword}</div>
              )}
            </div>
            <div className="label">
              <label htmlFor="file">Escolher foto</label>
              <Field
                className="main"
                id="file"
                name="file"
                type="file"
                accept="image/png, image/jpeg"
              />
              {touched.file && errors.file && (
                <div className="error">{errors.file}</div>
              )}
            </div>
            <div className="send">
              <button type="submit" className="btn-send btn-card-produtos">
                atualizar
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <button className="btnDeleteUser" onClick={() => deleteUser()}><a>Deletar minha conta</a></button>
    </div>
  );
}
