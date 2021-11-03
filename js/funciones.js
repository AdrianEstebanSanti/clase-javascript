
// cobrar
const cobrar = (precio) => {
    let pago = '';

    while (precio > '' && pago != precio) {
        pago = Number(prompt(`ingrese el precio final ${precio} para confirmar la compra`));
    }
    alert ("Gracias por su compra!!");
}


// preparar pedido 

const multiplicar = (a, b, c) => {
    return (a * b) + c;
}

function prepararPedido (ropa, cantidad) {
    let mensaje = '';
    let precio = '';
    let envio = 500;

    switch (ropa){
        case 1:
            mensaje = "Ud. eligió pantalón jean";
            precio = 4000;
            envio = 500;
            precio = multiplicar (precio, cantidad, envio);
            break;

        case 2:
            mensaje = "Ud. eligió pantalón jean";
            precio = 2000;
            envio = 500;
            precio = multiplicar (precio, cantidad, envio);
            break;
            
        case 3:
            mensaje = "Ud. eligió pantalón jean";
            precio = 9500;
            envio = 500;
            precio = multiplicar (precio, cantidad, envio);
            break;
            
        case 4:
            mensaje = "Ud. eligió pantalón jean";
            precio = 1500;
            envio = 500;
            precio = multiplicar (precio, cantidad, envio);
            break;
        default:
            mensaje = 'ingrese un numero del 1 al 4';
            break;
    }

    entregarPedido (mensaje, precio, envio);

} 



// iniciar pedido
const iniciarPedido = () => {
    const ropa = Number(prompt(`Bienvenidos a Clothing AS, que desea comprar

    1- pantalón jean, 4000 pesos
    2- Camisa, 2000 pesos
    3- Zapatillas, 9500
    4- Remera, 1500 pesos`));

    const cantidad = Number(prompt('ingrese la cantidad de unidades que desee comprar'));

    prepararPedido(ropa, cantidad);
    
}; 

iniciarPedido ()


// entregar pedido
function entregarPedido (mensaje, precio) {
    alert (`muchas gracias por su compra, ${mensaje}, el total de la compra es ${precio}, con el envio incluido`);
    cobrar(precio);

}


