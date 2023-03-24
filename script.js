'use strict'

const getAccumulatedIncome = (money, extraMoney, amount) => {
  return (+money + +extraMoney) - amount
}

function getTargetMonth(purpose, accumulatedIncome) {
  return purpose / accumulatedIncome
}

function getBudgetDay(accumulatedIncome) {
  return accumulatedIncome / 30
}

function calc() {
//получили элементы - поля
  let elIncom = document.getElementById('income');
  let elAdditionalIncome = document.getElementById('additionalIncome');
  let elSumAdditionalIncome = document.getElementById('sumAdditionalIncome');
  let elExpenses = document.getElementById('expenses');
  let elSaving = document.getElementById('savings');
  let elPeriod = document.getElementById('period');

  //получили их значения

  const money = elIncom.value;
  const profit = elAdditionalIncome.value;
  const extraMoney = elSumAdditionalIncome.value;
  const expenses = elExpenses.value;
  const purpose = elSaving.value;
  const period = elPeriod.value;

  let accumulatedIncome = getAccumulatedIncome(money, extraMoney, expenses);
  let SumPurpose = getTargetMonth(purpose, accumulatedIncome)

  document.getElementById('sumMoney').innerText = accumulatedIncome;

  document.getElementById('sumMoneyDay').innerText = getBudgetDay(accumulatedIncome);
  document.getElementById('sumMoneyPurpose').innerText = purpose;
  document.getElementById('purpose').innerText = SumPurpose.toFixed(1);
}
