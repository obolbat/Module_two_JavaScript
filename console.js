let money = 50000,
    profit = '30000',
    expenses = 'Питание, Бензин, Еда котикам',
    purpose = 300000,
    period = 3;

console.log('Тип переменной money:', typeof money);
console.log('Тип переменной profit:', typeof profit);
console.log(expenses, 'Длина строки expenses:', expenses.length);
console.log('Период равен', period, 'месяцев');

let budgetDay = money / 30;
console.log('Дневной бюджет', budgetDay);

//приводим к нижнему регистру, разбиваем на массив
expenses = expenses.toLocaleLowerCase();
let arrayExpenses = expenses.split(', ');
console.log(arrayExpenses);