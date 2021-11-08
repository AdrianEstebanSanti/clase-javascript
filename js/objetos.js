

class Ropa {
    constructor (producto, talle, color, stock, cantCompra){
        this.producto = producto;
        this.talle = talle;
        this.color = color;
        this.stock = stock;
        this.cantidad = cantCompra;
    }


    controlStock() {
        if (this.cantidad > this.stock) {
            alert("La cantidad supera el stock disponible")
        }
    
        else if (this.cantidad < this.stock && this.cantidad > 0) {

            this.stock = this.stock - this.cantidad
            alert(`Se realizó la venta por la cantidad de ${this.cantidad} y el stock actual es ${this.stock} ${this.producto} de talles ${this.talle}, color: ${this.color}`)
        }
        else {
            alert("operacion no válida")
        }

    
    }
    
}



let compra = Number(prompt("Ingrese la cantidad de remeras que desee comprar"));
let talles = prompt ("ingrese su talle de Remera");
let colores = prompt ("ingrese el color");

const objeto1 = new Ropa ("Remeras", talles, colores, 100, compra);
objeto1.controlStock()
