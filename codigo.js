let nombreProducto1 = "Brownie";
let precioProducto1 = 2000;
let stockProducto1 = 10;

let nombreProducto2 = "Cheescake";
let precioProducto2 = 3000;
let stockProducto2 = 5;

let nombreProducto3 = "Rogel";
let precioProducto3 = 2200;
let stockProducto3 = 3;

alert("Nuestras tortas son:" + "\n" + nombreProducto1 + "\n" + nombreProducto2 + "\n" + nombreProducto3)


let cantidadComprada;
let total = 0;

let cantidadProductos = parseInt(prompt("Ingrse la cantidad de productos a COMPRAR"));

for (i = 0; i < cantidadProductos; i++) {

    let productoAcomprar = prompt("¿Que producto quiere comprar?");


    if ((productoAcomprar == nombreProducto1) || (productoAcomprar == "brownie")) {
        cantidadComprada = parseInt(prompt("ingrese la cantidad a comprar:"));

        if (stockProducto1 >= cantidadComprada) {
            stockProducto1 = stockProducto1 - cantidadComprada;
            total += precioProducto1 * cantidadComprada;
            console.log(nombreProducto1 + "\nSTOCK: " + stockProducto1);
        } else { alert("no tenemos suficiente stock de " + nombreProducto1); }



    } else
    if ((productoAcomprar == nombreProducto2) || (productoAcomprar == "cheescake")) {
        cantidadComprada = parseInt(prompt("¿Cuantas unidades desea comprar?:"));

        if (stockProducto2 >= cantidadComprada) {
            stockProducto2 = stockProducto2 - cantidadComprada;
            total += precioProducto2 * cantidadComprada;
            console.log(nombreProducto2 + "\nSTOCK: " + stockProducto2);
        } else { alert("no tenemos suficiente stock."); }

    } else if ((productoAcomprar == nombreProducto3) || (productoAcomprar == "rogel")) {
        cantidadComprada = parseInt(prompt("ingrese la cantidad a comprar:"));

        if (stockProducto3 >= cantidadComprada) {
            stockProducto3 = stockProducto3 - cantidadComprada;
            total += precioProducto3 * cantidadComprada;
            console.log(nombreProducto3 + "\nSTOCK: " + stockProducto3);
        } else { alert("no tenemos suficiente stock."); }

    } else {
        alert("No tenemos ese producto");
    }
};
alert("Usted tiene que pagar $" + total);