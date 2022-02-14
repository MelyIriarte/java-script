let brownie = "Brownie";
let browniePrecio = 2000;
let brownieStock = 10;

let cheescake = "Cheescake";
let cheescakePrecio = 3000;
let cheescakeStock = 5;

let rogel = "Rogel";
let rogelPrecio = 2200;
let rogelStock = 3;

let lemonpie = "Lemonpie";
let lemonpiePrecio = 1500;
let lemonpieStock = 6;

alert("Nuestras tortas son:" + "\n" + brownie + "\n" + cheescake + "\n" + rogel + "\n" + lemonpie);

let cantidadComprada;
let total = 0;

function stockInsuficiente(stock) {
    alert("no tenemos suficiente stock de " + stock);
}

function compra(stock, precio, producto) {
    cantidadComprada = parseInt(prompt("Cuantos quiere:"));

    if (stock >= cantidadComprada) {
        stock = stock - cantidadComprada;
        total += precio * cantidadComprada;
        console.log(producto + "\nSTOCK: " + stock);
    } else {
        stockInsuficiente(stock);
    }
}

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a COMPRAR"));

for (let i = 0; i < cantidadProductos; i++) {

    let productoAcomprar = prompt("¿Que producto quiere comprar?");

    if ((productoAcomprar == brownie) || (productoAcomprar == "brownie")) {
        compra(brownieStock, browniePrecio, brownie);
    } else if ((productoAcomprar == cheescake) || (productoAcomprar == "cheescake")) {
        compra(cheescakeStock, cheescakePrecio, cheescake);
    } else if ((productoAcomprar == rogel) || (productoAcomprar == "rogel")) {
        compra(rogelStock, rogelPrecio, rogel);
    } else if ((productoAcomprar == lemonpie) || (productoAcomprar == "lemonpie")) {
        compra(lemonpieStock, lemonpiePrecio, lemonpie);
    } else {
        alert("No tenemos ese producto");
    }
};
alert("Usted tiene que pagar $" + total);