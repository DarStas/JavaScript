let svoris = prompt("Koks yra jūsų svoris? (kg)");
let svorisKg = Number(svoris);

let ugis = prompt("koks yra jūsų ūgis (cm)");
let ugisCm = Number(ugis);

let ugisCmKv = ugisCm**2;

const daugiklis = 10_000;

let bmi = svorisKg / ugisCmKv * daugiklis

console.log(bmi);

alert(`Jusu BMI yra ${bmi}`);