
/* 5.1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему
 желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
 Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
 (использовать createElement / appendChild) */

const chessBoard = {

    drawChessBoard() {  // Строим шахматную доску
        for (let i = 0; i < 81; i++) {
            let baseEl= document.getElementsByClassName('chess');
            let div = document.createElement('div');
            baseEl[0].appendChild(div);
            let data = this.getTypeOfSquare(i);
            div.className = `square ${data[0]}`;
            div.innerHTML = data[1];
        }
    },

    getTypeOfSquare(num) {  // Определить тип клетки шахматного поля 'field' || "black" || "white"
        let cls1 = 'field', txt = '';
        if (num === 72) return [cls1, txt];  // Пустое угловое поле
        if (num > 72) {  // нижние поля ABCDEFGH
            txt = String.fromCharCode("A".charCodeAt(0) + num - 73);
            return [cls1, txt];
        }
        if (!(num % 9)) {  // левые боковые поля 12345678
            txt += 8 - Math.floor(num / 9);
            return [cls1, txt];
        }
        let pos = num - (Math.floor(num / 9)) - 1;  // Шахматные поля: 0...64
        cls1 = ((pos % 8 + Math.floor(pos / 8)) % 2) ? "black" : "white";
        return [cls1, txt];
    }
}
