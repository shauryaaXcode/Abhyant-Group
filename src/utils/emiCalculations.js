/**
 * EMI & Financial Estimation Utilities
 * Standard Equated Monthly Installment calculation
 */

/**
 * Calculate standard reducing balance EMI
 * @param {number} principal - Loan/Financed amount in INR
 * @param {number} annualRate - Annual interest percentage (e.g. 8.5)
 * @param {number} tenureYears - Repayment tenure in years (e.g. 10)
 * @returns {object} - { emi, totalPayment, totalInterest, principal, tenureMonths }
 */
export const calculateEmi = (principal, annualRate, tenureYears) => {
  const p = Number(principal) || 0;
  const r = (Number(annualRate) || 8.5) / 12 / 100;
  const n = (Number(tenureYears) || 10) * 12;

  if (p <= 0 || n <= 0) {
    return {
      emi: 0,
      totalPayment: 0,
      totalInterest: 0,
      principal: 0,
      tenureMonths: 0,
    };
  }

  if (r === 0) {
    const emi = Math.round(p / n);
    return {
      emi,
      totalPayment: p,
      totalInterest: 0,
      principal: p,
      tenureMonths: n,
    };
  }

  // EMI formula: [P * R * (1+R)^N] / [(1+R)^N - 1]
  const factor = Math.pow(1 + r, n);
  const emi = Math.round((p * r * factor) / (factor - 1));
  const totalPayment = emi * n;
  const totalInterest = totalPayment - p;

  return {
    emi,
    totalPayment,
    totalInterest,
    principal: p,
    tenureMonths: n,
  };
};
