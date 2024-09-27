//    1. Desarrollar un contador de caracteres, solicitando al usuario que ingrese una palabra u
//    oración, para luego contar cuántos caracteres tiene la palabra ingresada por el usuario.
//    Mostrar la oración ingresada y el número de caracteres en el navegador. 




let frase = prompt('Ingrese una palabra o frase'); //Solicitamos la palabra o frase mediante "prompt"
let caracteres = frase.length; //Definimos caracteres como la función que se encargará de contar la longitud de la cadena
console.log("La palabra o frase es: " + frase +  ". Y la cantidad de caracteres es: " + caracteres); //Imprimimos por consola la cantidad de caracteres y la frase


