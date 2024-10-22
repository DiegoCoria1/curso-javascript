//Solicitamos al usuario ingresar la figura a la cuál querrá calcular su área
let figura = prompt("Seleccione la figura para calcular su área; 1 = circulo; 2 = triangulo; 3 = rectangulo","")

//Creamos 3 instancias que nos permiten elegir qué función queremos invocar
if  (figura ==  1) { // 1 para circulo
    new circulo // Invocamos la funcion circulo
}
else if (figura == 2){ // 2 para triangulo
    new triangulo // Invocamos la funcion triangulo
}
else if (figura == 3){ // 3 para rectangulo
    new rectangulo // Invocamos la funcion rectangulo
}

else{  // Si no ingresa ninguna de las 3 opciones que tienen función, devolvemos un "Ingrese una opcion válida"
alert ("Ingrese una opcion válida") 
}


function circulo() { //Para la funcion circulo solo debemos elevar al cuadrado el rádio y multiplicarlo por PI
    let radio = prompt("Ingrese el radio del círculo") // Solicitamos que ingrese el radio del circulo
    let areaCirculo = radio * radio * Math.PI // Multiplicamos el radio por si mismo y luego por PI, por conmutatividad no importa el orden
    alert("El area del círculo es = " + areaCirculo) //Entregamos el área del círculo
}


function triangulo() { //Para la funcion triangulo solicitamos la base, la altura y luego la dividimos por 2
    let base = prompt("Ingrese la base del triángulo") // Solicitamos que ingrese la base del triangulo
    let altura = prompt("Ingrese la altura del triángulo") //Solicitamos que ingrese la altura del triangulo
    let areaTriangulo = ((base * altura)/2) // Realizamos los calculos y los almacenamos en una viable areaTriangulo
    alert("El área del triángulo es = " + areaTriangulo) //Entregamos el resultado del área mediante un alert
}

function rectangulo(){ //Para la funcion del rectangulo solo debemos multiplicar 2 lados adyacentes
    let lado1 = prompt("Ingrese la longitud de un lado") // Solicitamos que ingrese la longitud de un lado
    let lado2 = prompt("Ingrese la longitud del lado adyacente") //Solicitamos que ingrese la longitud del lado adyacente
    let areaRectangulo = lado1 * lado2 //Calculamos el área multiplicando ambos lados
    alert("El área del rectangulo es = " + areaRectangulo) //Entregamos el resultadod el área del rectangulo
}
