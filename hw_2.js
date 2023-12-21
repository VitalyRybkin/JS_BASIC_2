console.log('1. Создать переменные num1, num2 которые пользователь вводит с клавиатуры Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.');
let num1 = prompt('Введите число 1:');
let num2 = prompt('Введите число 2:');

console.log(`Число 1: ${num1}`);
console.log(`Число 2: ${num2}`);

if (num1 > num2) {
    alert('Число 1 больше числа 2!');
    console.log('Число 1 больше числа 2!');
}
else if (num1 < num2) {
    alert('Число 2 больше числа 1!');
    console.log('Число 2 больше числа 1!');
}
else {
    alert('Числа равны!');
    console.log('Числа равны!');
}

console.log('2. Перепишите код к тернарному оператору')

let test = true;
if (test === true) {
    console.log('+++');
} else {
    console.log('---');
}

console.log('3. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).')

let date = Number(prompt('Введите дату:'));

switch(true) {
    case (date - 1) * (date - 10) <= 0:  
        alert('Число входит в первую декаду!');
        console.log(`Число ${date} входит в первую декаду!`);
        break;
    case (date - 11) * (date - 20) <= 0: 
        alert('Число входит во вторую декаду!');
        console.log(`Число ${date} входит во вторую декаду!`);
        break;
    case (date - 21) * (date - 31) <= 0:
        alert('Число входит в третью декаду!');
        console.log(`Число ${date} входит в третью декаду!`);
        break;
    default:
        alert('Введена неправильная дата!');
        console.log(`Введен${date} а неправильная дата!`);
}

console.log('4. Необходимо от пользователя получить число. Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.')

size = ['единиц', 'десятков', 'сотен', 'тысяч', 'десятков тысяч', 'сотен тысяч', 'миллионов'];

let num = Number(prompt('Введите число:'));
let output = `В числе ${num}: \n`
idx = 0;
while (num > 0) {
    position = num % 10;
    output = output + ` ${size[idx]}: ` + ` ${position}\n`;
    num = (num - position)/10;
    idx += 1;
}
console.log(output);
alert(output)