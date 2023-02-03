let money = 50000,
    profit = '30000',
    expenses = 'Питание, бензин, еда котикам',
    purpose = 300000,
    period = 3;

console.log('Тип переменной money:', typeof money);
console.log('Тип переменной profit:', typeof profit);
console.log(expenses, 'Длина строки expenses:', expenses.length);
console.log('Период равен', period, 'месяцев');

let budgetDay = money / 30;
console.log('Дневной бюджет', budgetDay)