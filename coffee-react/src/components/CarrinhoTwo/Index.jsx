import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { XCircle } from "phosphor-react";
import "../CarrinhoTwo/carrinhoTwo.css"
import { getCookie } from "react-use-cookie";
import api from "../../../api";
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";


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

  const validationSchema2 = yup.object().shape({
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

export function CarrinhoTwo() {
    const {cart, handleAddItemToCart, handleRemoveItemFromCart, subtotalCart, totalQuantityCart,  handleFrete, handleChangeFrete, handleCupom, handleChangeCupom, isOpenFrete, listFrete, cupom, desconto,radioFrete, errorCupom, disabledBtnCupom, page, setPage} = useContext(CartContext)

    const navigate = useNavigate()

    const [address, setAddress]= useState({
        aname: "",
        cep: "",
        street: "",
        anumber: "",
        complement: "",
        district: "",
        city: "",
        state: ""
      })
    const [payment, setPayment] = useState({
        cardNumber: "",
        cardName: "",
        securityCode: "",
        validity: ""
        
      })
    const [idAdress, setIdAddress] = useState(0)

    useEffect(() => {
        buildPage();
      }, []);
    
      async function buildPage() {
        const user = getCookie("user");
        const token = getCookie("token");
        if(user != "" && user != null){
          const { id } = JSON.parse(user);
          const response = await api.get(`/address/userId/${id}`, {
            headers: { Authorization: `${token}` },
          });
          const response2= await api.get(`/payment/userId/${id}`, {
            headers: { Authorization: `${token}` },
          });
        try {
        response.data ? setAddress(response.data) : "";
          setIdAddress(response.data.id)
          response2.data ? setPayment(response2.data) : "";
          
        } catch (error) {
        }
        }else{
          alert('Você nao está logado')
          navigate("/login")
        }    
      }
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
          }).then((response) => setIdAddress(response.data.id))
          alert("Endereço cadastrado com sucesso.");
        } catch (error) {
          alert("Endereço não cadastrado.");
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

      async function createOrder(){
        const user = JSON.parse(getCookie("user"));
        const token = getCookie("token");
        const formData = new FormData();
    
        formData.append("odescription", "");
        formData.append("totalPrice", (parseFloat(subtotalCart) + parseFloat(radioFrete) - parseFloat(desconto)).toFixed(2) );
        formData.append("dt_create", moment().format("YYYY-MM-DD"));
        formData.append("delivery_date", moment().add(5, 'days').format("YYYY-MM-DD"));
        formData.append("users_id", user.id);
        formData.append("address_id", idAdress);
    
        try {
          const response = await api.post("/order", formData, {
            headers: { Authorization: `${token}` },
          }).then((response) => {
            cart.map((item) =>{
                createProductOrder(response.data.id, item.quantity, item.price, item.id)
            })
            });
          alert("Compra realizada com sucesso.");
          navigate("/")
        } catch (error) {
          alert("Compra não efetuada.");
        }
      }
      async function createProductOrder(orderId, quantity, price, productId){
        const user = JSON.parse(getCookie("user"));
        const token = getCookie("token");
        const formData = new FormData();
    
        formData.append("totalPrice", quantity*price);
        formData.append("unitPrice", price);
        formData.append("quantity", quantity);
        formData.append("orders_id", orderId);
        formData.append("product_id", productId);
    
        try {
          const response = await api.post("/productOrder", formData, {
            headers: { Authorization: `${token}` },
          });
          console.log("Compra realizada com sucesso. ID "+productId);
        } catch (error) {
          alert("Compra não efetuada.");
        }
      }

    return (
    <div className="shoppingCart carrinhoTwo">
        <div className="title"></div>
        <h1>CARRINHO</h1>

        <div className="shipping">
        <Formik
      validationSchema={validationSchema2}
      enableReinitialize="true"
      initialValues={{
        aname: address.aname,
        cep: address.cep,
        street: address.street,
        anumber: address.anumber,
        complement: address.complement,
        district: address.district,
        city: address.city,
        state: address.state
      }}
      onSubmit={(values) => {
        createAddress(values)
      }}
    >
        {({ touched, errors, isSubmitting, values, setFieldValue }) => (
            <Form className="cartAddress" encType="multipart/form-data">
            <h2>1. Entrega</h2>
            <div className="label">
              Nome do Destinatário
              <Field
              type="input"
              className="inputInfo"
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
              className="inputInfo"
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
              className="inputInfo"
              name="street"
              />
              {touched.street && errors.street && (
                  <div className="error">{errors.street}</div>
              )}
            </div>
            <div className="box-little">
                <div className="label">
                Número
                <Field
                type="input"
                className="inputInfo"
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
                className="inputInfo"
                name="complement"
                />
                {touched.complement && errors.complement && (
                    <div className="error">{errors.complement}</div>
                )}
                </div>
            </div>
            
            <div className="label">
              Bairro
              <Field
              type="input"
              className="inputInfo"
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
              className="inputInfo"
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
              className="inputInfo"
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
            </div>
            <button type="submit" className="btnPayments">
              <b>Atualizar</b>
            </button>                      
          </Form>
      )}
    </Formik>
    <Formik
      validationSchema={validationSchema}
      enableReinitialize="true"
      initialValues={{
        cardNumber: payment.cardNumber,
        cardName: payment.cardName,
        securityCode: payment.securityCode,
        validity: payment.validity
      }}
      onSubmit={(values) => {
        createPayment(values);
      }}
    >
      {({ touched, errors, isSubmitting, values }) => (
        <Form className="cartPayment" encType="multipart/form-data">
                <h2>2. Pagamento</h2>
                <div className="label">
            Número do Cartão
            <Field type="input" name="cardNumber" className="inputInfo" />
            {touched.cardNumber && errors.cardNumber && (
                <div className="error">{errors.cardNumber}</div>
            )}
          </div>
          <div className="label">
            Nome do Titular
            <Field type="input" className="inputInfo" name="cardName" />
            {touched.cardName && errors.cardName && (
                <div className="error">{errors.cardName}</div>
            )}
          </div>
          <div className="label">
            Código de Segurança
            <Field type="input" className="inputInfo" name="securityCode" />
            {touched.securityCode && errors.securityCode && (
                <div className="error">{errors.securityCode}</div>
            )}
          </div>
          <div className="label">
            Validade
            <Field type="input" className="inputInfo" name="validity" />
            {touched.validity && errors.validity && (
                <div className="error">{errors.validity}</div>
            )}
          </div>
          <button type="submit" className="btnPayments">
              <b>Atualizar</b>
            </button>
        </Form>
      )}
    </Formik>
            <div className="shippingTotal">
            <table>
            <h2>{totalQuantityCart} itens</h2>
                <tr>
                    <th className="headerTotal">Subtotal</th>
                    <th>R$ {subtotalCart.toFixed(2)}</th>
                </tr>
                <tr>
                    <th className="headerTotal">Frete</th>
                    <th>R$ {radioFrete.toFixed(2)}</th>
                </tr>
                <tr>
                    <th className="headerTotal">Desconto</th>
                    <th style={{ color: '#c14d13' }}>- R$ {desconto.toFixed(2)}</th>
                </tr>
                <tr className="tableTotal">
                    <th className="headerTotal">TOTAL</th>
                    <th>R$ {(parseFloat(subtotalCart) + parseFloat(radioFrete) - parseFloat(desconto)).toFixed(2)}</th>
                </tr>
            </table>
            <div className="btnTwo">
            <a>
                <button className="btnPayments" onClick={() => {
                    setPage(page -1);
                    // document.getElementById("shoppingCart").focus();
                }}>
                    VOLTAR
                </button>
            </a><a>
                <button className="btnPayments" onClick={() => {
                    if(radioFrete != 0){
                        if(totalQuantityCart == 0){
                            alert("Carrinho vazio")
                        }
                        else{
                            createOrder();
                        }
                    }else{
                        alert('Escolha um frete')
                    }
                }}>
                    FINALIZAR COMPRA
                </button>
            </a>
            
            </div>
        </div>
        </div>
        

        

    </div>)
}