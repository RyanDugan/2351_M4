const randomQuestion = `Do you have a favorite book series?`;
console.log(randomQuestion);

const school = `NVC`;
console.log(`Hello, ${school}!`);

//concatenated string variable
let quanShells = 77;
const seaShells = `seashells`;
const seaShore = `seashore`;
let timeClock = 6;
const oClock = `o'clock`;
document.getElementById(
  `test1`
).innerHTML = `She sells ${quanShells} ${seaShells} by the ${seaShore} at ${timeClock} ${oClock}!`;

//if conditional statement
let dice = 12; //plug in the dice result from a d20 roll here!

if (dice >= 13) {
  result = `Success! Luck was on your side!`;
} else if (dice >= 10) {
  result = `Slight failure! So close!`;
} else {
  result = `Failure! Better luck next time!`;
}
document.getElementById(`test2`).innerHTML = result;

document.getElementById(
  `test2.2`
).innerHTML = `You need to roll a 13 or higher. You rolled a ${dice} on a d20!`;

//switch statement
let passivePerception = `Gnar`; //write in one of the player character names to see their passive perception score!

switch (passivePerception) {
  case `Theo`:
    document.getElementById(`test3`).innerHTML = 9;
    break;
  case `Gnar`:
  case `Rascal`:
    document.getElementById(`test3`).innerHTML = 13;
    break;
  case `Caia`:
    document.getElementById(`test3`).innerHTML = 14;
    break;
  case `Otto`:
    document.getElementById(`test3`).innerHTML = 16;
    break;
  case `Kiba`:
    document.getElementById(`test3`).innerHTML = 17;
}

//string method
let favFood = `I can be indecisive. My favorite type of food is...Italian!`;
let actualFavFood = favFood.replace(`Italian`, `Thai`);
console.log(favFood, actualFavFood);
document.getElementById(`test4`).innerHTML = actualFavFood;

//number method
let r = 12.503496;
let y = 696.304053463;
let a = 60703.3453367522442;
let n = 58.5335;
document.getElementById(`test5`).innerHTML =
  `Each of these numbers are rounded and given a specific decimal place to display.` +
  "<br><br>" +
  r.toFixed(0) +
  "<br>" +
  y.toFixed(3) +
  "<br>" +
  a.toFixed(6) +
  "<br>" +
  n.toFixed(1);
