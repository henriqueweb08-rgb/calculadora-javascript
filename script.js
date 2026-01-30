let tela = document.getElementById("tela");

function adicionar(valor) {
  tela.value = tela.value + valor;
}

function limpar() {
  tela.value = "";
}

function calcular() {
  let resultado = eval(tela.value);
  tela.value = resultado;
}
