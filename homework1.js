/* 1.1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
Расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию  */

let tCelsius = 30;
let tFahrenheit = (9 / 5) * tCelsius + 32;
console.log(`1.1. ${tCelsius} градусов по цельсию соответствует ${tFahrenheit} градусов по Фаренгейту`)

/* 1.2. Работа с переменными. Объявить две переменные: admin и name. Записать в name строку "Василий";
Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).*/

let admin, name;
name = 'Василий';
admin = name;
console.log(`1.2. ${admin}`);

/* 1.3. *Чему будет равно JS-выражение 1000 + "108" */

console.log(`1.2. ${1000 + '108'}`);  // '1000108'

/* 1.4. *Самостоятельно разобраться с атрибутами тега script (async и defer)*/

/**
 *  Атрибуты тега script: async и defer.
 * Асинхронные скрипты с атрибутом async, не ждут загрузки элементов страницы и не ждут загрузки друг друга. Они
 * абсолютно независимые. Тот, кто первым загрузится – запустится в первую очередь. Может загрузиться и выполниться
 * до того, как страница полностью загрузится. Асинхронные скрипты очень полезны для добавления на страницу сторонних
 * скриптов: счётчиков, рекламы и т.д. Они не зависят от наших скриптов, и мы тоже не должны ждать их.
 *
 * Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме,
 * а затем запустить этот скрипт, когда DOM дерево будет полностью построено. Если на странице есть еще один тег script
 * с атрибутом defer, то даже несмотря на асинхронную загрузку данного скрипта в фоновом режиме, порядок загрузки
 * скриптов и их выполнение сохранится. Первым загрузится скрипт, который выше расположен на странице, независимо от
 * размера этого скрипта.
 */
