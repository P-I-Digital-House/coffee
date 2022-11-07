import "../Login/login.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { api_url } from "../../../api";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  senha: yup.string().min(8, 'Senha deve ter pelo menos 8 dígitos').required('Senha obrigatória'),
});

export function LoginUsuario() {
  const navigate = useNavigate();
  return (
    <div className="form-login">
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          senha: ""
        }}
        onSubmit={(values) => {
          fetch(api_url+'usuarios/login', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then((response) => response.json())
            .then((response) => {
              (response.errors) ? alert('Campos incorretos') : (response ? navigate("/") : alert('Não foi possível logar'))
            })
        }}
      >
        {({ touched, errors, isSubmitting, values }) => (
      <Form className="login">
        <div>
          <b>Faça seu login</b>
        </div>
        <div className="label">
          <label htmlFor="">Seu e-mail</label>
          <Field className="main" id="email" name="email" type="text" />
          {touched.email && errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="label">
          <label htmlFor="">Sua senha</label>
          <Field className="main" id="senha" name="senha" type="password" />
          {touched.senha && errors.senha && <div className="error">{errors.senha}</div>}
        </div>
        <div>
          <span className="cadastro">
            <a href="#">Lembrar minha senha</a>
          </span>
        </div>        
        <div className="btn">
          <button className="btn-send" type="submit">
            Entrar
          </button>
        </div>
        <span className="cadastro">
          <a href="#">Esqueceu sua senha?</a>
        </span>
        <span className="cadastro">
          Não possui uma conta?
          <a href="/login/cadastro"> Crie uma agora!</a>
        </span>
      </Form>
    )}
  </Formik>
  </div>
  );
}
