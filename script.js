const tUbahWarna = document.getElementsByTagName("button")[0]
tUbahWarna.addEventListener("click", function () {
    // document.body.style.backgroundColor = "lightblue"
    // document.body.setAttribute("class", "biru-muda")
    document.body.classList.toggle("biru-muda")
})

const tAcakWarna = document.createElement("button")
const textTombol = document.createTextNode("Acak Warna!")
tAcakWarna.appendChild(textTombol)
tAcakWarna.setAttribute("type", "button")
tUbahWarna.after(tAcakWarna)

tAcakWarna.addEventListener("click", function() {
    const r = Math.round(Math.random() * 255 + 0)
    const g = Math.round(Math.random() * 255 + 0)
    const b = Math.round(Math.random() * 255 + 0)
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

const sMerah = document.getElementsByTagName("input")[0]
const sHijau = document.getElementsByTagName("input")[1]
const sBiru = document.getElementsByTagName("input")[2]

sMerah.addEventListener("input", function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

sHijau.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

sBiru.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

document.body.addEventListener("mousemove", function(event) {
    // posisi mouse
    // console.log(event.clientX)
    // ukuran browser
    // console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255)
    const yPos = Math.round((event.clientX / window.innerWidth) * 255)

    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`
})

