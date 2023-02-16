import "../Pagamento/pagamento.css";
import Visa from "../../assets/payments/icon-fast-visa.svg";
import Master from "../../assets/payments/icon-fast-mastercard.svg";
import Pix from "../../assets/payments/pix.svg";
import Boleto from "../../assets/payments/icon-fast-boleto.svg";
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from "react-use-cookie";

const validationSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .required("Número do cartão é obrigatório")
    .matches(/^[0-9]{16}$/, "Número do cartão inválido"),
  cardName: yup
    .string()
    .required("Nome do titular é obrigatório")
    .min(3, "Nome do titular deve ter no mínimo 3 caracteres"),
  securityCode: yup
    .string()
    .required("Código de segurança é obrigatório")
    .matches(/^[0-9]{3}$/, "Código de segurança inválido"),
  validity: yup
    .string()
    .required("Data de validade é obrigatória")
    .matches(
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      "Data de validade deve estar no formato MM/YY"
    )
});

export function Pagamentos() {
  const navigate = useNavigate();

  const [dados, setDados] = useState({
    cardNumber: "",
    cardName: "",
    securityCode: "",
    validity: ""
  });

  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {
    const user = getCookie("user");
    const token = getCookie("token");
    if(user != "" && user != null){
      const { id } = JSON.parse(user);
      const response = await api.get(`/payment/userId/${id}`, {
        headers: { Authorization: `${token}` },
      });
    try {
      setDados(response.data);
    } catch (error) {
      alert("Ocorreu um erro, verifique os dados!");
    }
    }else{
      alert('Você nao está logado')
      navigate("/login")
    }    
  }

  async function createPayment(values) {
    const user = JSON.parse(getCookie("user"));
    const token = getCookie("token");
    const formData = new FormData();

    formData.append("cardNumber", values.cardNumber);
    formData.append("cardName", values.cardName);
    formData.append("securityCode", values.securityCode);
    formData.append("validity", values.validity);
    formData.append("users_id", user.id);

    try {
      const response = await api.post("/payment", formData, {
        headers: { Authorization: `${token}` },
      });
      alert("Cartão de crédito cadastrado com sucesso.");
    } catch (error) {
      alert("Cartão de crédito não cadastrado.");
    }
  }

  return (
    <Formik
      validationSchema={validationSchema}
      enableReinitialize="true"
      initialValues={{
        cardNumber: dados.cardNumber,
        cardName: dados.cardName,
        securityCode: dados.securityCode,
        validity: dados.validity
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
            <Field type="input" id="input-pagamento" name="cardNumber" />
            {touched.cardNumber && errors.cardNumber && (
                <div className="error">{errors.cardNumber}</div>
            )}
          </div>
          <div className="label">
            Nome do Titular
            <Field type="input" id="input-pagamento" name="cardName" />
            {touched.cardName && errors.cardName && (
                <div className="error">{errors.cardName}</div>
            )}
          </div>
          <div className="label">
            Código de Segurança
            <Field type="input" id="input-pagamento" name="securityCode" />
            {touched.securityCode && errors.securityCode && (
                <div className="error">{errors.securityCode}</div>
            )}
          </div>
          <div className="label">
            Validade
            <Field type="input" id="input-pagamento" name="validity" />
            {touched.validity && errors.validity && (
                <div className="error">{errors.validity}</div>
            )}
            <button type="submit" className="botao-pagamento" navigate="/finalizada">
              <b>Cadastrar</b>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}