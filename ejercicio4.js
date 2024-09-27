let tarifas = {  //Creamos la constante tarifas para determinar los pagos
    diurno: 12000,
    nocturno: 16000,
    diurnoDomingo: 14000, 
    nocturnoDomingo: 19000,
};

// Definimos los objetos para almacenar la información de los empleados
const empleados = {
    empleado1: { //Agregamos los turnos que tendrá el empleado 1
        turnos: ['nocturno', 'nocturno', 'nocturno', 'diurno', 'diurno', 'descanso', 'descanso'],
        pagoDiario: [],
        totalSemanal: 0
    },
    empleado2: { //Agregamos los turnos que tendrá el empleado 2
        turnos: ['descanso', 'nocturno', 'nocturno', 'nocturno', 'diurno', 'descanso', 'diurno'],
        pagoDiario: [],
        totalSemanal: 0
    },
    empleado3: { //Agregamos los turnos que tendrá el empleado 3
        turnos: ['descanso', 'diurno', 'diurno', 'diurno', 'nocturno', 'nocturno', 'diurno'],
        pagoDiario: [],
        totalSemanal: 0
    }
};

// Creamos ciclos para calcular los pagos de los empleados
for (const empleado in empleados) {
    for (let i = 0; i < 7; i++) {
        let pago = 0;
        if (empleados[empleado].turnos[i] === 'diurno') {
            pago = tarifas.diurno * 10; //El pago será por 10 horas en diurno
        } else if (empleados[empleado].turnos[i] === 'nocturno') {
            pago = tarifas.nocturno * 10; //El pago será por 10 horas en nocturno
        } else if (i === 6) { // Definimos el día domingo como el sexto día (contamos desde 0)
            pago = tarifas.diurnoDomingo * 10; // 10 horas de domingo diurno
        }
        
        // Agregar el pago diario y acumular total semanal
        empleados[empleado].pagoDiario.push(pago);
        empleados[empleado].totalSemanal += pago;
    }
}

// Imprimimos los resultados para cada empleado por consola para ver toda la información
for (const empleado in empleados) {
    console.log(`${empleado}:`);
    console.log("Pagos diarios:", empleados[empleado].pagoDiario);
    console.log("Total semanal:", empleados[empleado].totalSemanal);
}