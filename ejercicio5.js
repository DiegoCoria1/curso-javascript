let password = prompt("Ingresa una contraseña:"); //Solicitamos la contraseña
let esValida = true; // Definimos esValida como true para someterlo a las funciones que definan si será o no valida la contraseña 

function longitudMinima(){ //Definimos la funcion longitud para verificar si la contraseña tiene más de 8 caracteres
    const min = 8; //Definimos el valor minimo de caracteres
    if (password.length < min) { //Si el valor es menor a 8, hará la contraseña inválida
        console.log("Debe tener al menos 8 caracteres."); //Imprimimos que debe tener al menos 8 caracteres
        esValida = false; //Vuelve esValida como falso, por lo que nos entregará nuestro alert de contraseña inválida
    }
}

function regexMayuscula(){ //Definimos la función regexMayuscula para controlar si tiene o no mayusculas
    const regexMayuscula = /[A-Z]/; //Definimos las mayusculas de la A a la Z
    if (!regexMayuscula.test(password)) { //Sometemos a test nuestra contraseña con un signo ! para invertir el valor de verdad
        console.log("Debe contener al menos una letra mayúscula."); //Como no tiene una mayuscula nos entrega un console.log que nos indica que le falta a nuestra contraseña
        esValida = false; //Nos hace falso esValido, por lo que muestra la alerta de contraseña inválida
    }
}

function regexNumero(){ //Definimos una función regexNumero para verificar si la contraseña contiene un numero
    const regexNumero = /[0-9]/; //Definimos un recorrido para verificar los numeros (0 a 9)
    if (!regexNumero.test(password)) { //Sometemos a test nuestra contraseña con ! para definir invertir el valor de verdad
        console.log("Debe contener al menos un número."); //Como no tiene un número entregamos el console.log que nos entrega información sobre que nos falta
        esValida = false; //Vuelve esValida como false por lo que nos entrega la alerta de contraseña invalida
    }
    
}

function regexEspecial(){ //Definimos una función regexEspecial para verificar si la contraseña contiene un caracter especial
    const regexEspecial = /[!@#$%^&*()_+\-{}\[\]:;<>.,?~\\]/; //Definimos los caracteres esepciales que pueden tener la contraseña
    if (!regexEspecial.test(password)) { //Sometemos a test la contraseña con el signo ! para invertir el valor de verdad
        console.log("Debe contener al menos un carácter especial."); //Entregamos el console.log para informar que es lo que le falta a la contraseña
        esValida = false; //Vuelve esValida como false para que nos entregue el alert de contraseña invalida
    }
}

//Corremos las funciones definidas previamente
longitudMinima();
regexMayuscula();
regexNumero();
regexEspecial();

//Según las funciones definimos si la contraseña es valida o no, y entregamos un alert que nos indique si la contraseña es correcta
if (esValida) {
    alert("¡La contraseña es válida!");
} else {
    alert("La contraseña no cumple con uno o más requisitos. Revisa la consola para más detalles");
}