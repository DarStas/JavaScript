// let svoris = prompt("Koks yra jūsų svoris? (kg)");
// let svorisKg = Number(svoris);

// let ugis = prompt("koks yra jūsų ūgis (cm)");
// let ugisCm = Number(ugis);

// let ugisCmKv = ugisCm**2;

// const daugiklis = 10_000;

// let bmi = svorisKg / ugisCmKv * daugiklis

// console.log(bmi);

// alert(`Jusu BMI yra ${bmi}`);

// const pradzia = 18;
// const valandos = Number(prompt("Kiek dabar valandu?")); // 4
// const minutes = Number(prompt("Kiek dabar minuciu?")); // 0


// let minuciuTikrinimas = minutes > 0; // boolean false
// let valandosKeitimas = Number(minuciuTikrinimas); // 0
// let skirtumasValandu = valandos - valandosKeitimas; 
// let likutisValandu = pradzia - skirtumasValandu;

// let likutisMinuciu = (60 - minutes) * valandosKeitimas;

// alert(`Iki paskaitos liko ${likutisValandu}val ir ${likutisMinuciu}min`);


/*
jeigu valandos keitimas yra 1, mes rodome minuciu likuti;
jei valados keitimas yra 0 mes rodome 0;
*/



/*
turime gauti skirtuma tarp minuciu,
jeigu atimame nors viena minute, valanda turi sumazeti -1, 
*/

// console.log(likutisValandu);

//Uzduotis "Liko iki paskaitos laiko?"

// const currentHours = Number(prompt("Kiek dabar valandu?"));
// const currentMinutes = Number(prompt("Kiek dabar minuciu?"));

// const shouldReduceHour = currentMinutes > 0;

// const additionalHour = Number(shouldReduceHour);

// const isNotTooLate = Number(currentHours < 18);

// const hoursDifference = (18 - currentHours - additionalHour) * isNotTooLate;
// const minuteDifference = (60 - currentMinutes) * additionalHour * isNotTooLate

// alert(`Liko: ${hoursDifference} val ${minuteDifference} min`);

// kita uzduotis

// console.log("" + 1 + 0); // 
// console.log("" - 1 + 0); // 
// console.log(true + false); // 
// console.log(typeof(true + false));
// console.log(6 / "3"); // 
// console.log(typeof(6 / "3"));
// console.log("2" * "3"); // 

// console.log(4 + 5 + "px"); // 
// console.log(typeof(4 + 5 + "px"))
// console.log("$" + 4 + 5); // 
// console.log(typeof("$" + 4 + 5))
// console.log("4" - 2); // 
// console.log(typeof("4" - 2))
// console.log("4px" - 2); // 

// console.log(" -9 " + 5); // 
// console.log(typeof(" -9 " + 5))
// console.log(" -9 " - 5); // 
// console.log(typeof(" -9 " - 5))

// console.log(undefined / 1);
// console.log(typeof(undefined / 1))

// 


const color = prompt("Kokia spalva? (Red, Blue, Yellow)");
const model = prompt("koks modelis? (Įrašykite metus)");
const make = prompt("Koks automobilio gamintojas? (Ferrari, ect)");
const mileage = prompt("Kokia automobilio rida? (Kiek km)");

if (color === "red") {
    // Yes
    if (Number(model) > 2010) {
        alert("Buy");
    }
    else if (mileage < 50000) {
        alert("Buy");
    }
    else {
        alert("Don't Buy")
    }
} else {
    // No
    if (color === "yellow") {
        // Yes
        if (make === "ferrari") {
            alert("Buy");
        }
        else {
            alert("Don't Buy");
        }
    }
    else {
        alert("Don't Buy");
    }

}

