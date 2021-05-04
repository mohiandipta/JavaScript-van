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
