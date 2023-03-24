'use strict'

let money = 100000 // доходы
let profit = 'фриланс'
let extraMoney = 20000 // до доходы
let expenses =  "питание, проезд"
let amount = 10000 // расходы
let purpose = 1000000
let period = 12
let deposit = true

const getAccumulatedIncome = () => {
  return (money + extraMoney) - amount
}

let accumulatedIncome = getAccumulatedIncome()
let budgetDay = accumulatedIncome / 30

function getTargetMonth() {
  return purpose / accumulatedIncome
}

console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome());
console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца');
console.log('Дневной бюджет', budgetDay);
// конслтрукция условий





// удалили
// console.log('getTargetMonth', getTargetMonth());
// console.log('accumulatedIncome', accumulatedIncome);

// console.log('budgetDay', budgetDay);
// console.log(`цель будет достигнута за ${purpose / budgetMonth}`);