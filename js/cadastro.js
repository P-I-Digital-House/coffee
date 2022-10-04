const cpf = document.getElementById("cpf");
const nome = document.getElementById("nomeCompleto");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const numero = document.getElementById("numero");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

/*::::::::::::::::::::::::::::CONSOME A API PELO CEP E ADICIONA OS DEMAIS DADOS DO LOCAL::::::::::::::::::::::::::::*/
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

cep.addEventListener("blur", (event) => {
  const cepInput = event.target.value;

  fetch(`https://brasilapi.com.br/api/cep/v2/${cepInput}`)
    .then((response) => response.json())
    .then((data) => {
      rua.value = data.street;
      bairro.value = data.neighborhood;
      cidade.value = data.city;
      estado.value = data.state;
    });
});

/*::::::::::::::::::::::::::::EXPRESSÕES REGULARES QUE VALIDAM OS CAMPOS DE: E-MAIL - SENHA - CEP - TELEFONE CELULAR E RESIDENCIAL::::::::::::::::::::::::::::*/

const verificarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const verificarSenha =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
const validarCep = /^[0-9]{8}$/;
const telCelular = /^[0-9]{11}$/;
const telResidencial = /^[0-9]{10}$/;

/*::::::::::::::::::::::::::::SE O CAMPO INSERIDO NÃO FOR VÁLIDO DESTACA::::::::::::::::::::::::::::*/

function setError(campo) {
  campo.classList.add("input-error");
  campo.nextSibling.nextElementSibling.style.display = "block";
}

/*::::::::::::::::::::::::::::SE AS INFORMAÇÕES ESTIVEREM CORRETAS REMOVE O DESTAQUE::::::::::::::::::::::::::::*/

function removeError(campo) {
  campo.classList.remove("input-error");
  campo.nextSibling.nextElementSibling.style.display = "none";
}

/*::::::::::::::::::::::::::::VERIFICAÇÕES DOS CAMPOS::::::::::::::::::::::::::::*/

cpf.addEventListener("change", (event) => {
  if (event.target.value.length != 11) {
    setError(cpf);
  } else {
    removeError(cpf);
  }
});

nome.addEventListener("change", (event) => {
  if (event.target.value.length < 3 || event.target.value.length > 30) {
    setError(nome);
  } else {
    removeError(nome);
  }
});

telefone.addEventListener("change", (event) => {
  console.log(telCelular.test(event.target.value));
  if (
    telCelular.test(event.target.value) ||
    telResidencial.test(event.target.value)
  ) {
    removeError(telefone);
  } else {
    setError(telefone);
  }
});

email.addEventListener("change", (event) => {
  if (!verificarEmail.test(event.target.value)) {
    setError(email);
  } else {
    removeError(email);
  }
});

cep.addEventListener("change", (event) => {
  if (!validarCep.test(event.target.value)) {
    setError(cep);
  } else {
    removeError(cep);
  }
});

numero.addEventListener("change", (event) => {
  if (event.target.value < 0 || event.target.value.length > 5) {
    setError(numero);
  } else {
    removeError(numero);
  }
});

senha.addEventListener("change", (event) => {
  if (!verificarSenha.test(event.target.value)) {
    setError(senha);
  } else {
    removeError(senha);
  }
});

confirmarSenha.addEventListener("change", (event) => {
  if (event.target.value != senha.value) {
    setError(confirmarSenha);
  } else {
    removeError(confirmarSenha);
  }
});

/*::::::::::::::::::::::::::::SE AS INFORMAÇÕES INSERIDAS ESTIVEREM CORRETAS, ENVIA O FORMULÁRIO::::::::::::::::::::::::::::*/
function enviar(e) {
  e.preventDefault();

  const inputs = Array.from(document.querySelectorAll("input"));
  const emptyFields = inputs.filter((input) => !input.value);
  const inputsError = document.querySelectorAll("input.input-error");

  if (emptyFields.length > 0 || inputsError.length > 0) {
    alert("Verifique se as informações inseridas estão corretas!");
    return;
  } else {
    alert("Cadastro realizado com sucesso!");
  }
}
