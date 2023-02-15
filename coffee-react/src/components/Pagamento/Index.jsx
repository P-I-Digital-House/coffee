import "../Pagamento/pagamento.css";
import Visa from "../../assets/payments/icon-fast-visa.svg";
import Master from "../../assets/payments/icon-fast-mastercard.svg";
import Pix from "../../assets/payments/pix.svg";
import Boleto from "../../assets/payments/icon-fast-boleto.svg";
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import api from "../../../api";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  numeroCartao: yup
    .string()
    .required("Número do cartão é obrigatório")
    .matches(/^[0-9]{16}$/, "Número do cartão inválido"),
  nomeTitular: yup
    .string()
    .required("Nome do titular é obrigatório")
    .min(3, "Nome do titular deve ter no mínimo 3 caracteres"),
  codigoSeguranca: yup
    .string()
    .required("Código de segurança é obrigatório")
    .matches(/^[0-9]{3}$/, "Código de segurança inválido"),
  validade: yup
    .string()
    .required("Data de validade é obrigatória")
    .matches(
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      "Data de validade deve estar no formato MM/YY"
    )
});

export function Pagamentos() {
  const navigate = useNavigate();

  async function createPayment(values) {
    const formData = new FormData();

    formData.append("numeroCartao", values.numeroCartao);
    formData.append("nomeTitular", values.nomeTitular);
    formData.append("codigoSeguranca", values.codigoSeguranca);
    formData.append("validade", values.validade);

    try {
      await api.post("/pagamento", formData);
      alert("Meio de pagamento cadastrado com sucesso.");
      navigate("/");
    } catch (error) {
      alert("Aconteceu um erro, verifique os dados.");
    }
  }

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        numeroCartao: "",
        nomeTitular: "",
        codigoSeguranca: "",
        validade: ""
      }}
      onSubmit={(values) => {
        createPayment(values);
      }}
    >
      {({ touched, errors, isSubmitting, values }) => (
        <Form className="form-pagamento" encType="multipart/form-data">
          <div form className="pagamento">
            <b>Método de Pagamento</b>
          </div>
          <div className="imagens-pagamento">
            <img className="icone-pagamento" src={Visa} alt="" />
            <img className="icone-pagamento" id="icone-selecionado" src={Master} alt="" />
            <img className="icone-pagamento" src={Pix} alt="" />
            <img className="icone-pagamento" src={Boleto} alt="" />
          </div>
          <div className="label">
            Número do Cartão
            <Field type="input" id="input-pagamento" name="numeroCartao" />
            {touched.numeroCartao && errors.numeroCartao && (
                <div className="error">{errors.numeroCartao}</div>
            )}
          </div>
          <div className="label">
            Nome do Titular
            <Field type="input" id="input-pagamento" name="nomeTitular" />
            {touched.nomeTitular && errors.nomeTitular && (
                <div className="error">{errors.nomeTitular}</div>
            )}
          </div>
          <div className="label">
            Código de Segurança
            <Field type="input" id="input-pagamento" name="codigoSeguranca" />
            {touched.codigoSeguranca && errors.codigoSeguranca && (
                <div className="error">{errors.codigoSeguranca}</div>
            )}
          </div>
          <div className="label">
            Validade
            <Field type="input" id="input-pagamento" name="validade" />
            {touched.validade && errors.validade && (
                <div className="error">{errors.validade}</div>
            )}
            <button type="submit" className="botao-pagamento">
              <b>Cadastrar</b>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}