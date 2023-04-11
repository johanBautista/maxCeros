const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Vanilla js</h1>`;

const inputNumero = document.getElementById("numero");
const botonCalcular = document.getElementById("calcular");
const resultadoElemento = document.getElementById("resultado");

botonCalcular.addEventListener("click", function () {
  const numero = parseInt(inputNumero.value);
  let binario = numero.toString(2);
  let maxCeros = 0;
  let cerosActuales = 0;
  let franqueado = false;

  for (let i = 0; i < binario.length; i++) {
    if (binario[i] === "1") {
      if (franqueado === true) {
        maxCeros = Math.max(maxCeros, cerosActuales);
      } else {
        franqueado = true;
      }
      cerosActuales = 0;
    } else {
      cerosActuales++;
    }
  }
  return (resultadoElemento.textContent = `Para el número: ${numero} y su binario: ${binario}, el máximo de ceros consecutivos es: ${maxCeros}`);
});
