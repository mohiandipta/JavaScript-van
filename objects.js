
// factory function
// function createCircle(radius, location) {
//     return {
//         radius,
//         location: location,
//         isVisible: false,
//         draw(name) {
//             console.log(name);
//         }
//     };
// }
// const circle = createcircle(1, 'dhaka');
// console.log(circle);
// circle.draw('draw');



// constructor function

function range(title, radius) {
    this.title = title;
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}
const circle1 = new range('radius is:', 1);
console.log(circle1);


// cloning an object

const height = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

// const another = {}
// for (let key in height) {
//     another[key] = height[key]
// }

const another = Object.assign({
    color: 'yellow' // this new object has new property
}, height); // this line is equivalent to previous lines

console.log(another);



// template literal
const message = `This is my
 first message`; // using backtick symbol, we can print any string how its look like in code

const names = 'Mohian';
const text = 'Its you'

const details =
    `Hi, this is ${names}

I know ${text}, and 
Thanks you for joining my mailing list.

regards
Mohi`
console.log(details);




// Exercise-1
const address = {
    street: 'Shakhertek',
    city: 'dhaka',
    zipCode: 2200,
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);



// Exercise-2
// factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    };
}

const destination = new createAddress('Zilla school Square', 'Mymensignh', 2200)
console.log(destination);

// constructor function
function AddressDetails(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
const home = new AddressDetails('Shukarabad', 'Dhanmondi', 2100)
console.log(home);



// Exercise-3
// const post = {
//     title: 'Inception',
//     body: 'Movie',
//     author: 'Christopher Nolan',
//     view: '100M',
//     comment: [{
//         author: 'Wes Anderson',
//         body: 'Film Director',
//     }],
//     isLive: true,
// }

let Views = '100M';
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.view = Views;
    this.comment = [];
    this.isLive = false;
}
const publish = new Post('Inception', 'Movie', 'Christopher Nolan', '100M');
console.log(publish);



// // Exercise-4
// const priceRanges = [
//     { lebel: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
//     { lebel: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
//     { lebel: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
// ];

// const restaurant = [
//     { averagePerPerson = 5 }
// ];