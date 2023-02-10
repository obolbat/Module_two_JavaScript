let oneNumber = parseFloat(prompt('Введите первое число:'));
let twoNumber = parseFloat(prompt('Введите второе число:'));
if (isNaN(oneNumber) || isNaN(twoNumber)) {
    document.write('Вы ввели не числовые значения')
}
else {
    document.write(`При сложении чисел ${oneNumber} + ${twoNumber} = ${(oneNumber + twoNumber).toFixed(2)} <br>`);
    document.write(`При вычитании чисел ${oneNumber} - ${twoNumber} = ${(oneNumber - twoNumber).toFixed(2)} <br>`);
    document.write(`При умножении чисел ${oneNumber} * ${twoNumber} = ${(oneNumber * twoNumber).toFixed(2)} <br>`);
    document.write(`При делении чисел ${oneNumber} / ${twoNumber} = ${(oneNumber / twoNumber).toFixed(1)} <br>`);
    document.write(`Остаток от деления чисел ${oneNumber} % ${twoNumber} = ${Math.round(oneNumber % twoNumber)} <br>`);
}
