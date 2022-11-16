/* [20:37] Vytautas Stripeika
2. Sukurti BMR kalkuliatorių

For men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)


To determine your total daily calorie needs, multiply your BMR by the appropriate activity factor, as follows:
Sedentary (little or no exercise): calories = BMR × 1.2;
Lightly active (light exercise/sports 1-3 days/week): calories = BMR × 1.375;
Moderately active (moderate exercise/sports 3-5 days/week): calories = BMR × 1.55;
Very active (hard exercise/sports 6-7 days a week): calories = BMR × 1.725; and
If you are extra active (very hard exercise/sports & a physical job): calories = BMR × 1.9.

// suvedami atsakymai ar esam vyras/moteris, svoris aukštis ir amžius.
// atsakomas koks mūsų aktyvumo lygis
// atsakomas kiek kalorijų mums reikia per dieną */

const gender = prompt("Jūsų lytis (vyras, moteris)");
const weight = Number(prompt("Jūsų svoris (kg)"));
const height = Number(prompt("Jūsų ūgis (cm)"));
const age = Number(prompt("Jūsų amžius (metai)"));
const activityLevel = Number(prompt("Jūsų aktyvumo lygis (0, 1, 2, 3, 4)"));

let BMR;

if (gender == "vyras") {
  BMR = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
  console.log("vyras");
} else {
  BMR = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
  console.log("moteris");
}

console.log(BMR);

if (activityLevel === 0) {
  alert(BMR * 1.2);
} else if (activityLevel === 1) {
  alert(BMR * 1.375);
} else if (activityLevel === 2) {
  alert(BMR * 1.55);
} else if (activityLevel === 3) {
  alert(BMR * 1.725);
} else {
  alert(BMR * 1.9);
}
