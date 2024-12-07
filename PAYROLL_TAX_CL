/**
 * Calculates the tax for a salary based on a taxable ranges as of December 2024.
 *
 * @param {number} taxableSalary The salary on which to calculate the tax.
 * @param {number} UTM The value of the Unidad Tributaria Mensual (UTM).
 * @return The calculated tax.
 * @customfunction
 */
function PAYROLL_TAX_CL(taxableSalary, UTMValue) {

    if (typeof taxableSalary !== 'number' || typeof UTMValue !== 'number') {
        return "Error: Salary and UTM must be numbers.";
    }

    // Define the tax brackets in UTM
    const brackets = [
        { from: 0, to: 13.5, rate: 0 },          // Exempt
        { from: 13.5, to: 30, rate: 0.04 },
        { from: 30, to: 50, rate: 0.08 },
        { from: 50, to: 70, rate: 0.135 },
        { from: 70, to: 90, rate: 0.23 },
        { from: 90, to: 120, rate: 0.304 },
        { from: 120, to: Infinity, rate: 0.35 }
    ];

    // Convert taxable salary to UTM
    const salaryInUTM = taxableSalary / UTMValue;
    let totalTax = 0;

    // Calculate tax for each bracket
    for (const bracket of brackets) {
        if (salaryInUTM > bracket.from) {
            const taxableAmount = Math.min(salaryInUTM, bracket.to) - bracket.from;
            totalTax += taxableAmount * bracket.rate;
        } else {
            break;
        }
    }

    // Convert total tax from UTM to local currency
    return totalTax * UTMValue;
}
