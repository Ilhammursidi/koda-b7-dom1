const body = document.body

const main = document.querySelector("main")
body.append(main)

const input = document.createElement("input")
main.append(input)

const section = document.createElement("section")
main.append(section)

const tombol = [
    "Deg | Rad","x!","(",")","%","AC",
    "Inv","sin","in","7","8","9","÷",
    "π","cos","log","4","5","6","x",
    "e","tan","√","1","2","3","-",
    "Ans","EXP","Xy","0",".","=","+"
];

tombol.forEach(function(text){

    let btn = document.createElement("button");

    btn.textContent = text;

    section.append(btn);

});