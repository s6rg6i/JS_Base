/*4. Объекты в JavaScript
4.1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе
объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны
получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
соответствующее сообщение с помощью console.log и вернуть пустой объект. */

function decompose(number) {
    if (number < 0 || number > 999) {
        console.log('число должно быть от 0 до 999');
        return null;
    }
    let units = number % 10;
    let tens = (Math.floor(number / 10)) % 10;
    let hundreds = Math.floor(number / 100);
    return {units, tens, hundreds}
}

let obj = decompose(789)
if (obj)
    for (let attr in obj)
            console.log(attr + ': ' + obj[attr]);


/* 4.2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу. */


let basket = {
    goods : [],
    addItemInBasket(name, price) {
        if (!this.goods.length)
            this.goods.push({name, price, count: 0});
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].name === name) {
                this.goods[i].count++;
                return;
            }
        }
        this.goods.push({name, price, count: 1});
    },
    getBasketSum() {
        let sum = 0;
        for (let i = 0; i < this.goods.length; i++)
            sum += this.goods[i].count * this.goods[i].price;
        return sum;
    },
    readBasket() {
        let str = '\nСодержимое корзины:';
        for (let i = 0; i < this.goods.length; i++) {
            str += '\n'
            for (let inf in this.goods[i])
                str += `${inf}:${this.goods[i][inf]}; `;
        }
        console.log(str);
    }
}

basket.addItemInBasket('банан',2.5);
basket.addItemInBasket('банан',2.5);
basket.addItemInBasket('банан',2.5);
basket.addItemInBasket('хлеб',16.8);
basket.addItemInBasket('хлеб',16.8);
basket.addItemInBasket('молоко',12.5);
basket.addItemInBasket('молоко',12.5);
basket.addItemInBasket('молоко',12.5);
basket.addItemInBasket('кофе',25);

basket.readBasket();
console.log(`\nСтоимость корзины: ${basket.getBasketSum()}`);


/* 4.3. *Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для
корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных
модулей сайта, но в разных местах давал возможность вызывать разные методы. */