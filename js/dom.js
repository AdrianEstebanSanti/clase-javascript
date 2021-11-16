// Estructura Clase
class Indumentaria {
    constructor (producto, talle, color, precio){
        this.producto = producto;
        this.talle = talle;
        this.color = color;
        this.precio = Number (precio);
        
    }
    
}

// Array donde se almacenan los objetos
const prendasDeVestir = [];

// objetos
prendasDeVestir.push (new Indumentaria ("Remera", "M", "Negro", 1000));
prendasDeVestir.push (new Indumentaria ("Pantalón jean", "40", "Azul", 3000));
prendasDeVestir.push (new Indumentaria ("Camisa", "L", "colores varios", 1500));
prendasDeVestir.push (new Indumentaria ("Zapatos cuero", "40", "Marrón", 8000));


let productosIndex = document.querySelector("#productos");

for (let i = 0; i < prendasDeVestir.length; i++){

    productosIndex.innerHTML += ` 
    <div>
        <h3>${prendasDeVestir[i].producto}</h3>
        <h4>${prendasDeVestir[i].talle}</h4>
        <h4>${prendasDeVestir[i].color}</h4>
        <h4>$${prendasDeVestir[i].precio}</h4>
        <button>Comprar</button>
    </div> <br><br>`
}