function validar() {
  const cpf = document.getElementById("cpf");
  const nome = document.getElementById("nomeCompleto");
  const telefone = document.getElementById("telefone");
  const email = document.getElementById("email");
  const endereco = document.getElementById("endereco");
  const numero = document.getElementById("numero");
  const cep = document.getElementById("cep");
  const cidade = document.getElementById("cidade");
  const estado = document.getElementById("estado");
  const senha = document.getElementById("senha");
  const confirmaSenha = document.getElementById("confirmaSenha");

  /*::::::::::::::::::::::::::::EXPRESSÕES REGULARES QUE VALIDAM OS CAMPOS DE: E-MAIL - SENHA - CEP - TELEFONE CELULAR E RESIDENCIAL::::::::::::::::::::::::::::*/

  const verificarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email.value
  );
  const verificarSenha =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(
      senha.value
    );
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
  if (cpf.value.length != 11) {
    setError(cpf);
  } else {
    removeError(cpf);
  }

  if (nome.value.length < 3 || nome.value.length > 30) {
    setError(nome);
  } else {
    removeError(nome);
  }

  if (!telCelular || !telResidencial) {
    setError(telefone);
  } else {
    removeError(telefone);
  }

  if (!verificarEmail) {
    setError(email);
  } else {
    removeError(email);
  }

  if (endereco.value.length < 3 || endereco.value.length > 30) {
    setError(endereco);
  } else {
    removeError(endereco);
  }

  if (numero.value < 0 || numero.value.length > 5) {
    setError(numero);
  } else {
    removeError(numero);
  }

  if (!validarCep) {
    setError(cep);
  } else {
    removeError(cep);
  }

  if (
    cidade.value.length < 4 ||
    cidade.value.length > 30 ||
    cidade.value.isNumber
  ) {
    setError(cidade);
  } else {
    removeError(cidade);
  }

  if (estado.value.length == 2 || estado.value.isNumber) {
    setError(estado);
  } else {
    removeError(estado);
  }

  if (!verificarSenha) {
    setError(senha);
  } else {
    removeError(senha);
  }

  if (senha != confirmaSenha) {
    setError(confirmaSenha);
  } else {
    removeError(confirmaSenha);
  }
}

/*::::::::::::::::::::::::::::SE AS INFORMAÇÕES INSERIDAS ESTIVEREM CORRETAS, ENVIA O FORMULÁRIO::::::::::::::::::::::::::::*/
function enviar(e) {
  e.preventDefault();
  if (!validar()) {
    alert("Verifique se as informações inseridas estão corretas!");
    return;
  } else {
    alert("Cadastro realizado com sucesso!");
  }
}
