const precio = parseFloat(prompt("Ingrese Precio"))
const porcentaje = parseFloat(prompt("¿Cuanto porcentaje de aumento"))
const aumento = ((precio * porcentaje)/100)
const total = (precio + aumento)

alert("El precio total es: " + total)


