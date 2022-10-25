import "./cadastro.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  nome: yup.string().required,
  documento: yup.number().max(11).positive().integer().required,
  idade: yup.number().min(18).positive().integer().required,
  telefone: yup.number().max(11).positive().integer(),
  email: yup.string().email().required,
  senha: yup.string().max(8).required,
  cep: yup.number().max(8).positive().integer().required,
  logradouro: yup.string(),
  numero: yup.number().max(5).positive().integer(),
  bairro: yup.string(),
  cidade: yup.string(),
  estado: yup.string()
});

export function CadastroUsuario() {
  return (
    <div className="form-register">
      <h2>
        ["<span className="detalhe-produtos">cadastre-se</span>"];
      </h2>
      <Formik
      validationSchema={schema}
        initialValues={{
          nome: "",
          documento: "",
          idade: "",
          telefone: "",
          email: "",
          senha: "",
          cep: "",
          logradouro: "",
          numero: "",
          bairro: "",
          cidade: "",
          estado: "",
        }}
      >
        {(ErrorMessage) => (
          <Form>
            <div>
              <label htmlFor="nome">Nome</label>
              <Field id="nome" name="nome" className="main" type="text" />
            </div>
            <div>
              <label htmlFor="documento">Documento</label>
              <Field
                id="documento"
                name="documento"
                className="main"
                type="number"
              />
            </div>
            <div>
              <label htmlFor="idade">Idade</label>
              <Field id="idade" name="idade" className="main" type="number" />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <Field
                id="telefone"
                name="telefone"
                className="main"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <Field id="email" name="email" className="main" type="email" />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <Field id="senha" name="senha" className="main" type="text" />
            </div>
            <div>
              <label htmlFor="cep">CEP</label>
              <Field id="cep" name="cep" className="main" type="number" />
            </div>
            <div>
              <label htmlFor="logradouro">Logradouro</label>
              <Field
                id="logradouro"
                name="logradouro"
                className="main"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="numero">Número</label>
              <Field id="numero" name="numero" className="main" type="number" />
            </div>
            <div>
              <label htmlFor="bairro">Bairro</label>
              <Field id="bairro" name="bairro" className="main" type="text" />
            </div>
            <div>
              <label htmlFor="cidade">Cidade</label>
              <Field id="cidade" name="cidade" className="main" type="text" />
            </div>
            <div>
              <label htmlFor="estado">Estado</label>
              <Field id="estado" name="estado" className="main" type="text" />
            </div>
          </Form>
        )}
        <div className="send">
          <button className="btn-card-produtos btn-send" type="submit">
            cadastrar
          </button>
          <span className="cadastro">
            Você já tem Login? <a href="/login">Entre Aqui. </a>
          </span>
        </div>
      </Formik>
    </div>
  );
}
