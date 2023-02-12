import "../Cadastro/cadastro.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
// import { useEffect, useState } from "react";
import api from "../../../api";
import { useNavigate } from "react-router-dom";


const getFormatedDate = (currentDate) => {
  return currentDate.split('/').reverse().join('-');
 }
const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
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
  password: yup.string().min(8, "password deve ter pelo menos 8 dígitos").required("password obrigatória"),
});

export function CadastroUsuario() {
  const navigate = useNavigate();

  async function createUser(values) {
    const formData = new FormData();
    // const fileField = document.querySelector('input[type="file"]');

    formData.append("name", values.name);
    formData.append("document", values.document);
    formData.append("birthdate", values.birthdate);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("picture", values.picture);
    // formData.append("file", fileField.files[0]);

    try {
      await api.post("/users", formData);
      alert("Usuário cadastrado com sucesso.");
      navigate("/");
    } catch (error) {
      alert("Aconteceu um erro, verifique os dados.");
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
          name: "",
          document: "",
          birthdate: "",
          phone: "",
          email: "",
          password: "",
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
              <label htmlFor="name">Nome</label>
              <Field className="main" id="name" name="name" type="text" />
              {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
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
              <label htmlFor="birthdate">Idade</label>
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
              <label htmlFor="password">Senha</label>
              <Field
                className="main"
                id="password"
                name="password"
                type="password"
              />
              {touched.password && errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div className="label">
              <label htmlFor="picture">Link da Foto</label>
              <Field className="main" id="picture" name="picture" type="text" />
              {touched.picture && errors.picture && (
                <div className="error">{errors.picture}</div>
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
