const array = ['456', '28976', '7856', '4907', '8996', '255666', '5678'];
array.filter(number => ['2','4'].includes(number[0])).forEach(number => document.write(number + '</br>') );

const cutText = (text) => {
    if (typeof text === 'string') {
        text = text.trim();
        if (text.length > 30) {
            text.slice(0, 30).concat('...');
        }
           return text;
    } else document.write('Это не текст')
}
const result = cutText('Если строка более 30 знаков - то после 30-го символа часть текста скрывается и вместо них появляются три точки');
document.write(result);