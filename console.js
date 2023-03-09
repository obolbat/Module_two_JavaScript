let money,
    purpose,
    extraMoney,
    amount;
//let expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//let profit = prompt('Перечислите дополнительные виды дохода:');

const hasDeposit = true;

money = +prompt('Ваш месячный доход?');
while (isNaN(money)) {
    money = +prompt('Вы ввели не число. Ваш месячный доход?');
}

purpose = +prompt('Сколько вы хотите накопить?');
while (isNaN(purpose)) {
    purpose = +prompt('Вы ввели не число. Сколько вы хотите накопить?');
}

extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы:`);
while (isNaN(extraMoney)) {
    extraMoney = +prompt('Вы ввели не число. Введите дополнительный доход:');
}

amount = +prompt('Во сколько обойдуться обязательные статьи расходов?');
while (isNaN(amount)) {
    amount = +prompt('Вы ввели не число. Введите сумму обязательных расходов:');
}

const getAccumulatedIncome = (money, amount, extraMoney) => {
    return money + extraMoney - amount;
};

const accumulatedIncome = getAccumulatedIncome(money, amount, extraMoney);
const getTargetMonth = (accumulatedIncome, purpose) => {
    return Math.floor(purpose / accumulatedIncome);
};
//
const getBudgetDay = (budgetMonth) => {
    return (budgetMonth / 30).toFixed(2);
};
console.log('Ваш бюджет на месяц:', accumulatedIncome);

const budgetDay = getBudgetDay(accumulatedIncome);

if (accumulatedIncome > 0) {
    console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов цель будет достигнута через`, getTargetMonth(accumulatedIncome, purpose) + ' месяца');
    console.log('Ваш дневной бюджет:', budgetDay);
} else {
    console.log('Цель не будет достигнута');
}

if (budgetDay < 0 ) {
    console.log('Расходы превышают доходы');
} else if (budgetDay > 6000 ) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay < 3000 && budgetDay < 0 ) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('У вас средний уровень дохода');
}

