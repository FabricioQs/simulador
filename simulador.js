function calcular (){
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let disponible = calcularDisponible(ingresos,egresos);

    document.getElementById("spnDisponible").innerText="USD " +  disponible.toFixed(2);
}

document.getElementById("btnCalcularCredito").onclick = calcular;