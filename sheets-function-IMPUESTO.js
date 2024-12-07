/**
 * Calcula el impuesto de un sueldo dado una tabla de rangos de impuestos.
 * 
 * @param {number} sueldoImponible El sueldo sobre el cual calcular el impuesto.
 * @param {number} UTM El valor de la UTM.
 * @return El impuesto calculado.
 * @customfunction
 */
function IMPUESTO(sueldoImponible, valorUTM) {

  if (typeof sueldoImponible !== 'number' || typeof valorUTM !== 'number') {
    return "Error: El sueldo y la UTM debe ser un número.";
  }

  const tramos = [
    { desde: 0, hasta: 13.5, tasa: 0 },
    { desde: 13.5, hasta: 30, tasa: 0.04 },
    { desde: 30, hasta: 50, tasa: 0.08 },
    { desde: 50, hasta: 70, tasa: 0.135 },
    { desde: 70, hasta: 90, tasa: 0.23 },
    { desde: 90, hasta: 120, tasa: 0.304 },
    { desde: 120, hasta: 150, tasa: 0.35 },
    { desde: 150, hasta: Infinity, tasa: 0.4 }
  ];

  const sueldoEnUTM = sueldoImponible / valorUTM;
  let impuestoTotal = 0;

  // Calculate tax for each bracket
  for (const tramo of tramos) {
    if (sueldoEnUTM > tramo.desde) {
      const baseGravable = Math.min(sueldoEnUTM, tramo.hasta) - tramo.desde;
      impuestoTotal += baseGravable * tramo.tasa;
    } else {
      break;
    }
  }
  return impuestoTotal * valorUTM;
}
