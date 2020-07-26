window.onload = textColor


function textColor() {
for (let i = 0; ;i++) {
    if (document.getElementsByClassName('tc')[i] == undefined) break;
    else {
        mas = document.getElementsByClassName('tc')[i].innerHTML;
        var my_text = mas.length-1;
        mas = mas.split([''])
        var count = 0;
        var fin = '';
        while (count <= my_text) {
            var letter = mas[count];
            letter = letter.toUpperCase();
            if (letter == 'А' || letter ==  'О' || letter == 'У' || letter == 'Ы' || letter == 'Э' || letter == 'Я' || letter == 'Ё' || letter == 'Ю' || letter == 'И' || letter == 'Е') {
                letter = "<span class = red>" + letter + "</span>";
            };
            fin = fin + letter;
            count++;
        };   
    document.getElementsByClassName('tc')[i].innerHTML = fin;
    };
};
};

function textColor_msg() {
for (let i = 0; ;i++) {
    if (document.getElementsByClassName('tc_msg')[i] == undefined) break;
    else {
        mas = document.getElementsByClassName('tc')[i].innerHTML;
        var my_text = mas.length-1;
        mas = mas.split([''])
        var count = 0;
        var fin = '';
        while (count <= my_text) {
            var letter = mas[count];
            letter = letter.toUpperCase();
            if (letter == 'А' || letter ==  'О' || letter == 'У' || letter == 'Ы' || letter == 'Э' || letter == 'Я' || letter == 'Ё' || letter == 'Ю' || letter == 'И' || letter == 'Е') {
                letter = "<span class = red>" + letter + "</span>";
            };
            fin = fin + letter;
            count++;
        };   
    document.getElementsByClassName('tc')[i].innerHTML = fin;
    };
};
};

function text_color(elem) {
    var t = elem.val;//document.getElementsById(id).innerHTML;
    console.log(t);
     var my_text = t.length-1;
    letter = t[my_text].toUpperCase();
    if (letter == 'А' || letter ==  'О' || letter == 'У' || letter == 'Ы' || letter == 'Э' || letter == 'Я' || letter == 'Ё' || letter == 'Ю' || letter == 'И' || letter == 'Е') {
        letter = "<span class = red>" + letter + "</span>";
        };
    document.getElementsById(id).innerHTML = str.slice(0 , my_text - 1) + letter;
};


function send() {
    let header = document.getElementById('header');
    let letter = document.createElement('img');	
    letter.setAttribute('src',"/images/letter.png");
    letter.setAttribute('id', 'letterSend');
    header.appendChild(letter);
    setTimeout(() => letter.remove(), 5000);
}

function get() {
    let header = document.getElementById('header');
    let letter = document.createElement('img');	
    letter.setAttribute('src',"/images/letter.png");
    letter.setAttribute('id', 'letterGet');
    header.appendChild(letter);
    setTimeout(() => letter.remove(), 5000);
}

function sendText() {
    document.getElementsByClassName('text')[0].value = "";
}

function down() {
var i = 0
for (i; ;i++) {
   if (document.getElementsByClassName('scroll')[i] == undefined) break;
}
document.getElementsByClassName('scroll')[i-1].scrollIntoView(false);
}