let x = 0 //Definimos x = 0 como valor inicial para la sumatoria de 500 a 800 
let y = 0 //Definimos y = 0 como valor inicial para la sumatoria de 456 a 396 (30 iteraciones de -2)

for (let i = 500; i <= 800; i += 10) { //Definimos un ciclo for para obtener la sumatoria de los números que tienen 10 de aumento
    x += i; // x aumenta en 10 
}

for (let i = 456; i >= 396; i -= 2) { //Definimos un ciclo for para obtener la sumatoria de los números que decrementan de 2 en 2
    y += i; // y decrementa en 2
}

let sumatoria = x + y //Definimos una variable sumatoria que sume ambos valores luego de los ciclos

alert("La sumatoria es: " + sumatoria) //Entregamos la sumatoria total por alert
