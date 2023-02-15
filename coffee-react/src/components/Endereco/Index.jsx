import "../Endereco/endereco.css";
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const validationSchema = yup.object().shape({
  destinatario: yup
    .string()
    .required('O nome do destinatário é obrigatório')
    .min(3, "Nome do titular deve ter no mínimo 3 caracteres"),
  cep: yup
    .string()
    .test("len", "O CEP deve ter 8 dígitos", (val) => {
      if (val === undefined) {
        return true;
      }
      return val.toString().length == 8;
    })
    .required('O CEP é obrigatório'),
  endereco: yup
    .string()
    .required('O endereço é obrigatório'),
  numero: yup
    .number()
    .required('O número é obrigatório'),
  complemento: yup
    .string(),
  bairro: yup
    .string()
    .required('O bairro é obrigatório'),
  cidade: yup
    .string()
    .required('A cidade é obrigatória'),
  estado: yup
    .string(),
});

export function Enderecos() {
  
  function handleSearchCep(cep, setFieldValue) {
    setFieldValue("cep", cep);
    if (cep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(({data}) => {
          setFieldValue("endereco", data.logradouro);
          setFieldValue("bairro", data.bairro);
          setFieldValue("cidade", data.localidade);
          setFieldValue("estado", data.uf);
        });
    }
  }

  const navigate = useNavigate();

  async function createAddress(values) {
    console.log(values);
    const formData = new FormData();

    formData.append("destinatario", values.destinatario);
    formData.append("cep", values.cep);
    formData.append("endereco", values.endereco);
    formData.append("numero", values.numero);
    formData.append("complemento", values.complemento);
    formData.append("bairro", values.bairro);
    formData.append("cidade", values.cidade);
    formData.append("estado", values.estado);

    try {
      await api.post("/endereco", formData);
      alert("Endereço cadastrado com sucesso.");
      navigate("/");
    } catch (error) {
      alert("Aconteceu um erro, verifique os dados.");
    }
  }

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        destinatario: "",
        cep: "",
        endereco: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: ""
      }}
      onSubmit={(values) => {
        createAddress(values);
      }}
    >
      {({ touched, errors, isSubmitting, values, setFieldValue }) => (
        <Form className="form-endereco" encType="multipart/form-data">
          <div className="endereco">
            <b>Endereço de Entrega</b>
          </div>
          <div className="label">
            Nome do Destinatário
            <Field
            type="input"
            id="input-endereco"
            name="destinatario"
            />
            {touched.destinatario && errors.destinatario && (
                <div className="error">{errors.destinatario}</div>
            )}
          </div>
          <div className="label">
            CEP
            <Field
            type="input"
            id="input-endereco"
            name="cep"
            onChange={(e)=>handleSearchCep(e.target.value, setFieldValue)}  
            />
            {touched.cep && errors.cep && (
                <div className="error">{errors.cep}</div>
            )}
          </div>
          <div className="label">
            Endereço
            <Field
            type="input"
            id="input-endereco"
            name="endereco"
            />
            {touched.endereco && errors.endereco && (
                <div className="error">{errors.endereco}</div>
            )}
          </div>
          <div className="label">
            Número
            <Field
            type="input"
            id="input-endereco"
            name="numero"
            />
            {touched.numero && errors.numero && (
                <div className="error">{errors.numero}</div>
            )}
          </div>
          <div className="label">
            Complemento
            <Field
            type="input"
            id="input-endereco"
            name="complemento"
            />
            {touched.complemento && errors.complemento && (
                <div className="error">{errors.complemento}</div>
            )}
          </div>
          <div className="label">
            Bairro
            <Field
            type="input"
            id="input-endereco"
            name="bairro"
            />
            {touched.bairro && errors.bairro && (
                <div className="error">{errors.bairro}</div>
            )}
          </div>
          <div className="label">
            Cidade
            <Field
            type="input"
            id="input-endereco"
            name="cidade"
            />
            {touched.cidade && errors.cidade && (
                <div className="error">{errors.cidade}</div>
            )}
          </div>
          <div className="label">
            Estado
            <Field
            as="select"
            id="input-endereco"
            name="estado"
            >
              <option value="">Selecione um estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>              
            </Field>
            {touched.estado && errors.estado && (
                <div className="error">{errors.estado}</div>
            )}
            <button type="submit" className="botao-endereco">
              <b>Cadastrar</b>
            </button>
          </div>                      
        </Form>
      )}
    </Formik >
  );
}