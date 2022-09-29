const form = document.getElementById("form-cadastro");
const camposObrigatorios = document.querySelectorAll(".required");
const spanForm = document.querySelectorAll(".span-form");
const verificarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
  camposObrigatorios[1].value
);

function setError(index) {
  camposObrigatorios[index].style.border = "1px solid red";
  spanForm[index].style.display = "block";
}

function removeError(index) {
  camposObrigatorios[index].style.border = "";
  spanForm[index].style.display = "none";
}

function validarCampos() {
  //nome = 0
  if (
    camposObrigatorios[0].value.length < 3 ||
    camposObrigatorios[0].valeu.length > 30
  ) {
    setError(0);
  } else {
    removeError(0);
  }
}

//email = 1
function validarEmail() {
  if (!verificarEmail) {
    setError(1);
  } else {
    removeError(1);
  }
}

//dataNascimento = 2
// function validaDataNascimento() {
//   if (camposObrigatorios[2]) {
//   }
// }

//telefone  = 3
function validaTelefone() {
  if (
    !camposObrigatorios[3].valeu.isNumber ||
    camposObrigatorios[3].value < 0 ||
    !camposObrigatorios[3].value.length == 11
  ) {
    setError(3);
  } else {
    removeError(3);
  }
}
