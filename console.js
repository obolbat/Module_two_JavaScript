const array = ['456', '28976', '7856', '4907', '8996', '255666', '5678'];
array.filter(number => ['2','4'].includes(number[0])).forEach(number => document.write(number + '</br>') );
