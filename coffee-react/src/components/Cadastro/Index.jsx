import "../Cadastro/cadastro.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
// import { useEffect, useState } from "react";
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";


const getFormatedDate = (currentDate) => {
  return currentDate.split('/').reverse().join('-');
 }
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
  birthdate: yup.date().min(getFormatedDate('01/01/1940')), //.required("Idade obrigatória"),
  phone: yup.string().max(11),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  upassword: yup.string().min(8, "password deve ter pelo menos 8 dígitos").required("password obrigatória"),
});

export function CadastroUsuario() {
  const [token, setToken] = useCookie("token","");
  const [user, setUser] = useCookie("user","")
  const navigate = useNavigate();

  async function createUser(values) {
    const formData = new FormData();
    // const fileField = document.querySelector('input[type="file"]');

    formData.append("uname", values.uname);
    formData.append("document", values.document);
    formData.append("birthdate", values.birthdate);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("upassword", values.upassword);
    formData.append("picture", values.picture);
    // formData.append("file", fileField.files[0]);

    try {
      await api.post("/users", formData);
      alert("Usuário cadastrado com sucesso.");
      const valuesLogin = {
        email: values.email,
        password: values.upassword,
      }
      onLogin(valuesLogin).then(()=>navigate("/"));
    } catch (error) {
      alert("Aconteceu um erro, verifique os dados.");
    }
  }
  async function onLogin(values) {
    try {
      const response = await api.post("/login", values);
      setToken(response.data.token);
      setUser(JSON.stringify(response.data.user));
    
      response.data.token
        ? (alert("Bem vindo à página coffee"), navigate("/"))
        : alert("Login ou senha inválidos");
    } catch (error) {
      error
        ? alert(error)
        : console.log("sem erro");
    }
  }

  return (
    <div className="form-register">
      <h2>
        ["<span className="detalhe-produtos">cadastre-se</span>"];
      </h2>{" "}
      <Formik
        validationSchema={schema}
        initialValues={{
          uname: "",
          document: "",
          birthdate: "",
          phone: "",
          email: "",
          upassword: "",
          picture: "",
          // file: "",
        }}
        onSubmit={(values) => {
          createUser(values);
        }}
      >
        {({ touched, errors, isSubmitting, values }) => (
          <Form className="register" encType="multipart/form-data">
            <div>
              <b>Faça seu cadastro</b>
            </div>
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
            {/* <div className="label">
              <label htmlFor="file">Upload da Foto</label>
              <Field
                className="main"
                id="file"
                name="file"
                type="file"
                accept="imbirthdate/png, imbirthdate/jpeg"
              />
              {touched.file && errors.file && (
                <div className="error">{errors.file}</div>
              )}
            </div> */}
            <div className="send">
              <button type="submit" className="btn-send btn-card-produtos">
                Cadastrar
              </button>
            </div>
            <span className="cadastro">
              Você já tem Login? <a href="/login">Entre Aqui!</a>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
}
