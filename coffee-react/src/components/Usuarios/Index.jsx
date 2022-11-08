import { useState, useEffect } from "react";
import { CardProduto } from "../CardProduto/Index";
import api from "../../../api";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import "../Usuarios/usuarios.css";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório"),
  document: yup
    .number()
    .test("len", "CPF deve ter 11 dígitos", (val) => {
      if (val === undefined) {
        return true;
      }
      return val.toString().length == 11;
    })
    .required("Documento obrigatório"),
  age: yup.number().min(18).positive().integer().required("age obrigatória"),
  tel: yup.string().max(11),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup
    .string()
    .min(8, "Senha deve ter pelo menos 8 dígitos")
    .required("Senha obrigatória"),
});

export function Usuarios() {
  const navigate = useNavigate();

  const [dados, setDados] = useState({
    picture: "",
    name: "",
    document: 0,
    age: 0,
    tel: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {
    const response = await api.get("/usuarios/46334628810");
    try {
      setDados(response.data);
    } catch (error) {
      alert("Ocorreu um erro, verifique os dados!");
    }
  }

  async function updateUser(values) {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append("name", values.nome);
    formData.append("document", values.document);
    formData.append("age", parseInt(values.age));
    formData.append("tel", values.tel);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("picture", values.picture);
    formData.append("file", fileField.files[0]);

    try {
      const response = await api.put("/usuarios/atualizar", formData);
      alert("Usuário cadastrado com sucesso.");
    } catch (error) {
      alert("Usuário não cadastrado.");
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
          nome: dados.name,
          document: dados.document,
          age: dados.age,
          tel: dados.tel,
          email: dados.email,
          password: dados.password,
        }}
        onSubmit={(values) => {
          updateUser(values);
        }}
      >
        {({ touched, errors, isSubmitting, values }) => (
          <Form className="update" encType="multipart/form-data">
            <div className="label">
              <label htmlFor="nome">Nome</label>
              <Field className="main" id="nome" name="nome" type="text" />
              {touched.nome && errors.nome && (
                <div className="error">{errors.nome}</div>
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
              <label htmlFor="age">Idade</label>
              <Field className="main" id="age" name="age" type="number" />
              {touched.age && errors.age && (
                <div className="error">{errors.age}</div>
              )}
            </div>
            <div className="label">
              <label htmlFor="tel">Telefone</label>
              <Field className="main" id="tel" name="tel" type="text" />
              {touched.tel && errors.tel && (
                <div className="error">{errors.tel}</div>
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
    </div>
  );
}
