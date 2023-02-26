const money = prompt('Ваш месячный доход?');
const purpose = prompt('Сколько вы хотите накопить?');
let expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
const amount = prompt('Во сколько обойдуться обязательные статьи расходов?');
const hasDeposit = true;

const budgetMonth = money - amount;
console.log('Ваш бюджет на месяц:', budgetMonth);
console.log('Вы хотите накопить:', purpose);
console.log('Ваши расходы:', expenses);
console.log('Сумма расходов:', amount);

const budgetDay = Math.floor(budgetMonth / 30);
const months = Math.ceil(purpose / budgetMonth);
if (budgetMonth > 0) {
    console.log(`Вы достигните цели через: ${months} месяца (-ев)`);
    console.log('Ваш дневной бюджет:', budgetDay);
} else ('Увы, вы не накопите');



if (budgetDay < 0 ) {
    console.log('Что-то пошло не так');
} else if (budgetDay > 6000 ) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay < 3000 && budgetDay < 0 ) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('У вас средний уровень дохода');
}
