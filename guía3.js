// Primero creamos la clase trabajador que tiene como atributos nombre y sueldo
class Trabajador {
    constructor(nombre, sueldo) { //Definimos el constructor para ambos atributos
        this.nombre = nombre; 
        this.sueldo = sueldo;
    }

    // Definimos una funcion que nos permita imprimir por consola el nombre y el sueldo del trabajador
    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Sueldo: $${this.sueldo}`); //Mostramos Nombre: Instancia1, Sueldo: Instancia2
    }
}

// Definimos la clase Gerente que se extiende desde trabajador para agregar un atributo extra
class Gerente extends Trabajador { // Necesario el uso de extends para que la clase se extienda de otra existente
    constructor(nombre, sueldo, departamento) { //Agregamos el atributo nuevo desde el constructor
        super(nombre, sueldo); // Llamamos al constructor de la clase base
        this.departamento = departamento; // Y agregamos el atributo nuevo "departamento"
    }

    mostrarDetalles() { //Ahora sobreescribimos la funcion existente (gracias JavaScript) con el nuevo atributo a mostrar
        console.log(`Nombre: ${this.nombre}, Sueldo: $${this.sueldo}, Departamento: ${this.departamento}`); //Mostramos nombre, sueldo y departamento del gerente
    }
}

// Creamos nuevas instancias de trabajadores para asignarles nombre y sueldo
const Juan = new Trabajador("Juan", 300000);
const Jorge = new Trabajador("Jorge", 250000);

// Crear nuevas instancias de gerente para asignarles nombre, sueldo y departamento
const Francisco = new Gerente("Francisco", 50000000, "Ventas");
const Luis = new Gerente("Luis", 55000000, "Data Analisis");

// Finalmente mostramos la información mediante las funciones
Juan.mostrarDetalles(); // Nombre: Juan, Sueldo: $300000
Jorge.mostrarDetalles(); // Nombre: Jorge, Sueldo: $250000
Francisco.mostrarDetalles();    // Nombre: Pedro, Sueldo: $50000000, Departamento: Ventas
Luis.mostrarDetalles();    // Nombre: Laura, Sueldo: $55000000, Departamento: Data Analisis