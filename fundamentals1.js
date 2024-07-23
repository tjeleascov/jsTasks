// FUNDAMENTALS 1
//Values and Variables
console.log("Task 1");
let country = "Moldova";
let continent = "Europa";
let population = 2539000;

console.log("Country = " + country);
console.log("Continent = " + continent);
console.log("Population = " + population);

//Data Types
console.log("Task 2");
let isIsland = false;
let language;

console.log("Country = " + country);
console.log("Continent = " + continent);
console.log("Population = " + population);
console.log("Is island = " + isIsland);
console.log("Language = " + language);

//Basic Operators
console.log("Task 3");
console.log("Half of population is: " + population/2);
console.log("Population increased by 1: " + ++population);
console.log("Does " + country + " have more than in Finland? " + country>6000000);
console.log("Does " + country + " have less people than the average country" + 33000000>country);
language = "moldovanian";
let description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description);

//Equality Operators: == vs. ===    
//console.log("Task 4"); 
//let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("Noborders");
// }

//Logical Operators 
console.log("Task 5");
language = "english"    
if(language==="english" && population < 50000000 && isIsland===false) {
    console.log('You should live in Portugal');
} else {
    console.log('Portugal does not meet your criteria :(');
}


//Type Conversion and Coercion 
console.log("Task 6");
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617 
console.log('19' - '13' + 17); //617
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); //  115

//if / else Statements
//population = 35000000;
console.log("Task 7");
if (population > 33000000) {
    console.log("Portugal's population is above average");
} else {
    let difference = 33000000 - population; 
    console.log(`Portugal's population is ${difference} million below average`);
}

//The switch Statement 
console.log("Task 8");
language = 'Arabic';
switch(language) {
    case 'Chinese' :
    case 'mandarin' :
        console.log('MOST number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('Number 4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default: console.log('Great language too :D');
}