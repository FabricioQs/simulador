function calcularDisponible (ingresos, egresos){
    let resultado = ingresos-egresos;

    if (resultado < 0) {
        return 0; // Si es negativo, retorna 0
    } else {
        return resultado; // Si es positivo, retorna el valor real
    }
}

function calcularCapacidadPago(montoDisponible){
    let capacidadPago = montoDisponible*0.30;
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

function determinarAprobacion(cuotaMensual, capacidadPago){
    if (cuotaMensual <= capacidadPago){
        return "APROBADO";
    } else {
        return "RECHAZADO";
    }
}

// --- FUNCIONES DE VALIDACIÓN INMUTABLES (CON REGEX) ---

function validarIngresos() {
    let input = document.getElementById("txtIngresos");
    let error = document.getElementById("errIngresos");
    let rawValue = input.value.trim();

    // RegEx: Solo dígitos, opcionalmente seguidos de UN punto y más dígitos (Ej: 1000 o 10.50)
    let regexFloat = /^\d+(\.\d+)?$/;

    if (rawValue === "" || !regexFloat.test(rawValue)) {
        error.innerText = "Ingrese solo números válidos (mayores o iguales a 0, sin letras).";
        error.classList.add("active");
        input.classList.add("input-error");
        limpiarResultados();
        return false;
    }
    error.innerText = "";
    error.classList.remove("active");
    input.classList.remove("input-error");
    return true;
}

function validarEgresos() {
    let input = document.getElementById("txtEgresos");
    let error = document.getElementById("errEgresos");
    let rawValue = input.value.trim();
    let regexFloat = /^\d+(\.\d+)?$/;

    if (rawValue === "" || !regexFloat.test(rawValue)) {
        error.innerText = "Ingrese solo números válidos (mayores o iguales a 0, sin letras).";
        error.classList.add("active");
        input.classList.add("input-error");
        limpiarResultados();
        return false;
    }
    error.innerText = "";
    error.classList.remove("active");
    input.classList.remove("input-error");
    return true;
}

function validarMonto() {
    let input = document.getElementById("txtMonto");
    let error = document.getElementById("errMonto");
    let rawValue = input.value.trim();
    
    // RegEx: Estrictamente dígitos enteros enteros (Sin puntos, comas ni letras)
    let regexInt = /^\d+$/;

    if (rawValue === "" || !regexInt.test(rawValue)) {
        error.innerText = "Ingrese un número entero sin letras, espacios ni decimales.";
        error.classList.add("active");
        input.classList.add("input-error");
        limpiarResultados();
        return false;
    }

    let valor = parseInt(rawValue, 10);
    if (valor < 500 || valor > 50000) {
        error.innerText = "El monto debe estar entre USD 500 y USD 50,000.";
        error.classList.add("active");
        input.classList.add("input-error");
        limpiarResultados();
        return false;
    }
    error.innerText = "";
    error.classList.remove("active");
    input.classList.remove("input-error");
    return true;
}

function validarPlazo() {
    let input = document.getElementById("txtPlazo");
    let error = document.getElementById("errPlazo");
    let rawValue = input.value.trim();
    let regexInt = /^\d+$/;

    if (rawValue === "" || !regexInt.test(rawValue)) {
        error.innerText = "El plazo debe ser un número entero (años completos, sin letras).";
        error.classList.add("active");
        input.classList.add("input-error");
        limpiarResultados();
        return false;
    }

    let valor = parseInt(rawValue, 10);
    if (valor < 1 || valor > 30) {
        error.innerText = "El plazo debe estar entre 1 y 30 años.";
        error.classList.add("active");
        input.classList.add("input-error");
        limpiarResultados();
        return false;
    }
    error.innerText = "";
    error.classList.remove("active");
    input.classList.remove("input-error");
    return true;
}

function validarTasaInteres() {
    let input = document.getElementById("txtTasaInteres");
    let error = document.getElementById("errTasaInteres");
    let rawValue = input.value.trim();
    let regexFloat = /^\d+(\.\d+)?$/;

    if (rawValue === "" || !regexFloat.test(rawValue)) {
        error.innerText = "Ingrese una tasa numérica válida (sin letras ni caracteres especiales).";
        error.classList.add("active");
        input.classList.add("input-error");
        limpiarResultados();
        return false;
    }

    let valor = parseFloat(rawValue);
    if (valor < 1 || valor > 35) {
        error.innerText = "La tasa de interés debe estar entre el 1% y el 35%.";
        error.classList.add("active");
        input.classList.add("input-error");
        limpiarResultados();
        return false;
    }
    error.innerText = "";
    error.classList.remove("active");
    input.classList.remove("input-error");
    return true;
}