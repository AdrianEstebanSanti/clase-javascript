
// Estructura Clase
class Indumentaria {
    constructor (producto, talle, color, stock){
        this.producto = producto;
        this.talle = talle;
        this.color = color;
        this.stock = Number (stock);
        
    }
    
}

// Array donde se almacenan los objetos
const prendasDeVestir = [];

// objetos
prendasDeVestir.push (new Indumentaria ("Remera", "M", "Negro", 100));
prendasDeVestir.push (new Indumentaria ("Pantalón jean", "40", "Azul", 50));
prendasDeVestir.push (new Indumentaria ("Camisa", "L", "colores varios", 70));
prendasDeVestir.push (new Indumentaria ("Zapatos cuero", "40", "Marrón", 35));


const mostrarPrendas = (prendasDeVestir) => {
    let texto = "";
    for (const prendas of prendasDeVestir) {
        texto += `Producto: ${prendas.producto}\nTalle: ${prendas.talle}\nColor: ${prendas.color}\nStock: ${prendas.stock}\n\n`
    }
   
    return texto
    
}

// metodo sort ordenando el stock de menor a mayor
prendasDeVestir.sort((a, b) => {
    return a.stock - b.stock
});

// Menú
let opcion;
do {
    opcion = Number(prompt(`ingrese una opcion:
    1- Mostrar Productos
    2- Salir`));

    switch (opcion) {
        case 1: 
            const Datos = mostrarPrendas(prendasDeVestir);
            alert (Datos);
            break;

        case 2: 
            alert ("Muchas Gracias! vuelva prontosss");
            break; 

    
        default: 
            alert("opción incorrecta");
            break;

    }

} while (opcion !== 2); 


