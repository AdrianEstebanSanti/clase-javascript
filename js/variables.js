
//clase 1
/* entrada
let nombreUsuario = prompt("ingresar nombre")

proceso
let saludo = "Hola" + " " + nombreUsuario + " " + "Bienvenido a AS Clothing Store";

 salida
alert (saludo);
console.log(saludo);*/



//clase 2

let promo = prompt("selecciona la promo que quieras comprar, escribe '1' si deseas comprar la promo1 o escribe '2' si quieres la promo2. Si deseas comprar ambas escribe '1 y 2'. Si no quieres ninguna promo escribe '0'");


if (promo == "1") {
    alert ("Gracias por elegir la promo 1, total a pagar: $5000");

 } else if (promo == "2") {
     alert ("Gracias por elegir la promo 2, total a pagar: $8000");

 } else if ((promo == "1 y 2") || (promo == "1 y 2 ") || (promo == "1y2")) {
    alert ("Gracias por elegir la promo 1 y 2, total a pagar: $13000");

 }else if (promo === 0) {
     alert ("Gracias por su visita");

 } else {
     alert ("Datos incorrectos")}
