
//practica for
/*const magicNumber = 45

for (let i = 1; i < 3; i++) {
    const numberUser = Number (prompt("ingresa un numero"));
    if (magicNumber === 45); {
        alert ("Ganaste");
        break;
    }
    else {
        alert ("incorrecto");
    }
} */


const numeroMagico = 43;
let numeroUsuario;
let intentos = 3;

do {
    numeroUsuario = Number(prompt ("Adiviná el número secreto y participá de increibles premios! Solo tenés 3 intentos. Te dejamos una pista: El número corresponde al calzado de un famoso futbolista. Si deseas salir escribe una letra cualquiera"));

    if (isNaN(numeroUsuario)) {
        alert("¡Muchas gracias!");
        break;
    }
    if (numeroUsuario < 0 || numeroUsuario > 100 ) {
        alert ("Debes ingresar un número entre el 0 y el 100");
        continue;
    }

    if (numeroUsuario < numeroMagico) {
        alert ("¡Número incorrecto! prueba nuevamente. Le dicen la Pulga");
        intentos--;
    } else if (numeroUsuario > numeroMagico) {
        alert ("¡Numero incorrecto! prueba nuevamente. Le dicen la pulga");
        intentos--;
    } else {
        alert ("¡Felicitaciones era Lio Messi!.  estás participando del sorteo de zapatillas y prendas de vestir");
    }

}  while (numeroUsuario !== numeroMagico && intentos > 0) 
    