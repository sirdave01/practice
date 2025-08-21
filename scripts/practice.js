const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Write a for loop that will iterate through the studentReport array and 
// print to the console the current array value if it is below 30.

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// Write a while loop that will iterate through the studentReport array and
// print to the console the current array value if it is below 30.

let index = 0;
while (index < studentReport.length) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }
    index++;
}

// Write a forEach loop that will iterate through the studentReport array and
// print to the console the current array value if it is below 30.

studentReport.forEach(function (value) {
    if (value < LIMIT) {
        console.log(value);
    }
});

// Write a for...in loop that will iterate through the studentReport array and
// print to the console the current array value if it is below 30.

for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }
}

// dynamically produce the day names of the next number
// of days from today's date

const today = new Date();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let nextDays = [];
for (let i = 0; i < DAYS; i++) {
    let nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    nextDays.push(dayNames[nextDate.getDay()]);
}
console.log("Next " + DAYS + " days are: " + nextDays.join(", "));

// learning functions
let firstName = 'Antonia';
let lastName = 'Francesca';

// writing a function with the snippet of fullname with two arguments (first and last)

function fullname(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// writing an anonymous function to return the full name
const fullName = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
};

// using an arrow function expression to return the fullname
const fullNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;

// Write an expression that calls the fullName function declaration
// and writes the result to an existing HTML element's text node with the ID of fullName
document.querySelector(`#fullName`).InnerHTML = fullName(firstName, lastName);
