//En constant som Der vi bruker [] er en Array den logger alle ting som står inn vær for seg.
// så man kan hente ut alle eller vert enkelt element for seg selv.

//CheatSheet
//Cosnt = ["", "", ""];
//console.log();
//const = document.querySelector("#");
// .text

//Eksempel
const fruitBowl = ["Apple", "Pear", "Graper"];
//console.log(fruitBowl);
//console.log(fruitBowl[0]);

const buisnessCard =  ["Christian", "Gullaksen", "Kursdeltager", 38 ];
//console.log(buisnessCard);
//console.log(buisnessCard[0]);


//henter ut informasjon som senere kan fyles i.
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const title = document.querySelector("#title");
const age = document.querySelector("#age");
console.log(firstName, lastName, title, age);


//vi definere hva som skall inn hvor.
//vi setter inn reiktig element på rett plas der vi velger fra "buisnessCard" Consten våres ved hjelp av 0-4.
firstName.textContent = buisnessCard [0];
lastName.textContent = buisnessCard [1];
title.textContent = buisnessCard [2];
age.textContent = buisnessCard [3];
 

//
//


// Array with objects
const charecterCreation = [{"firstName": "Enforsix"}, {"lastName": "Etern"}, {"class": "Ranger"}, {"level": 14}];

console.log(charecterCreation);
console.log(charecterCreation[2].class);


//
//


//objects with arrays
const ranger = {"mediumArmor": ["head", "glavs", "feet", "legs", "chest", "ring", "neck"], "wapon": ["bow", "dagger", "shortSword"]};

// vi velger "const" 
// vi velger under kategori ("wapon")
// vi velger objegt i den kategorien ("[0] bow")
console.log(ranger)
console.log(ranger.wapon);
console.log(ranger.wapon[0]);


