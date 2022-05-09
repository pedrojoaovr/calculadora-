let button = document.getElementById("button");
let resultado = document.getElementById("resultado");
let select = document.getElementById("select");
function eventhandle() {
  let valor1 = parseFloat(document.getElementById("input1").value);
  let valor2 = parseFloat(document.getElementById("input2").value);
  let total = 0;
  switch (select.options[select.selectedIndex].value) {
    case "multiplicacao":
      total = valor1 * valor2;
      break;
    case "adicao":
      total = valor1 + valor2;
      break;
    case "subtracao":
      total = valor1 - valor2;
      break;
    case "divisao":
      total = valor1 / valor2;
      break;
  }
  resultado.innerText = total;
}
button.addEventListener("click", eventhandle);
