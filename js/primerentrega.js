

    
// Objeto clase de los productos en venta
class Producto {
    constructor (producto, precio, stock){
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    } 
}

const pantalónJean = new Producto ("Pantalon jean", 4000, 50);
const camisa = new Producto ("Camisa", 2000, 100);
const zapatilla = new Producto ("Zapatilla", 9500, 40);
const remera = new Producto ("Remeras", 1500, 200);

console.log (pantalónJean, camisa, zapatilla, remera)



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
            mensaje = "Ud. eligió Camisa";
            precio = 2000;
            envio = 500;
            precio = multiplicar (precio, cantidad, envio);
            break;
            
        case 3:
            mensaje = "Ud. eligió Zapatilla";
            precio = 9500;
            envio = 500;
            precio = multiplicar (precio, cantidad, envio);
            break;
            
        case 4:
            mensaje = "Ud. eligió Remera";
            precio = 1500;
            envio = 500;
            precio = multiplicar (precio, cantidad, envio);
            break;
        default:
            mensaje = 'ingrese un numero del 1 al 4';
            break;
    }

    entregarPedido (mensaje, precio, envio,);
    

} 



// iniciar pedido
const iniciarPedido = () => {
    const ropa = Number(prompt(`Bienvenidos a Clothing AS, que desea comprar

    1- pantalón jean, 4000 pesos
    2- Camisa, 2000 pesos
    3- Zapatillas, 9500
    4- Remera, 1500 pesos
    5- Salir`));

    if (isNaN(ropa) || ropa < 0 || ropa > 5 ) {
        alert("Debes ingresar un número entre el 1 y el 5");
        iniciarPedido(); 
    }
    else if (ropa == 5) {
        alert('Muchas Gracias!'); 
    }
    else {
    const cantidad = Number(prompt('ingrese la cantidad de unidades que desee comprar'));

    prepararPedido(ropa, cantidad);
    }
    
    
}; 

iniciarPedido ()


// entregar pedido
function entregarPedido (mensaje, precio,) {
    alert (`muchas gracias por su compra, ${mensaje}, el total de la compra es ${precio}, con el envio incluido`);
    cobrar(precio);

    const compraJS = JSON.stringify(entregarPedido);
    localStorage.setItem("compra", compraJS);

    

}

const compraLS = localStorage.getItem("compra");
    const miscompras = JSON.parse(compraLS);
    console.log (miscompras)


