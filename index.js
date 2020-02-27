/*
JELIN Remy
Introduction javascript
*/

/*
let a = 2;
let b = 3;

console.log(a, b);

a += 1;

const c = (3 * a) + b;

console.log(c);

*/

/*c += 2; on ne peut pas changer une constante */
/*
const d = "apples";
console.log("I love" + d);
console.log(d[2]);
*/
/* const name = prompt("what's your name ?");
alert("Hi " + name); */

/*
let age = Number(prompt("How old are you ?"));

if (age > 0) {
    alert("Thanks");

} else {
    alert("No Thanks");
}

*/

/*
let tables = [6, 2, 3, 4];
let minval = tables[0];

for (let i = 0; i < tables.length; i++) {
    if (tables[i] < minval) {
        minval = tables[i];
    }
}*/
/* trier une liste avec une boucle for */

/* Permet de donner le jour suivant

let jour = prompt(String("what day is it ?"));
let jour2 = "";

switch (jour) {
    case "Lundi":
        jour2 = "Mardi";
        break;
    case "Mardi":
        jour2 = "Mercredi";
        break;
    case "Mercredi":
        jour2 = "Jeudi";
        break;
    case "Jeudi":
        jour2 = "Vendredi";
        break;
    case "Vendredi":
        jour2 = "Samedi";
        break;
    case "Samedi":
        jour2 = "Dimanche";
        break;
    case "Dimanche":
        jour2 = "Lundi"
        break;
    default:
        console.log("Error : I don't know this day")
}
if (jour2 !== "") {
    console.log(`Demain est ${jour2}`);
}

*/

/* ce qie j'ai fait

let countdown = 10
while (countdown > 0) {
    console.log(countdown);

    countdown--;
}

alert("Takeoff")

*/

/* ce que la prof a fait

const takeOffTime = 1;
console.log("Start");
for( let secBeforeTakeOff=10; secBeforeTakeOff>=TakeOffTime; secBeforeTakeOff--;){
    console.log("secBeforeTakeOff")

}

console.log("Take-off !!");

*/


/*

boucle while qui fait une table de 5

const nb = 5;
let i = 1;
while (i<=10) {
    console.log(`${nb} x ${i} = ${nb*i}`);
    i++;
}

*/

/*
function Squarre(a){
  return a*a;
}

function Square2(a){
  return Math.pow(a,2);
}

console.log(Squarre(2))
console.log(Square2(3))

let mypow2 = {
  square:(a) => a*a
};

let res = mypow2.square(2)

console.log(res)


 ce que la prof a fait =>

const SquareX_v2 = x => x * x;

console.log(SquareX_v2(4));

*/

/* joue un peu le role d'un dictionnaire pour javascript*/
/*
const neuron = {
  name: "neuron_1",
  type: "cholinergic neuron",
  locate: "hypothalamus",
  nbSynapse: 102,

  getinfo(){
    return `${this.name} is a ${this.type} located in the ${this.locate} and has ${this.nbSynapse} synapses.`
  }
};

console.log(neuron.getinfo());
*/
/* actualisé nos infos*/

/*

console.log("Warning : new connections added")
neuron.nbSynapse = 110;
console.log(neuron.getinfo());

*/

/*

const larfeuille = {
  owner:"John",
  amountofmoney:"100",

  add(amount){
    this.amountofmoney += amount;
  },

  sub(amount){
    this.amountofmoney -= amount;
  },

  getmoney(){
    return `in your wallet Mr. ${this.owner} is left ${this.amountofmoney}`
  }
};

console.log(larfeuille.add(5));
console.log(larfeuille.getmoney());

*/

/*

function Sumtriple(a,b){
  if(a == b){
    console.log((a+b)*3)
  }else{
    console.log(a+b)
  }
}

*/

function printCurrentPage(){
  window.print();
}
