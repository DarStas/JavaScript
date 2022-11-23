// console.log - debugging
// kintamieji
// let ir const deklaravimas
// naršyklės funkcijos
// prompt, alert
// duomenų tipai
// string, number, boolean, null, undefined
// tipų tikrinimas typeof
// operatoriai
// ===, +, -, *, /, >, <, **, !==, >=, <=, %
// if () {},  else if () {}, else {}
// function () {}
// funkcija pasiimti elementą
// const element = document.querySelector(".query")
// elemento parametrai
// element.innerText
// element.className

// 1. užduotis



// :root {
//   --modeColor: "#fff"
// }

// .test {
//   color: var {}
// }

const bodyElement = document.querySelector("body");

function changeMode() {
  if (bodyElement.className === "light") {
    bodyElement.className = "dark";
  } else {
    bodyElement.className = "light";
  }
}




// 1. salyga - jeigu šviesus fonas, tada fonas pasikeičia į tamsų
// šviesus fonas yra class="light"
// Kad pasikeistų į tamsų body klasė turi pasikeisti į class="dark"

// 2. sąlyga - jeigu tamsus fonas, pasikeičia į šviesų
// tamsus fonas yra class="dark"
// Kad pasikeistų į šviesų body klasė turi pasikeisti į class="light"

