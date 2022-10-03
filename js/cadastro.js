window.onload = function () {
  const cpf = document.getElementById("cpf");
  const nome = document.getElementById("nomeCompleto");
  const telefone = document.getElementById("telefone");
  const email = document.getElementById("email");
  const numero = document.getElementById("numero");
  const senha = document.getElementById("senha");
  const confirmaSenha = document.getElementById("confirmaSenha");

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

  cpf.addEventListener("change", () => {
    if (cpf.value.length != 11) {
      setError(cpf);
    } else {
      removeError(cpf);
    }
  });

  nome.addEventListener("change", () => {
    if (nome.value.length < 3 || nome.value.length > 30) {
      setError(nome);
    } else {
      removeError(nome);
    }
  });

  telefone.addEventListener("change", () => {
    if (!telCelular || !telResidencial) {
      setError(telefone);
    } else {
      removeError(telefone);
    }
  });

  email.addEventListener("change", () => {
    if (!verificarEmail) {
      setError(email);
    } else {
      removeError(email);
    }
  });

  cep.addEventListener("change", () => {
    if (!validarCep) {
      setError(cep);
    } else {
      removeError(cep);
    }
  });

  numero.addEventListener("change", () => {
    if (numero.value < 0 || numero.value.length > 5) {
      setError(numero);
    } else {
      removeError(numero);
    }
  });

  senha.addEventListener("change", () => {
    if (!verificarSenha) {
      setError(senha);
    } else {
      removeError(senha);
    }
  });

  confirmaSenha.addEventListener("change", () => {
    if (senha != confirmaSenha) {
      setError(confirmaSenha);
    } else {
      removeError(confirmaSenha);
    }
  });

};

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

// <!-- onsubmit="enviar(event)" -->