function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(
    (sum, next) => sum + next,
    0
  );
  let avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) return 0;
  
  let sum = arr.reduce(
    (sum, next) => sum + next,
    0
  );
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) return 0;
  
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) return 0;
  
  let sumEvenElement = 0;
  let sumOddElement  = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) sumEvenElement += arr[i];
    else                 sumOddElement  += arr[i];
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) return 0;

  let sumEvenElement   = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
  
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length == 0) return 0;

  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    let nextMax = func(...arrOfArr[i]);
    if (maxWorkerResult <= nextMax) maxWorkerResult = nextMax;
  }
  return maxWorkerResult;
}
