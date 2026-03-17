const fahrenheit = document.getElementById("fahrenheit")
const reamur = document.getElementById("reamur")
const hitung = document.getElementById("hitung")
const angka = document.getElementById("angka")

const input = document.querySelector("form input[type=number]")
input.onchange = function (event) {

    fahrenheit.textContent = input.value * 9/5 + 32;

    reamur.textContent = input.value * 4/5;
}
