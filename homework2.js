/* 2.1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?
 */
{
// Заменим унарные операторы инкрементрирования на сложение, чтобы пояснить результаты
    console.log('Задача 2.1.')
    let a = 1, b = 1, c, d;  //
    a = a + 1;
    c = a;        // Эквивалентно: c = ++a;
    console.log(a, b, c, d);    // [2 1 2 undefined]
    d = b;
    b = b + 1;        // Эквивалентно: d = b++;
    console.log(a, b, c, d);    // [2 2 2 1]
    a = a + 1;
    c = 2 + a;    // Эквивалентно: c = (2+ ++a);
    console.log(a, b, c, d);    // [3 2 5 1]
    d = 2 + b;
    b = b + 1;    // Эквивалентно: d = (2+ b++)
    console.log(a, b, c, d);    // [3 3 5 4]
}

/* 2.2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
*/

{
// Заменим на простые операторы, чтобы пояснить результаты
    console.log('Задача 2.2.');
    let a = 2;
    a = a * 2;
    let x = 1 + a; // Эквивалентно: x = 1 + (a *= 2);
    console.log(a, x);  // [4 5]
}

/* 2.3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт,
который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */
function calc_numbers(a, b){
    if (a >= 0  && b >= 0)  // если a и b положительные, вывести их разность;
        return a - b;
    if (a < 0 && b < 0)  // если a и b отрицательные, вывести их произведение;
        return a * b;
    return a + b;  // а и b разных знаков, вывести их сумму;
}
console.log('Задача 2.3.');
console.log(` ${a = 10} - ${b = 20} = ${calc_numbers(a,b)}`);
console.log(` ${a = 10} + ${b = -20} = ${calc_numbers(a,b)}`);
console.log(`${a = -10} + ${b = 20} = ${calc_numbers(a,b)}`);
console.log(`${a = -10} * ${b = -20} = ${calc_numbers(a,b)}`);

/* 2.4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
 */
{
    console.log('Задача 2.4.')
    a = 10;
    tmp = '';
    switch (a) {
        case 0 : tmp += '0';
        case 1 : tmp += ' 1';
        case 2 : tmp += ' 2';
        case 3 : tmp += ' 3';
        case 4 : tmp += ' 4';
        case 5 : tmp += ' 5';
        case 6 : tmp += ' 6';
        case 7 : tmp += ' 7';
        case 8 : tmp += ' 8';
        case 9 : tmp += ' 9';
        case 10 : tmp += ' 10';
        case 11 : tmp += ' 11';
        case 12 : tmp += ' 12';
        case 13 : tmp += ' 13';
        case 14 : tmp += ' 14';
        case 15 : tmp += ' 15';
    }
    console.log(tmp)
}

/* 2.5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать
оператор return.
 */
function f_add(a,b) { return a + b; }
function f_sub(a,b) { return a - b; }
function f_mul(a,b) { return a * b; }
function f_div(a,b) { return a / b; }

/* 2.6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 –
значения аргументов, operation – строка с названием операции.  В зависимости от переданного значения операции выполнить
одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+' : return f_add(arg1, arg2);
        case '-' : return f_sub(arg1, arg2);
        case '*' : return f_mul(arg1, arg2);
        case '/' : return f_div(arg1, arg2);
    }
}
console.log('Задача 2.5, 2.6.')
console.log(`${a = 10} + ${b = 20} = ${mathOperation(a,b,'+')}`);
console.log(`${a = 9.2} - ${b = 4.6} = ${mathOperation(a,b,'-')}`);
console.log(`${a = 10} / ${b = 4} = ${mathOperation(a,b,'/')}`);
console.log(`${a = 1.1} * ${b = 4} = ${mathOperation(a,b,'*')}`);

/* 2.7. *Сравнить null и 0. Попробуйте объяснить результат.
 */

/**
 * null — примитивное значение, которое представляет намеренное отсутствие какого-либо значения типа объект, т.е.
 * переменная содержит ссылку на пространство в памяти, которое не содержит объекта.
 * 0 - это числовой тип данных со значением 0.
 */

/* 2.8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow),
где val – заданное число, pow – степень.
 */
function power(val, pow) {
    if (pow < 0) return null;  // Предполагаем, что степень >= 0
    if (pow === 0) return 1;  // 1-й базавый случай pow = 0
    if (pow === 1) return val;  // 2-й базавый случай pow = 1
    return val * power(val, pow - 1);  // рекурсия
}
console.log('Задача 2.8')
console.log(power(2, 16));