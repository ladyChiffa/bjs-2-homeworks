"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  
  if (d == 0) {
    arr[0] = -b / (2 * a);
  }
  
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) ) / (2 * a);
    arr[1] = (-b - Math.sqrt(d) ) / (2 * a)
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percMonthly = (percent / 100) / 12;
  let credBody = amount - contribution;
  let payMonthly = credBody * (percMonthly + (percMonthly / (((1 + percMonthly) ** countMonths) - 1)));
  let payTotal = payMonthly * countMonths;
  let result = parseFloat(payTotal.toFixed(2));
  return result;
}
