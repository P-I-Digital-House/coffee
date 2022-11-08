import "../Login/login.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup
    .string()
    .min(8, "Senha deve ter pelo menos 8 dígitos")
    .required("Senha obrigatória"),
});

export function LoginUsuario() {
  const navigate = useNavigate();

  async function onLogin(values) {
    try {
      const response = await api.post("/usuarios/login", values);
      console.log(response);
      localStorage.setItem("token", response.data);
      navigate('/');
    } catch (error) {
      console.log(error);
      alert("Login ou Senha Inválidos.");
    }
  }

  return (
    <div className="form-login">
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          onLogin(values);
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
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div className="label">
              <label htmlFor="">Sua Senha</label>
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
            <div>
              <span className="cadastro">
                <a href="#">Lembrar minha Senha</a>
              </span>
            </div>
            <div className="btn">
              <button className="btn-send" type="submit">
                Entrar
              </button>
            </div>
            <span className="cadastro">
              <a href="#">Esqueceu sua Senha?</a>
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
