// Primero definimos una clase Producto que almacene los atributos de nuestros productos
class Producto {
    constructor(nombre, precio) { //Definimos un constructor que nos permita asignar nombre y precio
        this.nombre = nombre; // Asignacion de nombre
        this.precio = precio; // Asignacion de precio
    }
    mostrarDetalles() { //Creamos una función que nos permita mostrar los detalles del producto
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`); //Entregamos por consola "producto" + nombre del producto + "precio" + precio del producto
    }
}

// Creamos nuevas instancias para asignar nombre y precio a los productos a agregados
const cafe = new Producto("Café", 5990);
const pan = new Producto("Pan", 500);
const cerveza = new Producto("Cerveza", 2000);

//Finalmente invocamos las funciones para entregar los detalles de los productos
cafe.mostrarDetalles(); // Entrega los detalles por consola del cafe
pan.mostrarDetalles(); // Entrega los detalles por consola del pan
cerveza.mostrarDetalles(); // Entrega los detalles de la cerveza 