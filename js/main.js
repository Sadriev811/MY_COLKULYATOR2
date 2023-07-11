let d = document
let a = '';
let b = '';
let c = '';
let finish = false;

let wind = d.querySelector('#inp');
let allBtns = d.querySelector('.all_btns')

let dig = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let symbols = ['-', '+', 'X', '/'];

function clear () {
     a = '';
     b = '';
     c = '';
    finish = false;
    wind.textContent = 0;
}
d.querySelector('.ac').onclick = clear;

allBtns.onclick = (event) => {
    if (!event.target.classList.contains('btns')) return;
    if (event.target.classList.contains('ac')) return;

    wind.textContent = '';
    const key = event.target.textContent;
    // dig
    if (dig.includes(key)) {
        if (b == '' && c == '') {
            a += key;
            wind.textContent = a;
        }else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            wind.textContent = b;
        }else {
            b += key;
            wind.textContent = b;
        }
        return;
    }
    // symbols
    if (symbols.includes(key)) {
        c = key
        wind.textContent = c;
        return;
    }
    // =
    if (key === '=') {
        if (b == '') b = a;
        switch (c) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    wind.textContent = 'Infinity'
                    a = '';
                    c = '';
                    b = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        wind.textContent = a;
        console.log(a, b, c);
    }
}