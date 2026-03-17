const body = document.body;

const main = document.querySelector("main")
body.append(main)

const form = document.createElement("form");
main.append(form);

const div = document.createElement("div")
form.append(div)

const label = document.createElement("label")
label.textContent = "nama"
label.setAttribute("for","nama")
div.append(label)

const input = document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("id","nama")
div.append(input)

const divAge = document.createElement("div")
form.append(divAge)

const labelAge = document.createElement("label")
labelAge.textContent = "umur"
labelAge.setAttribute("for","umur")
const inputAge = document.createElement("input")
inputAge.setAttribute("type","number")
inputAge.setAttribute("id","umur")
divAge.append(labelAge,inputAge)


const divGender = document.createElement("div")
form.append(divGender)

const labelGender = document.createElement("label")
labelGender.textContent = "Jenis Kelamin"
const manGender = document.createElement("input")
manGender.setAttribute("type","radio")
manGender.setAttribute("name","gender")
manGender.setAttribute("id","L")
const labelMan = document.createElement("label")
labelMan.textContent = "Laki-laki"
labelMan.setAttribute("for","L")

const womanGender = document.createElement("input")
womanGender.setAttribute("type","radio")
womanGender.setAttribute("name","gender")
womanGender.setAttribute("id","P")
const labelWoman = document.createElement("label")
labelWoman.textContent = "Perempuan"
labelWoman.setAttribute("for","P")

divGender.append(labelGender,manGender,labelMan,womanGender,labelWoman)
form.append(divGender)

const divRokok = document.createElement("div")
form.append(divRokok)

const labelPerokok = document.createElement("label")
labelPerokok.setAttribute("for","perokok")
labelPerokok.textContent = "Apakah anda Perokok ?"
divRokok.append(labelPerokok)

const select = document.createElement("select")
select.setAttribute("name","perokok")
select.setAttribute("id","perokok")

const pilih = document.createElement("option")
pilih.value = "pilih";
pilih.setAttribute("disabled","")
pilih.setAttribute("selected","")
pilih.textContent = "pilih";
select.append(pilih);
const ya = document.createElement("option")
ya.value = "ya";
ya.textContent = "Ya";
select.append(ya);

const tidak = document.createElement("option")
tidak.value = "tidak";
tidak.textContent = "tidak";
select.append(tidak);

divRokok.append(select)

const divBrand = document.createElement("div")
form.append(divBrand)

const labelBrand = document.createElement("label")
labelBrand.textContent = "Brand rokok yang digunakan"
divBrand.append(labelBrand)

const breakingLine = document.createElement("br")
divBrand.append(breakingLine)

const tidakMerokok = document.createElement("input")
tidakMerokok.setAttribute("type","checkbox")
tidakMerokok.setAttribute("id","tidak")
tidakMerokok.setAttribute("for","tidak")

const labelTidak = document.createElement("label")
labelTidak.textContent = "Tidak merokok"
labelTidak.setAttribute("for","tidak")
divBrand.append(tidakMerokok,labelTidak)

const malboro = document.createElement("input")
malboro.setAttribute("type","checkbox")
malboro.setAttribute("id","malboro")
tidakMerokok.setAttribute("for","malboro")

const inMalboro = document.createElement("label")
inMalboro.textContent = "Malboro"
inMalboro.setAttribute("for","malboro")
divBrand.append(malboro,inMalboro)

const sampoerna = document.createElement("input")
sampoerna.setAttribute("type","checkbox")
sampoerna.setAttribute("id","sampoerna")
sampoerna.setAttribute("for","sampoerna")

const inSampoerna = document.createElement("label")
inSampoerna.textContent = "sampoerna"
inSampoerna.setAttribute("for","sampoerna")
divBrand.append(sampoerna,inSampoerna)

const dunhill = document.createElement("input")
dunhill.setAttribute("type","checkbox")
dunhill.setAttribute("id","dunhill")
dunhill.setAttribute("for","dunhill")

const inDunhill = document.createElement("label")
inDunhill.textContent = "dunhill"
inDunhill.setAttribute("for","dunhill")
divBrand.append(dunhill,inDunhill)

const djarum = document.createElement("input")
djarum.setAttribute("type","checkbox")
djarum.setAttribute("id","djarum")
djarum.setAttribute("for","djarum")

const inDjarum = document.createElement("label")
inDjarum.textContent = "dajrum"
inDjarum.setAttribute("for","djarum")
divBrand.append(djarum,inDjarum)

const button = document.createElement("button")
button.setAttribute("id","button")
button.textContent = "submit"
button.setAttribute("type","submit")
form.append(button)

