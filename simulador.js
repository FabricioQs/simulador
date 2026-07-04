// --- ESCUCHADORES DE EVENTOS EN TIEMPO REAL ---
document.getElementById("txtIngresos").addEventListener("input", validarIngresos);
document.getElementById("txtEgresos").addEventListener("input", validarEgresos);
document.getElementById("txtMonto").addEventListener("input", validarMonto);
document.getElementById("txtPlazo").addEventListener("input", validarPlazo);
document.getElementById("txtTasaInteres").addEventListener("input", validarTasaInteres);

// Enlace del botón de cálculo
document.getElementById("btnCalcularCredito").onclick = calcular;

// --- FUNCIÓN AUXILIAR: LIMPIAR RESULTADOS EN CASO DE ERROR ---
function limpiarResultados() {
    document.getElementById("spnDisponible").innerText = "USD 0.00";
    document.getElementById("spnCapacidadPago").innerText = "USD 0.00";
    document.getElementById("spnInteresPagar").innerText = "USD 0.00";
    document.getElementById("spnTotalPrestamo").innerText = "USD 0.00";
    document.getElementById("spnCuotaMensual").innerText = "USD 0.00";
    document.getElementById("spnEstadoCredito").innerText = "ANALIZANDO...";
}

// --- FUNCIÓN PRINCIPAL DE PROCESAMIENTO ---
function calcular() {
    let vIngresos = validarIngresos();
    let vEgresos = validarEgresos();
    let vMonto = validarMonto();
    let vPlazo = validarPlazo();
    let vTasa = validarTasaInteres();

    // Freno total ante cualquier campo inválido
    if (!vIngresos || !vEgresos || !vMonto || !vPlazo || !vTasa) {
        limpiarResultados();
        return; 
    }

    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let monto = parseInt(document.getElementById("txtMonto").value, 10);
    let plazoAnios = parseInt(document.getElementById("txtPlazo").value, 10);
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value);

    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("spnDisponible").innerText = "USD " + disponible.toFixed(2);

    let capacidad = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").innerText = "USD " + capacidad.toFixed(2);

    let interes = calcularInteresSimple(monto, tasa, plazoAnios);
    document.getElementById("spnInteresPagar").innerText = "USD " + interes.toFixed(2);

    let totalPagar = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").innerText = "USD " + totalPagar.toFixed(2);

    let cuota = calcularCuotaMensual(totalPagar, plazoAnios);
    document.getElementById("spnCuotaMensual").innerText = "USD " + cuota.toFixed(2);

    let estado = determinarAprobacion(cuota, capacidad);
    document.getElementById("spnEstadoCredito").innerText = estado;
}