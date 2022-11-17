const definiteBudget = prompt("Definite budget? (yes/no)");

if (definiteBudget === "yes") {
  console.log(definiteBudget);
  const knowChampion = prompt("Known champion for it? (yes/no)");
  if (knowChampion === "yes") {
    console.log(knowChampion);
    const clearScope = prompt("Clear project Scope? (yes/no)");
    if (clearScope === "yes") {
      console.log(clearScope);
      const achievableTimescale = prompt("Achievable Timescalale? (yes/no)");
      if (achievableTimescale === "yes") {
        console.log(achievableTimescale);
        alert("Go for it");
      } else {
        alert("Get more time");
      }
    } else {
      const happyProfit = prompt("Happy to profit? (yes/no)");
      if (happyProfit === "yes") {
        console.log(happyProfit);
        alert("Cash In");
      } else {
        alert("Explain why it matters");
      }
    }
  } else {
    alert("Leave it alone");
  }
} else {
  const alternativeFunding = prompt("Alternative funding? (yes/no)");
  if (alternativeFunding === "yes") {
    console.log(alternativeFunding);
    alert("Sort out funding");
  } else {
    alert("Leave it alone");
  }
}
