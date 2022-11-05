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
      <h2>
        ["<span className="detalhe-produtos">login</span>"];
      </h2>{" "}
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
            .then((response) => response ? navigate('/') : alert('nao logou'))
        }}
      >
        {({ touched, errors, isSubmitting, values }) => (
      <Form className="login">
        <div className="label">
          <label htmlFor="">E-mail</label>
          <Field className="main" id="email" name="email" type="text" />
          {touched.email && errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="label">
          <label htmlFor="">Senha</label>
          <Field className="main" id="senha" name="senha" type="password" />
          {touched.senha && errors.senha && <div className="error">{errors.senha}</div>}
        </div>
        <span className="cadastro">
          <a href="#">Esqueci minha senha</a>
        </span>
      <div className="btn">
        <button className="btn-card-produtos btn-send" type="submit">
          login
        </button>
      </div>
      <span className="cadastro">
        Você ainda não tem Login?
        <a href="/login/cadastro"> Registre-se Aqui.</a>
      </span>
    </Form>
    )}
  </Formik>
  </div>
  );
}
