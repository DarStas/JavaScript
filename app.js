// const button = document.querySelector("#my-button");

// let i = 0;

// function myFunction() {
//   i++ // i = i + 1
//   button.innerText = i;
// }

const DROPDOWN_ACTIVE = "dropdown-menu active";
const DROPDOWN_HIDDEN = "dropdown-menu";

const dropdownElement = document.querySelector(`#dropdown .${DROPDOWN_HIDDEN}`);

/**
 * atvejis 1:
 * jeigu dropdown-menu yra active, tai jis turi issijungti
 * 
 * atvejis 2:
 * jei dropdown-menu nera active, tai jis turi isijungti
 */

function toggle() {
  if (dropdownElement.className === DROPDOWN_ACTIVE) {
    dropdownElement.className = DROPDOWN_HIDDEN;
  } else {
    dropdownElement.className = DROPDOWN_ACTIVE;
  }
}