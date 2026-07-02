function calcular (){
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let disponible = calcularDisponible(ingresos,egresos);
    document.getElementById("spnDisponible").innerText="USD " +  disponible.toFixed(2);

    let capacidad = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").innerText="USD " +  capacidad.toFixed(2);

    let monto = parseInt(document.getElementById("txtMonto").value);
    let tasa = parseInt(document.getElementById("txtTasaInteres").value);
    let plazoAnios = parseInt(document.getElementById("txtPlazo").value);

    let interes = calcularInteresSimple(monto,tasa,plazoAnios);
    document.getElementById("spnInteresPagar").innerText="USD " +  interes.toFixed(2);

    let totalPagar = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").innerText="USD " +  totalPagar.toFixed(2);

    let cuota = calcularCuotaMensual(totalPagar,plazoAnios);
     document.getElementById("spnCuotaMensual").innerText="USD " +  cuota.toFixed(2);

    let estado = determinarAprobacion(cuota,capacidad);
    document.getElementById("spnEstadoCredito").innerText = estado;
    
}

document.getElementById("btnCalcularCredito").onclick = calcular;

