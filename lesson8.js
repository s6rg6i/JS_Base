// 1. Написать функцию в результате вызова которой: sum(a)(b)...(n)(), получим на выходе a + b + ... + n
// 2. Аналогично первой, но вызов должен быть sum(a)(b)...(n).
"use strict";

function sum(num1) {
    return (num2) => {
        console.log(this)
        if(!num2) {
            return num1;
        }
        return sum(num1 + num2);
    }
}

console.log(`Sum : ${sum(1)(2)(3)(4)(5)(6)(7)(8)(9)()}`)  // Sum : 45
console.log(`Sum : ${sum(1)(2)(3)(4)(5)(6)(7)(8)(9)}`)



/** Результат без пустых скобок не получился
Sum :', (num2) => {
        if(!num2) {
            return num1;
        }
        return sum(num1 + num2);
    }
*/

