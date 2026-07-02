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