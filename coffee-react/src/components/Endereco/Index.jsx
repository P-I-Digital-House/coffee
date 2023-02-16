import "../Endereco/endereco.css";
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from "react-use-cookie";

const validationSchema = yup.object().shape({
  aname: yup
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
  street: yup
    .string()
    .required('O endereço é obrigatório'),
  anumber: yup
    .number()
    .required('O número é obrigatório'),
  complement: yup
    .string(),
  district: yup
    .string()
    .required('O bairro é obrigatório'),
  city: yup
    .string()
    .required('A cidade é obrigatória'),
  state: yup
    .string(),
});

export function Enderecos() {
  
  function handleSearchCep(cep, setFieldValue) {
    setFieldValue("cep", cep);
    if (cep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(({data}) => {
          setFieldValue("street", data.logradouro);
          setFieldValue("district", data.bairro);
          setFieldValue("city", data.localidade);
          setFieldValue("state", data.uf);
        });
    }
  }

  const navigate = useNavigate();

  const [dados, setDados] = useState({
    aname: "",
    cep: "",
    street: "",
    anumber: "",
    complement: "",
    district: "",
    city: "",
    state: ""
  });

  useEffect(() => {
    buildPage();
  }, []);

  async function buildPage() {
    const user = getCookie("user");
    const token = getCookie("token");
    if(user != "" && user != null){
      const { id } = JSON.parse(user);
      const response = await api.get(`/users/${id}`, {
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

  async function createAddress(values) {
    const user = JSON.parse(getCookie("user"));
    const token = getCookie("token");
    const formData = new FormData();

    formData.append("aname", values.aname);
    formData.append("cep", values.cep);
    formData.append("street", values.street);
    formData.append("anumber", values.anumber);
    formData.append("complement", values.complement);
    formData.append("district", values.district);
    formData.append("city", values.city);
    formData.append("state", values.state);
    formData.append("users_id", user.id);

    try {
      const response = await api.post("/address", formData, {
        headers: { Authorization: `${token}` },
      });
      alert("Endereço cadastrado com sucesso.");
    } catch (error) {
      alert("Endereço não cadastrado.");
    }
  }

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        aname: "",
        cep: "",
        street: "",
        anumber: "",
        complement: "",
        district: "",
        city: "",
        state: ""
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
            name="aname"
            />
            {touched.aname && errors.aname && (
                <div className="error">{errors.aname}</div>
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
            name="street"
            />
            {touched.street && errors.street && (
                <div className="error">{errors.street}</div>
            )}
          </div>
          <div className="label">
            Número
            <Field
            type="input"
            id="input-endereco"
            name="anumber"
            />
            {touched.anumber && errors.anumber && (
                <div className="error">{errors.anumber}</div>
            )}
          </div>
          <div className="label">
            Complemento
            <Field
            type="input"
            id="input-endereco"
            name="complement"
            />
            {touched.complement && errors.complement && (
                <div className="error">{errors.complement}</div>
            )}
          </div>
          <div className="label">
            Bairro
            <Field
            type="input"
            id="input-endereco"
            name="district"
            />
            {touched.district && errors.district && (
                <div className="error">{errors.district}</div>
            )}
          </div>
          <div className="label">
            Cidade
            <Field
            type="input"
            id="input-endereco"
            name="city"
            />
            {touched.city && errors.city && (
                <div className="error">{errors.city}</div>
            )}
          </div>
          <div className="label">
            Estado
            <Field
            as="select"
            id="input-endereco"
            name="state"
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
            {touched.state && errors.state && (
                <div className="error">{errors.state}</div>
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