//numerps alamacenados en la variablr llamada numero
var numero = [3, 5, 7, 5.6, 8];
//acceder a cada valor iniciando en la posicion 0 hasta la posicion 4 e ir avanzando de 1 en 1
for (i = 0; i < 5; i++)
  //mandamos llamar la funcion entero
  entero(i);

function entero(i) {
  //si el residuo del numero es = 0
  if (numero[i] % 1 == 0) {
    //se imprime
    console.log(numero[i] + "-" + "Es  entero");
  } else {
    //de lo contrario , se imprime
    console.log(numero[i] + "-" + "No es entero");
  }
}
