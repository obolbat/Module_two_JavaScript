const money = +prompt('Ваш месячный доход?');
const purpose = +prompt('Сколько вы хотите накопить?');
let expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let profit = prompt('Перечислите дополнительные виды дохода:');
let extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`);
const amount = +prompt('Во сколько обойдуться обязательные статьи расходов?');
const hasDeposit = true;

const getAccumulatedIncome = (money, amount, extraMoney) => {
    return money + extraMoney - amount;
};

const accumulatedIncome = getAccumulatedIncome(money, amount, extraMoney);
const getTargetMonth = (accumulatedIncome, purpose) => {
    return Math.floor(purpose / accumulatedIncome);
}

const getBudgetDay = (budgetMonth) => {
    return (budgetMonth / 30).toFixed(2);
}
console.log('Ваш бюджет на месяц:', accumulatedIncome);

const budgetDay = getBudgetDay(accumulatedIncome);

if (accumulatedIncome > 0) {
    console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов цель будет достигнута через`, getTargetMonth(accumulatedIncome, purpose) + ' месяца');
    console.log('Ваш дневной бюджет:', budgetDay);
} else {
    console.log('Увы, вы не накопите');
}

if (budgetDay < 0 ) {
    console.log('Что-то пошло не так');
} else if (budgetDay > 6000 ) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay < 3000 && budgetDay < 0 ) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('У вас средний уровень дохода');
}
