// sizes
// all cases

let numeroI = 0;
let resultadoI = 0;
let operacionI = 0;
operacion.addEventListener("change", calcular, false);
function calcular() {
  operacionI = operacion.value;

  switch (operacionI) {
    case "1":
      numeroI = parseInt(data.value);
      let binario = numeroI.toString(2);
      resultado.value = binario;
      console.log(resultado.value);
      break;
    case "2":
      numeroI = parseInt(data.value);
      let octal = numeroI.toString(8);
      resultado.value = octal;
      console.log(resultado.value);
      break;
    case "3":
      numeroI = parseInt(data.value);
      let hexa = numeroI.toString(16);
      resultado.value = hexa;
      console.log(resultado.value);
      break;
    case "4":
      numeroI = parseInt(data.value, 2);
      resultado.value = numeroI;
      console.log(resultado.value);
      break;
    case "5":
      numeroI = parseInt(data.value, 8);
      resultado.value = numeroI;
      console.log(resultado.value);
      break;
    case "6":
      numeroI = parseInt(data.value, 16);
      resultado.value = numeroI;
      console.log(resultado.value);
      break;
  }
}
