function calcularRentabilidad() {
    // Obtener valores de entrada (con validación)
    const inversionInicial = parseFloat(document.getElementById("inversionInicial").value);
    const flujoEfectivoAnual = parseFloat(document.getElementById("flujoEfectivoAnual").value);
    const numeroAnos = parseInt(document.getElementById("numeroAnos").value);
    const tasaInflacion = parseFloat(document.getElementById("tasaInflacion").value) / 100;
    const tasaDescuento = parseFloat(document.getElementById("tasaDescuento").value) / 100;

    // Validación de entradas (asegúrate de que todos los valores sean válidos y mayores que cero)
    // ...

    // Cálculos de rentabilidad (puedes elegir los que necesites)
    const rentabilidadTotal = (flujoEfectivoAnual * numeroAnos) / inversionInicial * 100;
    const rentabilidadFlujoMedio = flujoEfectivoAnual / inversionInicial * 100;
    const rentabilidadInflacion = ((1 + rentabilidadFlujoMedio/100) / (1 + tasaInflacion)) - 1 * 100;

    // ... (otros cálculos como VAN y TIR)

    // Mostrar resultados
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <h2>Resultados:</h2>
        <p>Rentabilidad Total: ${rentabilidadTotal.toFixed(2)}%</p>
        <p>Rentabilidad Flujo Medio: ${rentabilidadFlujoMedio.toFixed(2)}%</p>
        <p>Rentabilidad con Inflación: ${rentabilidadInflacion.toFixed(2)}%</p>
        </div>
    `;
}
