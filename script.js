const btn = document.querySelector('#button')

function calcular() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value / 100;
  var resultado = document.querySelector("#resultado");
  var imc = peso / (altura * altura);
  imc = imc.toFixed(2);

  return (resultado.innerHTML = `Seu imc é ${imc}`);
}

btn.addEventListener('click', calcular);