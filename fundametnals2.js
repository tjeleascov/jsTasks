// FUNDAMENTALS 2
//Functions
console.log("Task 9");
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}.`;
}

let output1 = describeCountry("Moldova", 2900000, "Chisinau");
let output2 = describeCountry("Ukraine", 38000000, "Chisinau");
let output3 = describeCountry("Romania", 19000000, "Bucuresti");
console.log(output1);
console.log(output2);
console.log(output3);

//Function Declarations vs. Expressions
console.log("Task 10");
function percentageOfWorld1(population) {
 return ((Math.round(population/7900*10000))/100);
}

let populationPercentage1 = percentageOfWorld1(1441);
let populationPercentage2 = percentageOfWorld1(38);
let populationPercentage3 = percentageOfWorld1(29);
console.log(populationPercentage1+ "%");
console.log(populationPercentage2 + "%"); 
console.log(populationPercentage3 + "%"); 

//Arrow Functions
console.log("Task 11");
let populationPercentage4 = (populationSecond) => Math.round((populationSecond / 7900) * 10000) / 100;
let populationPercentage5 = (populationSecond) => Math.round((populationSecond / 7900) * 10000) / 100;
let populationPercentage6 = (populationSecond) => Math.round((populationSecond / 7900) * 10000) / 100;

console.log(populationPercentage4(1441) + "%"); 
console.log(populationPercentage5(38) + "%"); 
console.log(populationPercentage6(29) + "%"); 


//Functions Calling Other Functions
console.log("Task 12");
function describePopulation(countryParam, populationParam) {
    console.log(countryParam + " has " + populationParam + " million people, which is about "
        + percentageOfWorld1(populationParam) + "% of the world."
    );
}

describePopulation("China", 1441);
describePopulation("Ukraine", 38);
describePopulation("Romania", 29);

//Introduction to Array
console.log("Task 13");
let populations = [1441, 38, 29, 2.7];
if(populations.length === 4) console.log("Array have 4 elements " + true) 
    else console.log("Array have 4 elements " + false); 

let percentages = [percentageOfWorld1(1441), percentageOfWorld1(38), percentageOfWorld1(29), percentageOfWorld1(2.7)];
console.log(percentages);

//Basic Array Operations (Methods)
console.log("Task 14");
let neighbours = ["Ukraine", "Romania"];
neighbours.push("Utopia");
neighbours.pop();
if(!neighbours.includes("Germany")) console.log("Probably not a central European country :D");
let index = neighbours.indexOf("Ukraine");
neighbours[index] = "Republic of Ukraine";
console.log(neighbours);

//Iteration: The for Loop
console.log("Task 15");
let i = 1;
while (i<=50) {
    console.log("Voter number " + i +  " is currently voting");
    i++;
}

//Looping Arrays, Breaking and Continuing 
console.log("Task 16");
let percentages2 = [];
for(let i = 0; i<populations.length; i++) {
    percentages2[i] = percentageOfWorld1(populations[i]);
}
console.log("Percentages array from the first task: " + percentages);
console.log("Percentages array two from the second task: " + percentages2);

//Looping Backwards and Loops in Loops
console.log("Task 17");
let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Poland', 'Sweden', 'Ukraine']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log("Neighbour : " + listOfNeighbours[i][j]);
    }
}

//The while Loop    
console.log("Task 18");
i = 0;
let percentages3 = [];
while(i<populations.length) {
    percentages3[i] = percentageOfWorld1(populations[i]);
    i++;
}
console.log(percentages3);

//Introduction to Objects
//Dot vs. Bracket Notation    
//Object Methods   
console.log("Task 19");
let myCountry = {
    country : "Moldova",
    capital : "Chisinau",
    language : "romanian",
    population : 2.9,
    neighbours : ["Romania", "Ukraine"],
    isIsland,
    describe () {
        console.log(`${this.country} has ${this.population} million ${this.language} speaking people` +
            ` ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};

myCountry.population += 2;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people` +
    ` ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry['population'] -= 2; 

console.log("Task 20");
myCountry.describe();
console.log(myCountry.checkIsland());












