import "./cadastro.css";
import { Formik, Form, Field } from "formik";
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
  estado: yup.string(),
});

export function CadastroUsuario() {
  return (
    <div>
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
        {() => (
          <Form>
            <div>
              <label htmlFor="nome">Nome</label>
              <Field id="nome" name="nome" type="text" />
            </div>
            <div>
              <label htmlFor="documento">Documento</label>
              <Field id="documento" name="documento" type="number" />
            </div>
            <div>
              <label htmlFor="idade">Idade</label>
              <Field id="idade" name="idade" type="number" />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <Field id="telefone" name="telefone" type="text" />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <Field id="email" name="email" type="email" />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <Field id="senha" name="senha" type="text" />
            </div>
            <div>
              <label htmlFor="cep">CEP</label>
              <Field id="cep" name="cep" type="number" />
            </div>
            <div>
              <label htmlFor="logradouro">Logradouro</label>
              <Field id="logradouro" name="logradouro" type="text" />
            </div>
            <div>
              <label htmlFor="numero">Número</label>
              <Field id="numero" name="numero" type="number" />
            </div>
            <div>
              <label htmlFor="bairro">Bairro</label>
              <Field id="bairro" name="bairro" type="text" />
            </div>
            <div>
              <label htmlFor="cidade">Cidade</label>
              <Field id="cidade" name="cidade" type="text" />
            </div>
            <div>
              <label htmlFor="estado">Estado</label>
              <Field id="estado" name="estado" type="text" />
            </div>
          </Form>
        )}
        <div>
          <button type="submit">cadastrar</button>
          <span>
            Você já tem Login? <a href="/login">Entre Aqui. </a>
          </span>
        </div>
      </Formik>
    </div>
  );
}
