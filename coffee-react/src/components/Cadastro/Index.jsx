import "../Cadastro/cadastro.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { api_url } from "../../../api";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  nome: yup.string().required('Nome obrigatório'),
  documento: yup.number().test('len', 'CPF deve ter 11 dígitos', (val) =>
  {
    if(val === undefined){
      return true
    }
    return val.toString().length == 11
  } ).required('Documento obrigatório'),
  idade: yup.number().min(18).positive().integer().required('Idade obrigatória'),
  telefone: yup.string().max(11),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  senha: yup.string().min(8, 'Senha deve ter pelo menos 8 dígitos').required('Senha obrigatória')
});

export function CadastroUsuario() {
  const navigate = useNavigate();
  return (
    <div className="form-register">
      <h2>
        ["<span className="detalhe-produtos">cadastre-se</span>"];
      </h2>{" "}
      <Formik
        validationSchema={schema}
        initialValues={{
          nome: "",
          documento: "",
          idade: "",
          telefone: "",
          email: "",
          senha: "",
          picture: "",
          file: ""
        }}
        onSubmit={(values) => {
          const formData = new FormData();
          const fileField = document.querySelector('input[type="file"]');
          
          formData.append('name', values.nome);
          formData.append('document', values.documento);
          formData.append('age', values.idade);
          formData.append('tel', values.telefone);
          formData.append('email', values.email);
          formData.append('password', values.senha);
          formData.append('picture', values.picture);
          formData.append('file', fileField.files[0]);
          // values.map(obj => {
          //   { ...obj, ...newProp }
          // })

          fetch(api_url+'usuarios/cadastrar', {
            method: 'POST', 
            body: formData,
          })
            .then((response) => response.status == 200 ? (alert("cadastrado"), navigate('/') ): alert('nao cadastrou'))
        }}
      >
        {({ touched, errors, isSubmitting, values }) => (
          <Form className="register" encType="multipart/form-data">
            <div className="label">
              <label htmlFor="nome">Nome</label>
              <Field className="main" id="nome" name="nome" type="text" />
              {touched.nome && errors.nome && <div className="error">{errors.nome}</div>}
            </div>
            <div className="label">
              <label htmlFor="documento">Documento</label>
              <Field className="main" id="documento" name="documento" type="number" />
              {touched.documento && errors.documento && <div className="error">{errors.documento}</div>}
            </div>
            <div className="label">
              <label htmlFor="idade">Idade</label>
              <Field className="main" id="idade" name="idade" type="number" />
              {touched.idade && errors.idade && <div className="error">{errors.idade}</div>}
            </div>
            <div className="label">
              <label htmlFor="telefone">Telefone</label>
              <Field className="main" id="telefone" name="telefone" type="text" />
              {touched.telefone && errors.telefone && <div className="error">{errors.telefone}</div>}
            </div>
            <div className="label">
              <label htmlFor="email">E-mail</label>
              <Field className="main" id="email" name="email" type="email" />
              {touched.email && errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="label">
              <label htmlFor="senha">Senha</label>
              <Field className="main" id="senha" name="senha" type="password" />
              {touched.senha && errors.senha && <div className="error">{errors.senha}</div>}
            </div>
            <div className="label">
              <label htmlFor="picture">Link da Foto</label>
              <Field className="main" id="picture" name="picture" type="text" />
              {touched.picture && errors.picture && <div className="error">{errors.picture}</div>}
            </div>
            <div className="label">
              <label htmlFor="file">Link da Foto</label>
              <Field className="main" id="file" name="file" type="file" accept="image/png, image/jpeg" />
              {touched.file && errors.file && <div className="error">{errors.file}</div>}
            </div>
        <div className="send">
          <button type="submit" className="btn-send btn-card-produtos">cadastrar</button>
          <span>
            Você já tem Login? <a href="/login">Entre Aqui. </a>
          </span>
        </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
