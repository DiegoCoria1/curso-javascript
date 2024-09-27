let nota1 = prompt("Ingrese la primera nota") //Solicitamos la primera nota
let nota2 = prompt("Ingrese la segunda nota") //Solicitamos la segunda nota
let nota3 = prompt("Ingrese la tercera nota") //Solicitamos la tercera nota
let promedio = (nota1 * 0.4 + nota2 * 0.3 + nota3 * 0.3) //Calculamos el promedio según las notas ingresadas y sus porcentajes correspondientes
//Creamos una condición según el promedio
if (promedio < 3.95){ //Si el promedio es menor a 3.95 estará reprobado
    alert("Reprobado") //Entregamos "Reprobado"
}
else if ( promedio <= 3.95 && promedio <4.95){ //Segunda condición para informar que se va a examen
    alert("El estudiante se va a examen") //Entregamos "El estudiante se va a examen"
}
else { //Si la nota es mayor a 4.95 el alumno estará aprobado
    alert("Eximido") //Entregamos Eximido
}