// let name = 'Mohian';
// let age = 23;

//object
let person = {
    name: 'Mohi',
    age: 24
};



// array
let selectedColor = ['red', 'blue'];
selectedColor[2] = 'green';
console.log(selectedColor);
console.log(person);



// function
function greet() {
    console.log("Hello world");
}

greet();



// function with parameters
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

function showDate(work) {
    console.log(date + " " + work);
}
showDate("Coding");



// ternary operator
var time = new Date();
var now = time.getHours();

function ShowTime() {
    var type = time > 18 ? 'night' : 'day'
    console.log(type);
}
ShowTime();



// logical operator
let highIncome = true;
let goodCreditScore = false;

function CalculateEligibility() {
    let eligibleForLoan = highIncome && goodCreditScore;
    let type = eligibleForLoan == true ? 'Eligible' : 'Not Eligible'
    console.log(type);
}
CalculateEligibility();



// non-boolean logical operator
let userColor = undefined;
let defaultColor = 'green';

function ChooseColor() {
    let currentColor = userColor || defaultColor;
    console.log(currentColor);
}
ChooseColor();



// swaping values
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);



// if else
let clock = new Date();
let hours = clock.getHours();

function Condition() {
    if (hours >= 6 && hours < 12) {
        console.log('Good morning');
    }
    else if (hours >= 12 && hours < 18) {
        console.log('Good afternoon');
    }
    else
        console.log('Good evening');
}
Condition();



// switch case
let Hours = new Date();
let Now = Hours.getHours();

function User() {
    switch (Now) {
        case Now >= 6 && Now < 12:
            console.log('Good Morning');
            break;
        case Now >= 12 && Now < 18:
            console.log('Good afternoon');
        case Now >= 18 && Now < 24:
            console.log('Good afternoon');
        default:
            break;
    }
}
User();



// for loop
function loop() {
    let statement = 'Hello world';
    for (let i = 0; i < 5; i++) {
        console.log(statement);
    }
}
loop();



// do-while
let i = 0;

function OddNumber() {

    do {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    } while (i <= 10);
}
OddNumber();



// for-in
let Mohian = {
    name: 'Mohian',
    age: 24
}

function Details() {

    for (let key in Mohian)
        console.log(key, Mohian[key]);
}
Details();



// Demerit points
const speedLimit = 70;
const kmPerPoint = 5;

function checkSpeed(speed) {

    if (speed <= speedLimit) {
        console.log('Speed is ok');

        return;
    }
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points > 12) {
            console.log('License Suspended');
        }
        else {
            console.log(points);
        }
    }
}
checkSpeed(50);



// show odd-even number
let number = 10;

function showNumbrs(limit) {

    for (let i = 0; i <= limit; i++) {
        const message = i % 2 === 0 ? 'Even' : 'Odd'
        console.log(i, message);
    }
}
showNumbrs(number);



// show ily strings
const movie = {
    name: 'Tenet',
    year: 2020,
    rating: 7.8,
    director: 'Christopher Nolan'
};

function showStringsOnly(obj) {

    for (let key in movie) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}
showStringsOnly(movie);



// grading
const marks = [90, 100, 50];

function calculateGrade(marks) {
    const average = calculateAverage(marks)
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A+';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}
console.log(calculateGrade(marks));



// stars
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}
showStars(5);



// show prime numbers
function showPrimeNumbers(numLimit) {
    for (let num = 2; num < numLimit; num++) {
        let isPrime = true;
        for (let fector = 2; fector < num; fector++) {
            if (num % fector === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num);
        }
    }
}
showPrimeNumbers(20);