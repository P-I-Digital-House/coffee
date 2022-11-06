import "../Cadastro/cadastro.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useState } from "react";

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
  senha: yup.string().min(8, 'Senha deve ter pelo menos 8 dígitos').required('Senha obrigatória'),
  cep: yup.string().length(8, 'CEP deve ter 8 dígitos').required('CEP obrigatório'),
  logradouro: yup.string(),
  numero: yup.string().max(5),
  bairro: yup.string(),
  cidade: yup.string(),
  estado: yup.string(),
});



export function CadastroUsuario() {
  const [fileField, setFileField] = useState(document.querySelector('input[type="file"]'));
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
        }}
        onSubmit={(values) => {
          const formData = new FormData();
          setFileField(document.querySelector('input[type="file"]'));

          formData.append('nome', values.nome);
          formData.append('file', fileField.files[0]);
          console.log('formdata',values)
          // values.map(obj => {
          //   { ...obj, ...newProp }
          // })

          // fetch(api_url+'usuarios/cadastrar', {
          //   method: 'POST', 
          //   body: formData,
          // })
          //   .then((response) => response.json())
          //   .then((response) => response ? navigate('/') : alert('nao logou'))
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
              <label htmlFor="cep">CEP</label>
              <Field className="main" id="cep" name="cep" type="text" />
              {touched.cep && errors.cep && <div className="error">{errors.cep}</div>}
            </div>
            <div className="label">
              <label htmlFor="logradouro">Logradouro</label>
              <Field className="main" id="logradouro" name="logradouro" type="text" />
              {touched.logradouro && errors.logradouro && <div className="error">{errors.logradouro}</div>}
            </div>
            <div className="label">
              <label htmlFor="numero">Número</label>
              <Field className="main" id="numero" name="numero" type="number" />
              {touched.numero && errors.numero && <div className="error">{errors.numero}</div>}
            </div>
            <div className="label">
              <label htmlFor="bairro">Bairro</label>
              <Field className="main" id="bairro" name="bairro" type="text" />
              {touched.bairro && errors.bairro && <div className="error">{errors.bairro}</div>}
            </div>
            <div className="label">
              <label htmlFor="cidade">Cidade</label>
              <Field className="main" id="cidade" name="cidade" type="text" />
              {touched.cidade && errors.cidade && <div className="error">{errors.cidade}</div>}
            </div>
            <div className="label">
              <label htmlFor="estado">Estado</label>
              <Field className="main" id="estado" name="estado" type="text" />
              {touched.estado && errors.estado && <div className="error">{errors.estado}</div>}
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
