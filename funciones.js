function calcularDisponible (ingresos, egresos){
    let resultado = ingresos-egresos;

    if (resultado < 0) {
        return 0; // Si es negativo, retorna 0
    } else {
        return resultado; // Si es positivo, retorna el valor real
    }
}

function calcularCapacidadPago(montoDisponible){
    let capacidadPago = montoDisponible*0.50;
    return capacidadPago;
}

function calcularInteresSimple(monto,tasa,plazoAnios){
    let interes = plazoAnios*monto*(tasa/100);
    return interes;
}

function calcularTotalPagar(monto, interes){
    let total = monto + interes + 100;
    return total;
}

function calcularCuotaMensual(total, plazoAnios){
    let totalMeses = plazoAnios*12;
    let cuotaMensual = total/totalMeses;
    return cuotaMensual;
}