const randomQuestion = `Do you have a favorite book series?`;
console.log(randomQuestion);

const school = `NVC`;
console.log(`Hello, ${school}!`);

let quanShells = 77;
const seaShells = `seashells`;
const seaShore = `seashore`;
let timeClock = 6;
const oClock = `o'clock`;
document.getElementById(
  `test1`
).innerHTML = `She sells ${quanShells} ${seaShells} by the ${seaShore} at ${timeClock} ${oClock}!`;

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

//string method
let favFood = `I can be indecisive. My favorite food (I think) is Italian!`;
let actualFavFood = favFood.replace(`Italian`, `Thai`);
console.log(favFood, actualFavFood);
document.getElementById(`test4`).innerHTML = actualFavFood;
