// Nerodom "accordeon-content" turinio
//paspaudus ant "accordeon-header"
// turi pasimatyti musu "accordeon-content"

// "accordeon-content" yra matomas
// paspaudus ant "accordeon-header"
// "accordeon-content" turi pasislepti

const ACCORDEON = "accordeon-content";
const ACCORDEON_HIDDEN = "accordeon-content hidden";

const accordeonContentElement = document.querySelector(
  "#accordeon .accordeon-content"
);

function toggleAccordeon() {
  const isAccordeonContentHidden =
    accordeonContentElement.className === ACCORDEON_HIDDEN;
  if (isAccordeonContentHidden) {
    accordeonContentElement.className = ACCORDEON;
  } else {
    accordeonContentElement.className = ACCORDEON_HIDDEN;
  }
}
