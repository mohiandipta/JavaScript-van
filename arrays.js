// arrow function

const courses = [
    { id: '', name: 'SAD' },
    { id: '', name: 'CG' },
];

const course = courses.find(course => courses.name === 'SAD');

console.log(course);



// combining arrays
const first = [1, 2, 3, 4];
const second = [5, 6, 7];

const combine = first.concat(second);
console.log(combine);

const slice = combine.slice(2, 6);
console.log(slice);



// sorting array
const sortingNum = [3, 5, 2, 4, 1];

sortingNum.sort();
console.log(sortingNum);

sortingNum.reverse();
console.log(sortingNum);

//
const language = [
    { id: 1, name: 'NodeJs' },
    { id: 2, name: 'Javascript' }
];

const sortLang = language.sort(function name(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(sortLang);



// filtering an array
const randomNum = [1, -2, 2, -1, -4, 3, 4, -3]

randomNum.sort();
const filterPositive = randomNum.filter(function (value) {
    return value >= 0;
});
const filterNegative = randomNum.filter(function (value) {
    return value <= 0;
});

console.log(randomNum);
console.log(filterNegative);
console.log(filterPositive);



// mapping an array
const digit = [1, 2, -5, 3, -1, 4, 5, 'open']

const filtered = digit.filter(function (value) {
    return value >= 0;
});

const items = filtered.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';

console.log(html);



// Exercise-1
// Array from range

const rangeFromArray = arrayFromRange(1, 8);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++) {
        output.push(i);
        return output;
    }
}
console.log(rangeFromArray);