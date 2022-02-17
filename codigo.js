class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    stockActual(cantidadComprada) {
        this.stock -= cantidadComprada;
        console.log(this.nombre + "\nSTOCK: " + this.stock);
    }
}

const brownie = new Producto("brownie", 2000, 10);
const cheescake = new Producto("cheescake", 3000, 5);
const rogel = new Producto("rogel", 2200, 3);
const lemonpie = new Producto("lemonpie", 1500, 6);

alert("Nuestras tortas son:" + "\n" + brownie.nombre + "\n" + cheescake.nombre + "\n" + rogel.nombre + "\n" + lemonpie.nombre);

let cantidadComprada;
let total = 0;

function stockInsuficiente(stock) {
    alert("no tenemos suficiente stock de " + stock);
}

function compra(producto) {
    cantidadComprada = parseInt(prompt("Cuantos quiere:"));

    if (producto.stock >= cantidadComprada) {

        producto.stockActual(cantidadComprada);
        total += producto.precio * cantidadComprada;

    } else {
        stockInsuficiente(stock);
    }
}
for (let i = 0; i = isNaN(cantidadComprada); i++) {
    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a COMPRAR"));

    for (let i = 0; i < cantidadProductos; i++) {
        let productoAcomprar = prompt("¿Que producto quiere comprar?");
        productoAcomprar = productoAcomprar.toLowerCase();
        if (productoAcomprar == brownie.nombre) {
            compra(brownie);
        } else
        if (productoAcomprar == cheescake.nombre) {
            compra(cheescake);
        } else if (productoAcomprar == rogel.nombre) {
            compra(rogel);
        } else if (productoAcomprar == lemonpie.nombre) {
            compra(lemonpie);
        } else {
            alert("No tenemos ese producto");
        }
    }
}
alert("Usted tiene que pagar $" + total);