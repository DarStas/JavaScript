/*

  Formula:



  weight (kg) / [height (m)]2

  Or



  [weight (kg) / height (cm) / height (cm)] x 10,000

*/

const svoris = Number(prompt("Koks jūsų svoris (kg)?"));
const ugisKv = Number(prompt("Koks jūsų ūgis (m)?"))**2;

const KMI = svoris / ugisKv

if (KMI < 18.5) {
    alert("Under Weight");
}else if (KMI < 25) {
    alert("Normal");
}else if (KMI < 30) {
    alert("Over Weight");
} else if (KMI < 35) {
    alert("Obesity (Class I)");
} else if (KMI < 40) {
    alert("Obesity (Class II)");
} else (KMI > 40) 
    alert("Extreme Obesity");
