/* 5.2. и 5.3 Решил объединить
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть
только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
3.1. Создать массив товаров;
3.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только
div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
*/

const catalog = {
    goods : [
        { id: 8123, name: 'Телефон: Xiaomi Mi Max 3 6/128GB', price: 12300 },
        { id: 9123, name: 'Телефон: Philips (филипс) Xenium E311', price: 3965 },
        { id: 1123, name: 'Телефон: Xiaomi Redmi Note 3 Pro 32Gb', price: 7900 },
        { id: 6123, name: 'Телефон: Marshall London', price: 27990 },
        { id: 4123, name: 'Телефон: Sony Xperia XZ1 Compact', price: 12300 },
    ]
}

const basket = {
    cart : [],
    goodsListBlock: null,
    basketListBlock: null,

    init() {
        this.goodsListBlock = document.querySelector('.goods');
        this.basketListBlock = document.querySelector('.basket');
        this.render_catalog();
        this.render_basket();
    },

    render_catalog() {
        if (!this.goodsListBlock.length) {
            catalog.goods.forEach(el => {
                this.goodsListBlock.insertAdjacentHTML('beforeend',
                    `<div class="item_box">
                            <h3 class="item_title">${el.name}</h3>
                            <p>Цена: ${el.price} руб.&nbsp;
                            <button class="add_item" data-id=
                                "${el.id}" onclick="basket.addHandler(this)">Добавить в корзину</button></p></div>`);
            })
        }
    },

    render_basket() {
        if (!this.basketListBlock.length) {
            this.basketListBlock.innerHTML = "";
            if (this.cart.length === 0) {
                this.basketListBlock.insertAdjacentHTML(
                    'beforeend',`<div class="title"><h3>Корзина пуста</h3></div>`);
                return;
            }
            this.basketListBlock.insertAdjacentHTML(
                'beforeend',`<div class="title"><h3>Корзина:</h3></div>`);
            this.cart.forEach(el => {
                this.basketListBlock.insertAdjacentHTML('beforeend',
                    `<div class="big">${el.merch.name}</div>
                          <div class="small">${el.count}</div>
                          <div class="small">${el.merch.price}</div>`);
            })
            let res = this.getBasketSum();
            this.basketListBlock.insertAdjacentHTML('beforeend',
                `<div class="big"><b>Итого</b>:</div>
                          <div class="small"><b>${res[0]}</b></div>
                          <div class="small"><b>${res[1]}</b></div>`);
        }
    },

    addHandler(e) {
        let id = e.getAttribute('data-id');
        let idx = this.getIndexItemById(id);
        if (idx != null) {
            this.addItem(catalog.goods[idx]);
            this.render_basket();
        }
    },

    clearBasket() {
        this.cart = [];
        this.render_basket();
    },

    getIndexItemById(id) {
        for (let i = 0; i < catalog.goods.length; i++) {
            if (catalog.goods[i].id === +id)
                return i;
        }
        return null;
    },

    addItem(item) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].merch.id === item.id) {
                this.cart[i].count++;
                return;
            }
        }
        this.cart.push({merch: item, count: 1});
    },
    
    clear(id) {
        this.cart = [];
    },
    
    getBasketSum() {
        let sum = 0, quan = 0;
        for (let i = 0; i < this.cart.length; i++) {
            quan += this.cart[i].count;
            sum += quan * this.cart[i].merch.price;
        }
        return [quan,sum];
    },

    printBasket() {
        let str = '\nСодержимое корзины:';
        for (let i = 0; i < this.cart.length; i++) {
            str += `\n${this.cart[i].merch.name} -> ${this.cart[i].merch.price} * ${this.cart[i].count}`;
        }
        console.log(str);
    }
}


/*
basket.addItem(catalog.goods[0]);
basket.addItem(catalog.goods[2]);
basket.addItem(catalog.goods[3]);
basket.addItem(catalog.goods[4]);
basket.addItem(catalog.goods[2]);
basket.addItem(catalog.goods[1]);
basket.addItem(catalog.goods[3]);
basket.addItem(catalog.goods[2]);

basket.printBasket();
let res = basket.getBasketSum();
console.log(`\nКол-во товаров: ${res[0]}; Сумма: ${res[1]};`);
basket.clear();
basket.printBasket();
*/
