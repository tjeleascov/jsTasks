/*
Prototypes 
Task 1
Use __proto__ to assign prototypes in a way that any property lookup will follow the path: 
pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), 
and bed.glasses should be 1 (found in head).
*/
let pockets = {
  money: 2000
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: pockets
};

let table = {
  pen: 3,
  __proto__: bed
};

let head = {
  glasses: 1,
  __proto__: table
};

console.log(head);

/*
Task 2
We have rabbit inheriting from animal.
If we call rabbit.eat(), which object receives the full property: animal or rabbit?
*/
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

/* 
The Clock class (see the sandbox) is written in functional style.
Rewrite it in the “class” syntax. 
*/
class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }

  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  start() {
    this.render(); 
    this.timer = setInterval(() => this.render(), 1000); 
  }

  stop() {
    clearInterval(this.timer); 
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
clock.stop();

/*
Objets
Task 1
Write a function count(obj) that returns the number of properties in the object:
*/

let user = {
  name: 'John',
  age: 30
};

function count(user) {
  return Object.keys(user).length;
}

console.log(count(user)); 

/*
There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0.
*/

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  let sum = 0;
  
  for(let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

console.log(sumSalaries(salaries)); 

/*
Destructuring assignment
Task 1
Write the destructuring assignment that reads:
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
Here’s an example of the values after your assignment:
*/

let userDistructor = {
  name: "John",
  years: 30
};

let {name, years, isAdmin} = userDistructor;

console.log(name);
console.log(years);
console.log(Boolean(isAdmin));

/*
Map and Set
Task 1
Create a function unique(arr) that should return an array with unique items of arr.
*/
function unique(arr) {
  return new Set(arr);
}

let values = [ "Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

console.log(unique(values));

/*
Task 2
We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
But that doesn’t work:
How can we fix the code to make keys.push work?
*/

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
console.log(keys);