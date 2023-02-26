let week = ["понедельник","вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const today = "понедельник";

/** первый вариант */
// for (let i = 0; i < week.length; i++) {
//     const isHoliday = i === 5 || i === 6;
//
//     if (isHoliday) {
//         document.write('<b>');
//     }
//     if (week[i] === today) {
//         document.write('<i>');
//     }
//     document.write(week[i] + '<br>');
//     if (week[i] === today) {
//         document.write('</i>');
//     }
//
//     if (isHoliday) {
//         document.write('</b>');
//     }
// }
/** TODO: второй вариант  доработать с с объектом даты */
for (let i = 0; i < week.length; i++) {
    const isHoliday = i === 5 || i === 6;

    document.write('<span style="' + (isHoliday ? 'font-weight:800' : '') + (week[i] === today ? 'font-style: italic' : '') + '">' + week[i] + '</span><br/>');
}

let numders = [768, 56, 345, 993, 5489, 3889, 8445];
for (let i = 0; i < numders.length; i++) {
    let stringNumbers = numders[i] + '';

    if (stringNumbers[0] === '3' || stringNumbers[0] === '7') {
        document.write(stringNumbers + '<br>');
    }
}
