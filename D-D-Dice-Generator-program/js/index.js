const init = function (ev){
  document.getElementById('B2').addEventListener('Reset', reset);
  document.getElementById('B1').addEventListener('Submit', send);
}
const reset = function (ev){
  ev.preventDefault();
  document.getElementById('B2').reset
}
const send = function (ev){
  ev.preventDefault();
  document.getElementById('B1').submit
}
function random1(){
document.getElementById('d6') .innerHTML = Math.floor(Math.random() * 6);
// random number generator for a 6 sided dice
console.log(random);
}

function random2() {
document.getElementById('d8').innerHTML = Math.floor(Math.random() * 8);
// random number generator for a 8 sided dice
console.log(random);
}

function random3(){
document.getElementById('d10').innerHTML = Math.floor(Math.random() * 10);
// random number generator for a 10 sided dice
console.log(random);
}

function random4(){
document.getElementById('d20').innerHTML = Math.floor(Math.random() * 20);
// random number generator for a 20 sided dice
console.log(random);
}

